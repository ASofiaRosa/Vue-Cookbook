<template>
  <v-container class="top"
    >{{ filteredRecipies }}
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

export default {
  components: {
    appCard: Card,
  },

  computed: {
    recipies() {
      console.log(this.$store.getters.recipies)
      return this.$store.getters.recipies
    },
    ingredients() {
      console.log(this.$route.query.ingredients)
      return this.$route.query.ingredients
    },
    filteredRecipies() {
      console.log(this.$store.getters.filteredRecipies)
      return this.$store.getters.filteredRecipies
    },
  },
}
</script>
<style scoped>
.top {
  padding: 1rem;
}
</style>
