/**
  Useful stuff for all deck-related pages.
  Mainly related to extracting deck info from the URL.
*/

import _ from "lodash";

export default {
  props: ["id"],

  computed: {
    deck() {
      // given the id from the URL, decide which deck we are referring to

      // get deck from list of decks
      console.log("Deck id is " + this.id);
      let deckId = this.id;
      // TODO search in list of decks for this
      let allDecks = this.$store.state.decks;
      // find first deck that matches
      return _.find(allDecks, {
        id: deckId
      });
    }
  },

  methods: {
    getCardById(cardId) {
      let allCards = this.deck.cards;
      // find first card that matches
      let card = _.find(allCards, {
        id: cardId
      });

      return card;
    }
  }
};
