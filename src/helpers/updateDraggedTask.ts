export const updateDraggedTask = (
  tasks: Task[],
  status: TaskStatus
) => {
  return tasks.map((task, index) => ({
    ...task,
    status,
    order: index + 1,
  }));
};
