import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import _ from "lodash";
// import factory from "@/lib/factory";

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
            answer: "4",
            id: "a"
          },
          {
            question: "What color is the sky?",
            answer: "Blue",
            id: "b"
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
    },

    addCardToDeck(state, { deck, card }) {
      // assumes `deck` is already in the state
      deck.cards.push(card);
    }
  },
  actions: {
    // higher-level function to add a deck, called from the outside
    addDeck({ commit /*, state */ }, deck) {
      commit("addDeck", deck);
    },

    addCardToDeck({ commit, state }, { deckId, card }) {
      // TODO standardize how much pre-structuring we want to have
      // for instance above we want the deck name, here we want a fully-formed
      // card. i would rather take more-structured stuff to make it more flexible.

      console.log(deckId);
      console.log(card);

      // find deck in state
      let deck = _.find(state.decks, { id: deckId });
      // add card to it
      commit("addCardToDeck", { deck: deck, card: card });
    }
  },

  plugins: [
    // to store in localstorage
    createPersistedState({
      key: "cabra"
    })
  ]
});
