import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import DeckPage from "./views/DeckPage.vue";
import Wrapper from "./views/Wrapper.vue";
import AddDeck from "@/views/AddDeck.vue";
import AddEditCard from "@/views/AddEditCard.vue";
import ViewCards from "@/views/ViewCards.vue";
import StudyPage from "@/views/StudyPage.vue";
import BatchAddCards from "@/views/BatchAddCards";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      component: Wrapper,
      children: [
        {
          path: "/",
          name: "home",
          component: Home
        },

        {
          path: "/decks/:id",
          name: "deckpage",
          component: DeckPage,
          props: true // see https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
        },
        {
          path: "/decks/:id/add",
          name: "addcard",
          component: AddEditCard,
          props: true // see https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
        },
        {
          path: "/decks/:id/batchadd",
          name: "batchadd",
          component: BatchAddCards,
          props: true // see https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
        },
        {
          path: "/decks/:id/study",
          name: "studypage",
          component: StudyPage,
          props: true // see https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
        },
        {
          path: "/decks/:id/cards",
          name: "viewcards",
          component: ViewCards,
          props: true // see https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
        },
        {
          path: "/decks/:id/cards/:cardId",
          name: "editcard",
          component: AddEditCard,
          props: true // see https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
        },

        {
          path: "/about",
          name: "about",
          component: About
        },
        {
          path: "/add",
          name: "adddeck",
          component: AddDeck
        }
      ]
    }
  ]
});
