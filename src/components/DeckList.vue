<!-- List of all decks -->

<template>
  <div>
    <md-list>
      <md-list-item v-for="deck in decks" to="/asdf">
        {{ deck.name }}
      </md-list-item>
      <!-- href="https://google.com" target="_blank">Link</md-list-item>
      <md-list-item to="/components/list/router">Link Router</md-list-item>
      <md-list-item to="/components/list">Link Router Active Color</md-list-item> -->
    </md-list>

    <md-button class="md-raised md-accent">
      This is a Material button
    </md-button>
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
// <style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
//
</style>
