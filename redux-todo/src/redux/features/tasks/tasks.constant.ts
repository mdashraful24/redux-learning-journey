import type { TTaskPriority, TTaskStatus,  } from "./tasks.type";

export const TASK_STATUS: TTaskStatus[] = ["pending", "in-progress", "done"];

export const STATUS_LABELS: Record<TTaskStatus, string> = {
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
