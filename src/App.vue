<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12 py-3"><router-view></router-view></div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header.vue"

export default {
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch("getRecipies");
  }
}
</script>

<style>
body {
}
</style>
