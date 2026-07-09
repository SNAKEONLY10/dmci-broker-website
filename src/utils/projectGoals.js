const primaryBuyerGoals = new Set(["Own Use", "Investment"]);

export function isPrimaryBuyerGoal(value) {
  return primaryBuyerGoals.has(value);
}

export function buyerGoalLabel(value) {
  if (value === "Own Use") return "residence";
  if (value === "Investment") return "investment";
  return "buyer goal";
}

export function projectMatchesPurpose(project, purpose) {
  if (!purpose) return true;
  return Array.isArray(project.purposeTags) && project.purposeTags.includes(purpose);
}

export function sortProjectsForGoal(items, goal) {
  const sorted = [...items];
  if (!isPrimaryBuyerGoal(goal)) {
    return sorted.sort(compareDirectoryOrder);
  }

  return sorted.sort((a, b) => {
    const scoreDelta = goalScore(b, goal) - goalScore(a, goal);
    if (scoreDelta) return scoreDelta;
    return compareDirectoryOrder(a, b);
  });
}

export function isReadyForOccupancy(project) {
  const value = normalized(`${project.status} ${project.turnoverYear}`);
  return value.includes("ready") || value.includes("rfo");
}

export function isUpcomingProject(project) {
  const value = normalized(`${project.status} ${project.turnoverYear}`);
  return value.includes("new") ||
    value.includes("under construction") ||
    value.includes("pre selling") ||
    value.includes("preselling");
}

export function latestTurnoverYear(project) {
  const years = String(project.turnoverYear || "").match(/20\d{2}/g);
  if (!years) return isReadyForOccupancy(project) ? 0 : -1;
  return Math.max(...years.map(Number));
}

function goalScore(project, goal) {
  const tags = new Set(project.purposeTags || []);
  const units = new Set(project.unitTypes || []);
  const year = latestTurnoverYear(project);
  const currentYear = new Date().getFullYear();
  let score = 0;

  if (goal === "Own Use") {
    if (isReadyForOccupancy(project)) score += 48;
    if (tags.has("Family")) score += 24;
    if (units.has("2BR") || units.has("3BR") || units.has("4BR")) score += 12;
    if (year >= currentYear && year <= currentYear + 1) score += 8;
    if (tags.has("Rental")) score -= 4;
    return score;
  }

  if (goal === "Investment") {
    if (tags.has("Rental")) score += 42;
    if (isUpcomingProject(project)) score += 30;
    if (year >= 2027) score += 14;
    if (isReadyForOccupancy(project)) score += 8;
    if (["Pasig", "Taguig", "Mandaluyong", "Quezon City", "Manila", "Pasay"].includes(project.location)) score += 5;
    return score;
  }

  return score;
}

function compareDirectoryOrder(a, b) {
  return (a.directoryOrder ?? 999) - (b.directoryOrder ?? 999);
}

function normalized(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}
