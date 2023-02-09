interface Task {
  text: string;
  id: string;
  order: number;
  status: TaskStatus;
}
interface BoardState {
  todo_tasks: Task[];
  backlog_tasks: Task[];
  inprogress_tasks: Task[];
  done_tasks: Task[];
}

type TaskStatus = "todo" | "inprogress" | "done" | "backlog";