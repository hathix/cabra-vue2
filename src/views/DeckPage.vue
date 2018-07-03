<template>
  <div>
    <p>
    <router-link to="add" tag="md-button" append>Add card</router-link>
  </p>
    <p>
    My cards:
  </p>

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

// TODO give cards unique IDs

import _ from "lodash";
import factory from "@/lib/factory";
import Page from "@/mixins/Page";
import Deck from "@/mixins/Deck";

export default {
  name: "deckpage",
  // the router will pass the deck's ID, which is extracted from the URL.
  // this is much better than using $route directly -- that would make the
  // component very fragile. see:
  // https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode

  computed: {
    pageName() {
      // computes the page's name, which will be shown on the app's TopBar
      return this.deck.name;
    }
  },
  methods: {
    // addCard() {
    //   // TODO: abstract out card creation
    //   this.$store.dispatch("addCardToDeck", {
    //     deckId: this.id,
    //     card: factory.createCard({ question: "3+5", answer: "8" })
    //   });
    // }
  },

  mixins: [Page, Deck]
  // components: {
  //   HelloWorld,
  //   DeckList
  // }
};
</script>

<style scoped lang="scss">
// .md-speed-dial {
//   z-index: 100;
// }
</style>
