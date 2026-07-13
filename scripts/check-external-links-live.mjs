import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(".");
const sourceEntries = ["src", "api", "index.html", "public/robots.txt"];
const urls = new Set();

for (const entry of sourceEntries) {
  await collectEntry(path.join(root, entry));
}

const candidates = [...urls]
  .filter((url) => /^https:\/\//i.test(url))
  .filter((url) => !url.includes("${"))
  .filter((url) => !url.startsWith("https://api.resend.com/"))
  .sort();

const results = [];
const queue = [...candidates];
const workers = Array.from({ length: 12 }, async () => {
  while (queue.length) {
    const url = queue.shift();
    results.push(await verifyUrl(url));
  }
});

await Promise.all(workers);
results.sort((a, b) => a.url.localeCompare(b.url));

const failed = results.filter((result) => !result.ok);
const statusCounts = results.reduce((counts, result) => {
  const key = String(result.status || result.error || "unknown");
  counts[key] = (counts[key] || 0) + 1;
  return counts;
}, {});

console.log(`Live external-link check completed for ${results.length} HTTPS URLs.`);
console.log(`Reachable: ${results.length - failed.length}; failed: ${failed.length}.`);
console.log(`Result counts: ${Object.entries(statusCounts).map(([key, count]) => `${key}=${count}`).join(", ")}`);

if (failed.length) {
  console.error("Live external-link failures:");
  failed.forEach((result) => console.error(`- ${result.url}: ${result.status || result.error}`));
  process.exit(1);
}

async function collectEntry(entry) {
  let entryStats;
  try {
    entryStats = await stat(entry);
  } catch {
    return;
  }

  if (entryStats.isDirectory()) {
    const children = await readdir(entry);
    for (const child of children) {
      if (["node_modules", "dist"].includes(child)) continue;
      await collectEntry(path.join(entry, child));
    }
    return;
  }

  if (!/\.(?:jsx?|tsx?|css|html|txt)$/i.test(entry)) return;
  const source = await readFile(entry, "utf8");
  const matches = source.match(/\bhttps:\/\/[^\s"'`<>\\]+/gi) || [];
  matches
    .map((url) => url.replace(/[),.;]+$/g, ""))
    .forEach((url) => urls.add(url));
}

async function verifyUrl(url) {
  const probeUrl = youtubeOembedUrl(url) || url;
  let lastError = "request failed";

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      let response = await fetchWithTimeout(probeUrl, { method: "HEAD" });
      if ([400, 404, 405, 410].includes(response.status)) {
        response = await fetchWithTimeout(probeUrl, {
          method: "GET",
          headers: { Range: "bytes=0-2047" }
        });
        await response.body?.cancel();
      }

      const ok = response.status >= 200 && response.status < 500 && ![404, 410].includes(response.status);
      if (ok) return { url, ok: true, status: response.status };
      lastError = `HTTP ${response.status}`;
    } catch (error) {
      lastError = error?.name === "AbortError" ? "timeout" : error?.message || "request failed";
    }
  }

  return { url, ok: false, error: lastError };
}

async function fetchWithTimeout(url, options) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    return await fetch(url, {
      ...options,
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": "DMCI-Broker-Website-Link-QA/1.0",
        ...(options.headers || {})
      }
    });
  } finally {
    clearTimeout(timeout);
  }
}

function youtubeOembedUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return "";
  }

  const hostname = parsed.hostname.replace(/^www\./, "").toLowerCase();
  if (!["youtube.com", "youtu.be", "youtube-nocookie.com"].includes(hostname)) return "";

  let videoId = parsed.searchParams.get("v") || "";
  if (!videoId && hostname === "youtu.be") videoId = parsed.pathname.split("/").filter(Boolean)[0] || "";
  if (!videoId) {
    const parts = parsed.pathname.split("/").filter(Boolean);
    const marker = parts.findIndex((part) => ["embed", "shorts", "live"].includes(part));
    if (marker >= 0) videoId = parts[marker + 1] || "";
  }
  if (!videoId) return "";

  const watchUrl = `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
  return `https://www.youtube.com/oembed?url=${encodeURIComponent(watchUrl)}&format=json`;
}
