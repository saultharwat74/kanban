<template>
  <v-app>
    <v-main class="w-full h-full flex flex-row bg-[#F7F8FA] justify-center">
      <Board />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Board from '@/pages/Board.vue'

export default defineComponent({
  name: 'App',
  components: {
    Board,
  },
})
</script>
