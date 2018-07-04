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
      if (!state.decks) {
        state.decks = [];
      }
      state.decks.push(deck);
    },

    renameDeck(state, { deck, name }) {
      deck.name = name;
    },

    addCardToDeck(state, { deck, card }) {
      // assumes `deck` is already in the state
      deck.cards.push(card);
    },

    updateCard(state, { deck, card }) {
      // we need to rip out the old card with that id with the new one

      deck.cards = _.map(deck.cards, elem => {
        // keep every card in the old array EXCEPT the one with the new card's id
        // (in that case, replace the card with the new one, in the same location)
        if (elem.id === card.id) {
          return card;
        } else {
          return elem;
        }
      });
      // deck.cards.push(card);
    },

    deleteCard(state, { deck, card }) {
      deck.cards = _.filter(deck.cards, elem => {
        // only keep stuff whose id != card's id
        return elem.id !== card.id;
      });
    },

    clearAllData(state) {
      state.decks = [];
    }
  },
  actions: {
    // higher-level function to add a deck, called from the outside
    addDeck({ commit /*, state */ }, deck) {
      commit("addDeck", deck);
    },

    renameDeck({ commit }, { deck, name }) {
      commit("renameDeck", { deck: deck, name: name });
    },

    addCardToDeck({ commit, state }, { deck, card }) {
      // add card to it
      commit("addCardToDeck", { deck: deck, card: card });
    },

    updateCard({ commit }, { deck, card }) {
      commit("updateCard", { deck: deck, card: card });
    },

    deleteCard({ commit }, { deck, card }) {
      commit("deleteCard", { deck: deck, card: card });
    },

    clearAllData({ commit }) {
      console.log("clearing all data");
      commit("clearAllData");
    }
  },

  plugins: [
    // to store in localstorage
    createPersistedState({
      key: "cabra"
    })
  ]
});
