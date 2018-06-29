import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    decks: [
      {
        name: "Deck1",
        id: "12345",
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
    // design decision (for now): never call a mutation externally. only call actions.
    // "state" is a given parameter. think of it like "self" in python.
    addDeck(state, deck) {
      state.decks.push(deck);
    }
  },
  actions: {
    // higher-level function to add a deck, called from the outside
    addDeck({ commit /*, state */ }, deckName) {
      // create a new deck out of this
      let deck = {
        name: deckName,
        id: Date.now() + "", // some unique string
        cards: [] // no cards yet
      };
      commit("addDeck", deck);
    }
  },

  plugins: [
    // to store in localstorage
    createPersistedState({
      key: "cabra"
    })
  ]
});
