<script setup lang="ts">
import { defineProps } from "vue";
interface Props {
  statusColor: string;
  task: Task;
}
const props = defineProps<Props>();
</script>
<template>
  <div
    :style="{
      borderColor: props.statusColor,
    }"
    class="flex flex-row justify-between w-full h-[150px] my-4 px-2 pt-4 rounded-tr-2xl rounded-br-2xl border-l-4 border-h bg-white"
  >
    <div class="flex flex-col w-full">
      <span class="text-black text-lg font-medium">
        User Jounry: {{ props.task.text }} {{ props.task.status }}
      </span>
      <span class="text-gray-400 text-sm font-normal"> Created at: </span>
      <span class="text-gray-400 text-sm font-normal"> Last update: </span>

      <span class="text-gray-400 text-sm font-normal"> comments </span>
    </div>
    <div class="flex flex-col h-full justify-center">
      <v-icon size="20" class="text-gray-400">mdi-pencil</v-icon>
      <v-icon size="20" class="mt-2 text-gray-400">mdi-delete-outline</v-icon>
      <v-icon size="20" class="mt-2 text-gray-400">mdi-comment-outline</v-icon>
    </div>
  </div>
</template>
