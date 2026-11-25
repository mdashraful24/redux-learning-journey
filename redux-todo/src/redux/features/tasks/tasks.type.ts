export type TTaskType = "pending" | "in-progress" | "done";

export type TTaskPriority = "low" | "medium" | "high";

export interface ITask {
    title: string;
    description: string;
    priority: TTaskPriority;
    status: TTaskType;
}

export type TInitialState = ITask[];
