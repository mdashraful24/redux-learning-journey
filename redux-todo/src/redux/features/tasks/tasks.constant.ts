import type { TTaskPriority, TTaskType } from "./tasks.type";

export const TASK_STATUS: TTaskType[] = ["pending", "in-progress", "done"];

export const STATUS_LABELS: Record<TTaskType, string> = {
    pending: "Pending",
    "in-progress": "In Progress",
    done: "Done",
};

export const TASK_PRIORITIES: readonly TTaskPriority[] = ["low", "medium", "high"] as const;

export const PRIORITY_LABELS: Record<TTaskPriority, string> = {
    low: "Low",
    medium: "Medium",
    high: "High",
};
