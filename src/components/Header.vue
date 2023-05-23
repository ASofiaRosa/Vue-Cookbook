<template>
  <v-card color="basil">
    <v-card-title>
      <div>
        <h1 class="font-weight-bold text-h2 basil--text">Cookbook</h1>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-btn icon class="p-8">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item2 in text" :key="item2">
        <v-card color="basil" flat>
          <v-card-text>{{ item2 }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <v-container class="top">
    <v-row justify="space-around">
    <appMiniCard v-for="recipie in recipies" :key="recipie.recipieId" :recipie="recipie"></appMiniCard>
    </v-row>
    </v-container>
  </v-card>
  
</template>

<script>
import {mapGetters} from "vuex"
import MiniCard from "./MiniCard.vue";

export default {
  data() {
    return {
      tab: null,
      items: ["Appetizers", "Entrees", "Deserts", "Added"],
      text: ["1", "2", "3", "4"],
    }
  },

  computed: {
    ...mapGetters({
      recipies: "addedRecipies",
    })
  },
  components: {
    appMiniCard: MiniCard
  }
}
</script>

<style scoped>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
