<script setup lang="ts">
import { useBoardStore } from "@/store/board";
import TaskCard from "./TaskCard.vue";
import draggableComponent from "vuedraggable";
import { statusColors, statusText } from "@/constants";

const store = useBoardStore();
const props = defineProps<{ status: TaskStatus }>();
const bgColor = statusColors[props.status];

const change = {
  backlog: store.backlogAction,
  done: store.doneAction,
  todo: store.todoAction,
  inprogress: store.inprogressAction,
};

</script>

<template>
  <div class="flex flex-col p-5 w-full h-full">
    <span
      :class="
        props.status === 'inprogress'
          ? 'w-1/3'
          : props.status === 'backlog'
          ? 'w-1/4'
          : 'w-1/6'
      "
      :style="{
        backgroundColor: bgColor,
      }"
      class="rounded-tl-3xl rounded-tr-3xl rounded-br-3xl px-2 text-white text-xl font-medium"
      >{{ statusText[props.status] }}
    </span>
    <div class="flex-col mx-2 bg-white w-full h-[70vh] overflow-y-auto">
      <draggableComponent
        :list="store.tasks[props.status]"
        @change="change[props.status]"
        group="any"
        itemKey="id"
      >
        <template  #item="{ element, index }">
          <TaskCard  :key="index" :task="element" :statusColor="bgColor" />
        </template>
      </draggableComponent>
    </div>
  </div>
</template>
