import { projects } from "../src/data/projects.js";

const failures = [];
const allowedProjectHosts = new Set([
  "google.com",
  "maps.google.com",
  "youtube.com",
  "youtu.be",
  "youtube-nocookie.com"
]);

if (projects.length !== 18) {
  failures.push(`Expected 18 projects, found ${projects.length}.`);
}

for (const project of projects) {
  if (!project.officialSnapshot) failures.push(`${project.name}: missing audited project snapshot.`);
  if (project.sourceUrl || project.referenceUrl) failures.push(`${project.name}: customer-facing source/reference URL must be empty.`);
  if (project.newsMedia?.some((item) => item.url)) failures.push(`${project.name}: project update cards must stay inside Maria Luisa's website.`);

  const mediaLinks = project.videoTourLinks || [];
  if (mediaLinks.some((item) => !isYouTubeUrl(item.url))) {
    failures.push(`${project.name}: project media links must be YouTube-only.`);
  }

  inspectUrls(project, project.name);
}

const projectsWithYouTube = projects.filter((project) => isYouTubeUrl(project.videoTourEmbedUrl));
const projectsWithoutYouTube = projects.filter((project) => !project.videoTourEmbedUrl);

if (projectsWithYouTube.length !== 16) {
  failures.push(`Expected 16 verified YouTube embeds, found ${projectsWithYouTube.length}.`);
}
if (projectsWithoutYouTube.length !== 2) {
  failures.push(`Expected 2 broker-request media states, found ${projectsWithoutYouTube.length}.`);
}

if (failures.length) {
  console.error("Project link-policy QA failed:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Project link-policy QA passed for ${projects.length} projects.`);
console.log(`${projectsWithYouTube.length} projects have verified YouTube embeds; ${projectsWithoutYouTube.length} use an in-site broker request state.`);
console.log("No exported project redirects to DMCI Homes, DMCI Online, Drive, 360-tour, or third-party property pages.");

function inspectUrls(value, path, seen = new WeakSet()) {
  if (value == null) return;
  if (typeof value === "string") {
    if (!/^https?:\/\//i.test(value)) return;
    let hostname = "";
    try {
      hostname = new URL(value).hostname.replace(/^www\./, "").toLowerCase();
    } catch {
      failures.push(`${path}: malformed URL ${value}`);
      return;
    }
    if (!allowedProjectHosts.has(hostname)) failures.push(`${path}: disallowed exported external host ${hostname}.`);
    return;
  }
  if (typeof value !== "object" || seen.has(value)) return;
  seen.add(value);

  if (Array.isArray(value)) {
    value.forEach((item, index) => inspectUrls(item, `${path}[${index}]`, seen));
    return;
  }

  Object.entries(value).forEach(([key, nested]) => inspectUrls(nested, `${path}.${key}`, seen));
}

function isYouTubeUrl(value) {
  if (!value) return false;
  try {
    const hostname = new URL(value).hostname.replace(/^www\./, "").toLowerCase();
    return ["youtube.com", "youtu.be", "youtube-nocookie.com"].includes(hostname);
  } catch {
    return false;
  }
}
