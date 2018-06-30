<template>
  <div>
    My id is {{ $route.params.id }}. My name is {{ deck.name }}.
    <md-button @click="addCard()">Add card</md-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import DeckList from "@/components/DeckList.vue";

import _ from "lodash";

export default {
  name: "deckpage",
  // the router will pass the deck's ID, which is extracted from the URL.
  // this is much better than using $route directly -- that would make the
  // component very fragile. see:
  // https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
  props: ["id"],
  computed: {
    deck() {
      // get deck from list of decks

      let deckId = this.id;
      // TODO search in list of decks for this
      let allDecks = this.$store.state.decks;
      // find first deck that matches
      return _.find(allDecks, { id: deckId });
    }
  },
  methods: {
    addCard() {
      this.$store.dispatch("addCardToDeck", { deckId: this.id, card: { question: "3+5", answer: "8" } });
    }
  }
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
