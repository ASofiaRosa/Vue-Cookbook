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
  data() {
    return {
      recipies: [],
    }
  },
  created() {
    client
      .getEntries({
        content_type: "blog",
        // The following line orders the items per creation date:
        order: "sys.createdAt",
      })
      .then((response) => {
        this.recipies = response.items
        console.log(response.items)
      })
      .catch(console.error)
  },
  components: {
    appCard: Card,
  },
}
</script>
<style scoped>
.top {
  padding: 1rem;
}
</style>
