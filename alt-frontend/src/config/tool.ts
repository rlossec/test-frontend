export const TOOL_STATUSES: ToolStatus[] = ["active", "unused", "expiring"];
export type ToolStatus = "active" | "unused" | "expiring";

export const MAX_TOOL_COST = 3000;

export const TOOL_CATEGORIES: ToolCategory[] = [
  "Communication",
  "Development",
  "Design",
  "Productivity",
  "Analytics",
  "Security",
  "Marketing",
  "HR",
  "Finance",
  "Infrastructure",
];
export type ToolCategory =
  | "Communication"
  | "Development"
  | "Design"
  | "Productivity"
  | "Analytics"
  | "Security"
  | "Marketing"
  | "HR"
  | "Finance"
  | "Infrastructure";
