<template>
  <v-col>
    <v-card class="mx-auto" max-width="100">
      <v-img :src="recipie.foto" height="50px" cover></v-img>
      <p>{{ recipie.title }}</p>
      <v-card-actions>
        <v-btn
          size="x-small"
          color="orange-lighten-1"
          variant="text"
          @click="deleteRecipie"
        >
          x
        </v-btn>
      </v-card-actions>
    </v-card></v-col
  >
</template>
<script>
import { mapActions } from "vuex"

export default {
  props: ["recipie"],

  methods: {
    ...mapActions({ deleteOrder: "deleteRecipie" }),
    deleteRecipie() {
      const order = {
        recipieId: this.recipie.id,
      }
      this.deleteOrder(order)
    },
  },
}
</script>
