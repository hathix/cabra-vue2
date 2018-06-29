import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    decks: [
      {
        name: "Deck1",
        cards: [
          {
            question: "What is 2+2?",
            answer: "4"
          },
          {
            question: "What color is the sky?",
            answer: "Blue"
          }
        ]
      }
    ]
  },
  mutations: {
    // addDeck(deck) {
    //   // state.decks.push(deck);
    // }
  },
  actions: {},
  plugins: [
    createPersistedState({
      key: "cabra"
    })
  ]
});
