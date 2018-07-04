<template>
<div>
  <form novalidate class="md-layout" @submit="finishCard">
    <md-field>
      <label>Question</label>
      <md-textarea v-model="card.question"></md-textarea>
      <!-- <span class="md-helper-text">Helper text</span> -->
    </md-field>
    <md-field>
      <label>Answer</label>
      <md-textarea v-model="card.answer"></md-textarea>
      <!-- <span class="md-helper-text">Helper text</span> -->
    </md-field>

    <md-button type="submit" class="md-primary">
      <span v-if="editing">Finish editing</span>
      <span v-else>Create card</span>
    </md-button>
  </form>

  <!-- TODO alter the snackbar if they edited a card instead of creating one.
  but if we automatically go back after editing, the snackbar will be hidden -->
  <md-snackbar md-position="center" :md-duration="snackbarDuration" :md-active.sync="showSnackbar" md-persistent>
    <span>Card successfully created!</span>
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

export default {
  name: "addcard",

  mixins: [Page, Deck],

  // optional props on top of the deckId (which the Deck mixin handles)
  // if they pass a card ID, we are EDITING that card
  props: ["cardId"],

  data: function() {
    return {
      card: null,
      editing: this.cardId ? true : false, // true if a cardId was passed

      showSnackbar: false,
      snackbarDuration: 3000, // milliseconds
    };
  },

  computed: {
    pageName() {
      // computes the page's name, which will be shown on the app's TopBar
      return "Add Card to " + this.deck.name;
    }
  },

  beforeMount: function() {
    // here, we determine if we are editing a card or adding a new one

    if (this.editing) {
      // find the card from the deck and modify it
      let allCards = this.deck.cards;
      // find first card that matches
      this.card = _.find(allCards, {
        id: this.cardId
      });
    } else {
      this.createBlankCard();
    }
  },

  methods: {
    createBlankCard() {
      this.card = factory.createCard({ question: null, answer: null });
      return this.card;
    },

    finishCard() {
      console.log("finishing card", this.card.id);

      if (this.editing) {
        // the store is immutable so we have to commit something to edit the card
        this.$store.dispatch("updateCard", {
          deck: this.deck,
          card: this.card
        });

        // just go back
        this.$router.go(-1);
      } else {
        // the card exists, but it is not in the deck yet. so add it
        this.$store.dispatch("addCardToDeck", {
          deck: this.deck,
          card: this.card
        });

        // TODO add validation

        // now wipe the slate clean (and in doing so reset the form )
        this.createBlankCard();

        // show success message
        this.showSnackbar = true;
      }
    }
  }
  // components: {
  //   HelloWorld,
  //   DeckList
  // }
};
</script>

<style scoped lang="scss">
</style>
