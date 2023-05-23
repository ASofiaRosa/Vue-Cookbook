<template>
  <div class="top">
    <app-grid></app-grid>
  </div>
</template>

<script>
import Grid from "./Grid.vue"

export default {
  components: {
    appGrid: Grid,
  },
}
</script>
<style scoped>
.top {
  padding: 1rem;
}
</style>
