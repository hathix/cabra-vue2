<template>
<div>
  <!-- <ul>
    <li v-for="card in deck.cards" :key="card.id">
      {{ card.question }} / {{ card.answer }}
    </li>
  </ul> -->

  <md-card v-for="card in deck.cards" :key="card.id">
    <md-card-header>
      <!-- <div class="md-title">{{ card.question }}</div> -->
    </md-card-header>

    <md-card-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-50 md-xsmall-size-100">{{ card.question }}</div>
        <div class="md-layout-item md-small-size-50 md-xsmall-size-100">{{ card.answer }}</div>
      </div>
    </md-card-content>

    <md-card-actions>
      <router-link class="md-icon-button" tag="md-button" :to="card.id" append>
        <md-icon>create</md-icon>
      </router-link>
      <md-button class="md-icon-button" @click="deleteCard(card.id)">
        <md-icon>delete</md-icon>
      </md-button>
    </md-card-actions>
  </md-card>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import DeckList from "@/components/DeckList.vue";

// import _ from "lodash";
// import factory from "@/lib/factory";
import Page from "@/mixins/Page";
import Deck from "@/mixins/Deck";

export default {
  name: "viewcards",

  mixins: [Page, Deck],

  data: function() {
    return {
      question: null,
      answer: null
    };
  },

  computed: {
    pageName() {
      // computes the page's name, which will be shown on the app's TopBar
      return "View Cards of " + this.deck.name;
    }
  },

  // the router will pass the deck's ID, which is extracted from the URL.
  // this is much better than using $route directly -- that would make the
  // component very fragile. see:
  // https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
  // props: ["id"],
  // computed: {
  //   deck() {
  //     // get deck from list of decks
  //
  //     let deckId = this.id;
  //     // TODO search in list of decks for this
  //     let allDecks = this.$store.state.decks;
  //     // find first deck that matches
  //     return _.find(allDecks, { id: deckId });
  //   }
  // },
  methods: {
    editCard(cardId) {
      console.log("EDITING", cardId);
    },
    deleteCard(cardId) {
      console.log("DELETING", cardId);
    }
    // addDeckFromScratch() {
    //   console.log("adding a deck called", this.deckName);
    //   // for now, just add a random deck to test
    //   let deck = factory.createDeck({ name: this.deckName });
    //   this.$store.dispatch("addDeck", deck);
    //
    //   // go back home
    //   // TODO make an enum for route names instead of hardcoding
    //   this.$router.push({ name: "home" });
    //
    //   // reset form
    //   this.deckName = null;
    // },
    // quizletSearch() {
    //   // search for a particular term
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
