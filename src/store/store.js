import Vue from "vue"
import Vuex from "vuex"
import client from "../client"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    recipies: [],
    addedRecipies: [],
    numberSaved: 0,
    filteredRecipies: [],
    ingredients: [],
  },

  actions: {
    getRecipies({ commit }) {
      client
        .getEntries({
          content_type: "blog",
          // The following line orders the items per creation date:
          order: "sys.createdAt",
        })
        .then((response) => {
          console.log(response.items)
          commit("SET_RECIPIES", response.items)
        })
        .catch(console.error)
    },

    addRecipie: ({ commit }, order) => {
      commit("ADD_RECIPIES", order)
    },

    deleteRecipie: ({ commit }, order) => {
      commit("DELETE_RECIPIES", order)
    },

    filteredRecipies({ commit }, query) {
      client
        .getEntries({
          content_type: "blog",
          "metadata.tags.sys.id[all]": query,
        })
        .then((response) => {
          console.log(response.items)
          commit("SET_FILTEREDRECIPIES", response.items)
        })

        .catch(console.error)
    },
  },

  mutations: {
    SET_RECIPIES(state, recipies) {
      state.recipies = recipies
    },

    SET_FILTEREDRECIPIES(state, filteredRecipies) {
      state.filteredRecipies = filteredRecipies
    },

    ADD_RECIPIES(state, { recipieId, recipieTitle, recipieFoto }) {
      const record = state.addedRecipies.find(
        (element) => element.id == recipieId
      )
      if (record) {
        alert("Already added!")
      } else {
        state.addedRecipies.push({
          id: recipieId,
          title: recipieTitle,
          foto: recipieFoto,
        })
        state.numberSaved += 1
      }
    },

    DELETE_RECIPIES(state, { recipieId }) {
      const record = state.addedRecipies.find(
        (element) => element.id == recipieId
      )
      state.addedRecipies.splice(state.addedRecipies.indexOf(record), 1)
      state.numberSaved -= 1
    },
  },

  getters: {
    recipies: (state) => {
      return state.recipies
    },

    addedRecipies: (state) => {
      return state.addedRecipies
    },
    numberSaved: (state) => {
      return state.numberSaved
    },
    filteredRecipies: (state) => {
      return state.filteredRecipies
    },
  },
})
