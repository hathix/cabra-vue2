<template>
<div>
  <ul>
    <li v-for="card in deck.cards" :key="card.id">
      {{ card.question }} / {{ card.answer }}
    </li>
  </ul>
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
    }
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
    addCard() {
      console.log("adding a card");

      // TODO add calidation
      let question = this.question;
      let answer = this.answer;

      let card = factory.createCard({ question, answer });
      // console.log(card);

      // add card
      this.$store.dispatch("addCardToDeck", {
        deckId: this.id,
        card: card
      });

      // clear form
      this.question = null;
      this.answer = null;
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
