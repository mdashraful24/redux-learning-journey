import type { ITaskInput } from "./tasks.type";

export const taskFormDefaultValues: ITaskInput = {
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
};
