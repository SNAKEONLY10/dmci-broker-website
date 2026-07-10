import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const packageJson = JSON.parse(readFileSync(path.join(root, "package.json"), "utf8"));
const buildDate = new Date().toISOString();
const commitSha = process.env.VERCEL_GIT_COMMIT_SHA || git(["rev-parse", "HEAD"]) || "unknown";
const commitShort = commitSha === "unknown" ? "unknown" : commitSha.slice(0, 12);
const branch = process.env.VERCEL_GIT_COMMIT_REF || git(["rev-parse", "--abbrev-ref", "HEAD"]) || "unknown";
const dirtyStatus = process.env.VERCEL ? "" : git(["status", "--short"]);
const buildInfo = {
  app: packageJson.name,
  version: packageJson.version,
  commitSha,
  commitShort,
  branch,
  buildDate,
  qaDate: process.env.QA_DATE || buildDate.slice(0, 10),
  buyerVisible: false,
  dirty: Boolean(dirtyStatus)
};

mkdirSync(publicDir, { recursive: true });
writeFileSync(path.join(publicDir, "build-info.json"), `${JSON.stringify(buildInfo, null, 2)}\n`, "utf8");
writeFileSync(path.join(publicDir, "launch-diagnostics.txt"), [
  `app=${buildInfo.app}`,
  `version=${buildInfo.version}`,
  `commit=${buildInfo.commitSha}`,
  `branch=${buildInfo.branch}`,
  `buildDate=${buildInfo.buildDate}`,
  `qaDate=${buildInfo.qaDate}`,
  `dirty=${buildInfo.dirty ? "true" : "false"}`
].join("\n") + "\n", "utf8");

console.log(`Build diagnostics written for ${buildInfo.app}@${buildInfo.commitShort}.`);

function git(args) {
  try {
    return execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
}
