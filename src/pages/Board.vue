<script lang="ts">
import { defineComponent } from "vue";
import Tasks from "@/components/Tasks.vue";
import Draggable from "vuedraggable";

export default defineComponent({
  data() {
    return {
      dragging: false,
    };
  },
  components: {
    Tasks,
    Draggable,
  },
});
</script>

<template>
  <div class="flex flex-col w-full pt-12 px-6 bg-[#F4F7FE] content-between">
    <span class="px-5 text-2xl font-extrabold text-[#384756]">Kanban </span>
    <div class="flex flex-row justify-between">
      <Tasks status="backlog" />
      <Tasks status="todo" />
      <Tasks status="inprogress" />
      <Tasks status="done" />
    </div>
    <button class="absolute right-6 bottom-12 w-12 h-12 rounded-full bg-gradient-to-r from-[#697EA4] to-[#88AFC3]">
      <v-icon color="#fff"> mdi-plus </v-icon>
    </button>
  </div>
</template>

<style>
.buttons {
  margin-top: 35px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.not-draggable {
  cursor: no-drop;
}
</style>
