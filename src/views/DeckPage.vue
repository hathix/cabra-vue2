<template>
  <div>
    My id is {{ $route.params.id }}. My name is {{ deck.name }}.
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import DeckList from "@/components/DeckList.vue";

import _ from "lodash";

export default {
  name: "deckpage",
  computed: {
    deck() {
      // get deck from list of decks
      let deckId = this.$route.params.id;
      // TODO search in list of decks for this
      let allDecks = this.$store.state.decks;
      // find first deck that matches
      return _.find(allDecks, { id: deckId });
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
