import { updateDraggedTask } from "@/helpers";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
export const useBoardStore = defineStore("board-store", {
  state: () =>
    useStorage("board-state", {
      todo_tasks: [
        { text: "John", id: "id#1", order: 1, status: "todo" },
        { text: "Gerard", id: "id#3", order: 2, status: "todo" },
      ],
      backlog_tasks: [],
      done_tasks: [{ text: "Joao Jr.", id: "id#4", order: 1, status: "done" }],
      inprogress_tasks: [
        { text: "Joao", id: "id#2", order: 1, status: "inprogress" },
      ],
    } as BoardState),
  getters: {
    tasks: (state) => {
      return {
        todo: state.todo_tasks,
        inprogress: state.inprogress_tasks,
        backlog: state.backlog_tasks,
        done: state.done_tasks,
      };
    },
  },
  actions: {
    addTask(TaskItem: Task) {
      return this.todo_tasks.push(TaskItem);
    },
    removeTaskItem(TaskItem: Task) {
      const targetIndex = this.todo_tasks.indexOf(TaskItem);
      if (targetIndex > -1) {
        this.todo_tasks.splice(targetIndex, 1);
      }
    },
    backlogAction(e: VueDraggableHandlers<Task>) {
      this.backlog_tasks = updateDraggedTask(this.backlog_tasks, "backlog");
    },
    doneAction(e: VueDraggableHandlers<Task>) {
      this.done_tasks = updateDraggedTask(this.done_tasks, "done");
    },
    todoAction(e: VueDraggableHandlers<Task>) {
      this.todo_tasks = updateDraggedTask(this.todo_tasks, "todo");
    },
    inprogressAction(e: VueDraggableHandlers<Task>) {
      this.inprogress_tasks = updateDraggedTask(
        this.inprogress_tasks,
        "inprogress"
      );
    },
  },
});
