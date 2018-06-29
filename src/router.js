import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import DeckPage from "./views/DeckPage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/decks/:id",
      name: "deckpage",
      component: DeckPage
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
