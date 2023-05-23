import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css" // Add this line
import "@mdi/font/css/materialdesignicons.css"

Vue.use(Vuetify)
const opts = {
  theme: {
    dark: false,
  },

  options: {
    customProperties: true,
  },
  icons: {
    iconfont: "mdiSvg" || "mdi" || "mdiSvg" || "md" || "fa" || "fa4" || "faSvg",
  },
}

export default new Vuetify(opts)
