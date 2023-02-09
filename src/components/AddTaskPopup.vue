<script lang="ts">
import { useBoardStore } from '@/store/board'
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AddTaskPopup",
    setup() {
        const { todo_tasks, addTask } = useBoardStore()

        return {
            addTask,
            todo_tasks
        }

    },
    data() {
        return {
            dialog: false,
            text: "",

        }
    },
    methods: {
        addnewtask() {
            if (this.text.trim()) {
                this.addTask({
                    id: `id-#${this.todo_tasks.length + 1}`,
                    order: 0,
                    status: "todo",
                    text: this.text
                });
                this.text = "";
                this.dialog = false;
            }
        }
    }
})
</script>
<template>
    <div>
        <v-dialog v-model="dialog" width="500">

            <div class="flex flex-col bg-white w-full py-6 px-4 rounded-2xl">
                <input
                    class="w-full h-16 text-[#A979DD] text-xl p-4  rounded-lg border-[.1rem] border-solid border-[#A979DD] focus-visible:border-[#A979DD] focus-visible:outline-none"
                    v-model="text">
                <button
                    class="w-full h-14 outline-none rounded-lg border-none text-white text-2xl font-medium mt-8 bg-[#A979DD]"
                    @click="addnewtask">Add Task</button>
            </div>
        </v-dialog>
    </div>
</template>