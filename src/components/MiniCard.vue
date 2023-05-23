<template>
    <v-col>
      <v-card class="mx-auto" max-width="100">
        <v-img
          :src="recipie.foto"
          height="50px"
          cover
        ></v-img>      
          <p>{{ recipie.title }}</p>    
      </v-card></v-col
    >
  </template>
<script>
  export default {
    props:["recipie"]

  }</script>