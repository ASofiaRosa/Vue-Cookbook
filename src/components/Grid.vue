<template>
  <v-container class="top">
    <v-row justify="space-around">
      
      
      <app-card
        v-for="recipie in recipies"
        :recipie="recipie"
        :key="recipie.index"
        class="ma-2 pa-2"
      ></app-card>
    </v-row>
  </v-container>
</template>

<script>
import Card from "./Card.vue"
import client from "../client"

export default {

  components: {
    appCard: Card,
  },
  computed: {
    recipies() {console.log(this.$store.getters.recipies)
      return this.$store.getters.recipies;
      
    }
  }
}
</script>
<style scoped>
.top {
  padding: 1rem;
}
</style>
