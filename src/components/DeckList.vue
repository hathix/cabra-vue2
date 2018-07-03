<!-- List of all decks -->

<template>
  <div>

    <md-card md-with-hover  v-for="deck in decks" :to="'decks/' + deck.id" :key="deck.id">
      <md-card-header>
        <div class="md-title">{{ deck.name }}</div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>

    <!-- <md-list>
      <md-list-item v-for="deck in decks" :to="'decks/' + deck.id" :key="deck.id">
        {{ deck.name }}
      </md-list-item>
    </md-list> -->
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
