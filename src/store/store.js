import Vue from "vue"
import Vuex from "vuex"
import client from "../client"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    recipies: [],
    addedRecipies:[],
    numberSaved:0,
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
  },

  mutations: {

SET_RECIPIES(state, recipies) {
  state.recipies = recipies
},


    ADD_RECIPIES(state, { recipieId, recipieTitle, recipieFoto }) {
      state.addedRecipies.push({
        id: recipieId,
        title: recipieTitle,
        foto: recipieFoto,
      })
      state.numberSaved += 1
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

  },
})
