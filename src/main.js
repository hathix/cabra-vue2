import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* VUE MATERIAL */
// import Vue from 'vue'
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css"; // Choose a theme https://vuematerial.io/themes/prebuilt

Vue.use(VueMaterial);
// Vue.use(MdContent);
// Vue.use(MdTabs);
// Vue.use(MdApp);
// Vue.use(MdAppToolbar);
/* END VUE MATERIAL */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
