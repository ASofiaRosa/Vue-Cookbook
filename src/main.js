import Vue from "vue"
import App from "./App.vue"
import vuetify from "./vuetify.js"
import "vuetify/dist/vuetify.min.css"
// @import '~vuetify/src/stylus/main'
import "material-design-icons-iconfont/dist/material-design-icons.css"
import VueRouter from "vue-router"
import { routes } from "./routes"
import {store} from "./store/store"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({ routes, mode: "history" })

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
  store,
}).$mount("#app")
