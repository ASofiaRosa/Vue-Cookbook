import Vue from "vue"
import Vuex from "vuex"
import client from "../client"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    recipies: [],
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
          commit("recipies", { recipies: response.items })

          console.log(response.items)
        })
        .catch(console.error)
    },

    addRecipie: ({ commit }, order) => {
      commit("ADD_RECIPIES", order)
    },
  },

  mutations: {
    SET_RECIPIES(state, { recipieId, recipieTitle, recipieFoto }) {
      state.recipies.push({
        id: recipieId,
        title: recipieTitle,
        foto: recipieFoto,
      })
    },
  },

  getters: {
    recipies: (state) => {
      return state.recipies
    },

    addedRecipies: (state, getters) => {
      return state.recipies.map((recipie) => {
        const record = getters.recipies.find(
          (element) => element.sys.id == recipie.id
        )
        return { id: recipie.id, title: record.title, foto: record.foto }
      })
    },
  },
})
