<template>
  <v-card color="basil">
    <v-card-title>
      <div>
        <h1 class="font-weight-bold text-h2 basil--text">Cookbook</h1>
      </div>
      <v-spacer></v-spacer>
      <v-col v-if="search" cols="2" sm="3">
        <v-text-field
          label="Search"
          persistent-hint
          variant="solo"
        ></v-text-field>
      </v-col>

      <v-btn icon class="p-8">
        <v-icon @click="search = true">mdi-magnify</v-icon>
      </v-btn>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item"> {{ item }}</v-tab>
    </v-tabs>
    <v-row>
      <v-container v-if="tab === 3" class="top">
        <v-col>
          <v-card color="basil" flat>
            <v-card-text
              >You have added {{ numberSaved }} recipies:</v-card-text
            >
            <v-col>
              <v-row justify="space-around">
                <appMiniCard
                  v-for="recipie in recipies"
                  :key="recipie.recipieId"
                  :recipie="recipie"
                ></appMiniCard></v-row></v-col></v-card
        ></v-col>
      </v-container>

      <v-container fluid v-if="tab === 2" class="top">
        <v-card color="basil" flat>
          <v-card-text>Choose your ingredients:</v-card-text>
          <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="9">
              <v-row class="ma-2" justify="center">
                <v-checkbox
                  v-model="checked"
                  label="chicken"
                  id="chicken"
                  value="chicken"
                ></v-checkbox
                ><v-col cols="1"></v-col>
                <v-checkbox
                  v-model="checked"
                  label="tomatoes"
                  id="tomatoes"
                  value="tomatoes"
                ></v-checkbox
                ><v-col cols="1"></v-col>
                <v-checkbox
                  v-model="checked"
                  label="pasta"
                  id="pasta"
                  value="pasta"
                ></v-checkbox
                ><v-col cols="1"></v-col>
                <v-checkbox
                  v-model="checked"
                  label="asparagus"
                  id="asparagus"
                  value="asparagus"
                ></v-checkbox>
              </v-row>
            </v-col>
            <v-btn
              color="orange-lighten-2"
              variant="text"
              @click="filterNavigator"
            >
              Submit
            </v-btn>
          </v-row>
        </v-card>
      </v-container>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex"
import MiniCard from "./MiniCard.vue"

export default {
  data() {
    return {
      tab: null,
      items: ["Appetizers", "Entrees", "Filter", "Added"],
      text: ["1", "2", "3", `Your added recipies:`],
      search: false,
      checked: [],
    }
  },

  methods: {
    filterNavigator() {
      this.$router.push({
        path: "/",
        query: { ingredients: this.checked },
      })
    },
    filteredRecipies() {
      const query = ["pasta"]
      console.log(this.checked)
      this.$store.dispatch("filteredRecipies", query)
    },
  },

  computed: {
    ...mapGetters({
      recipies: "addedRecipies",
    }),

    numberSaved() {
      return this.$store.getters.numberSaved
    },
  },
  components: {
    appMiniCard: MiniCard,
  },
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
