<template>
  <div class="top">
    <h1>Home</h1>
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
