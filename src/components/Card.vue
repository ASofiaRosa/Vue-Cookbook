<template>
  <v-col>
    <v-card class="mx-auto" max-width="344">
      <v-img
        :src="recipie.fields.image.fields.file.url"
        height="200px"
        cover
      ></v-img>

      <v-card-title>
        <h5>{{ recipie.fields.title }}</h5>
      </v-card-title>

      <v-card-subtitle>
        {{ recipie.fields.description }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" @click="addRecipie">
          Add
        </v-btn>
      </v-card-actions>
    </v-card></v-col
  >
</template>

<script>
export default {
  props: ["recipie"],
  data() {
    return {
      imageurl: this.recipie.fields.image.fields.file.url,
    }
  },
  methods: {
    addRecipie() {
      const order = {
        recipieId: this.recipie.sys.id,
        recipieTitle: this.recipie.fields.title,
        recipieFoto: this.recipie.fields.image.fields.file.url,
      }
      this.$store.dispatch("buyStock", order)
    },
  },
}
</script>
