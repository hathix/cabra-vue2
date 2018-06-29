<!-- List of all decks -->

<template>
  <div>
    <md-list>
      <md-list-item v-for="deck in decks" :to="'decks/' + deck.id" :key="deck.id">
        {{ deck.name }}
      </md-list-item>
      <!-- href="https://google.com" target="_blank">Link</md-list-item>
      <md-list-item to="/components/list/router">Link Router</md-list-item>
      <md-list-item to="/components/list">Link Router Active Color</md-list-item> -->
    </md-list>
  </div>
</template>

<script>
export default {
  name: "DeckList",
  // props: {
  //   msg: String
  // },
  computed: {
    decks() {
      return this.$store.state.decks;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
