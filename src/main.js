import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* VUE MATERIAL */
// import Vue from 'vue'
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css"; // Choose a theme https://vuematerial.io/themes/prebuilt

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
/* END VUE MATERIAL */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
