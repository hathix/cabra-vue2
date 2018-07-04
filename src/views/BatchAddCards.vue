<template>
<div>
  <form novalidate class="md-layout" @submit="submitForm">
    <md-field>
      <label>Enter each card on its own line, with a comma between question and answer</label>
      <md-textarea v-model="inputText" md-autogrow></md-textarea>
    </md-field>

    <md-button type="submit" class="md-primary" :disabled="!inputText">
      Add cards
    </md-button>
  </form>

  <!-- TODO alter the snackbar if they edited a card instead of creating one.
  but if we automatically go back after editing, the snackbar will be hidden -->
  <md-snackbar md-position="center" :md-duration="snackbarDuration" :md-active.sync="showSnackbar" md-persistent>
    <span v-if="numAddedCards > 0">
      Added {{ numAddedCards }} card(s)!
    </span>
    <span v-if="numInvalidCards > 0">
      {{ numInvalidCards }} card(s) were invalid.
    </span>

    <md-button class="md-primary" @click="showSnackbar = false">Close</md-button>
  </md-snackbar>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import DeckList from "@/components/DeckList.vue";

import _ from "lodash";
import factory from "@/lib/factory";
import Page from "@/mixins/Page";
import Deck from "@/mixins/Deck";

import * as CSV from "csv-string";

export default {
  name: "batchadd",

  mixins: [Page, Deck],

  // optional props on top of the deckId (which the Deck mixin handles)
  // if they pass a card ID, we are EDITING that card
  // props: ["cardId"],

  data: function() {
    return {
      inputText: null,

      // divider between question and answer
      // delimiter: ","


      // card: null,
      // editing: this.cardId ? true : false, // true if a cardId was passed
      //
      // for snackbar
      numAddedCards: 0,
      numInvalidCards: 0,
      showSnackbar: false,
      snackbarDuration: 5000 // milliseconds
    };
  },

  computed: {
    pageName() {
      // computes the page's name, which will be shown on the app's TopBar
      return "Batch Add Cards to " + this.deck.name;
    }
  },

  beforeMount: function() {
    // here, we determine if we are editing a card or adding a new one
    //
    // if (this.editing) {
    //   // find the card from the deck and modify it
    //   let allCards = this.deck.cards;
    //   // find first card that matches
    //   this.card = _.find(allCards, {
    //     id: this.cardId
    //   });
    // } else {
    //   this.createBlankCard();
    // }
  },

  methods: {
    submitForm() {
      // parse and add cards

      // parse csv
      const output = CSV.parse(this.inputText);

      // convert this into a card if there are exactly 2 elements in the array
      // otherwise it's an error, convert it back into plain text and stick
      // back in the text box
      // first find all legit cards
      // each card should have [question, answer]
      // TODO check that question and answer are not empty
      const PROPER_NUM_ELEMENTS = 2;
      let validRows = _.filter(
        output,
        row => row.length === PROPER_NUM_ELEMENTS
      );
      let invalidRows = _.filter(
        output,
        row => row.length !== PROPER_NUM_ELEMENTS
      );

      // turn valid rows into cards
      // element 0 is question, 1 is answer
      let newCards = _.map(validRows, row =>
        factory.createCard({
          question: row[0],
          answer: row[1]
        })
      );

      console.log(newCards);

      // now add these cards
      this.$store.dispatch("addCardsToDeck", {
        deck: this.deck,
        cards: newCards
      });

      // now put the invalid cards back
      if (invalidRows.length > 0) {
        let remainingText = CSV.stringify(invalidRows);
        this.inputText = remainingText;
      }
      else {
        // everything is perfect!
        this.inputText = null;
      }

      // show snackbar
      this.numAddedCards = newCards.length;
      this.numInvalidCards = invalidRows.length;
      this.showSnackbar = true;
    }
    // createBlankCard() {
    //   this.card = factory.createCard({ question: null, answer: null });
    //   return this.card;
    // },
    //
    // finishCard() {
    //   console.log("finishing card", this.card.id);
    //
    //   if (this.editing) {
    //     // the store is immutable so we have to commit something to edit the card
    //     this.$store.dispatch("updateCard", {
    //       deck: this.deck,
    //       card: this.card
    //     });
    //
    //     // just go back
    //     this.$router.go(-1);
    //   } else {
    //     // the card exists, but it is not in the deck yet. so add it
    //     this.$store.dispatch("addCardToDeck", {
    //       deck: this.deck,
    //       card: this.card
    //     });
    //
    //     // TODO add validation
    //
    //     // now wipe the slate clean (and in doing so reset the form )
    //     this.createBlankCard();
    //
    //     // show success message
    //     this.showSnackbar = true;
    //   }
    // }
  }
  // components: {
  //   HelloWorld,
  //   DeckList
  // }
};
</script>

<style scoped lang="scss">
</style>
