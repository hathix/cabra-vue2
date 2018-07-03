<!-- List of all decks -->

<template>
  <div>

    <!-- deck name changer
      TODO factor this out into its own component?
    -->
    <md-dialog-prompt
      :md-active.sync="renamerOpen"
      v-model="activeDeck && activeDeck.name || null"
      md-title="Deck Name"
      md-confirm-text="Change"
      md-cancel-text="Cancel"
      @md-confirm="renameDeck"
       />

    <md-card md-with-hover v-for="deck in decks" :to="'decks/' + deck.id" :key="deck.id">
      <md-card-header>
        <div class="md-title">{{ deck.name }}</div>
      </md-card-header>

      <md-card-content>
        {{ deck.cards.length }} cards
      </md-card-content>

      <md-card-actions>
        <!-- TODO make this actually rename the deck -->
        <md-button class="md-icon-button" @click="openDeckRenamer(deck)">
          <md-icon>create</md-icon>
        </md-button>
        <md-button class="md-icon-button" @click="deleteDeck(deck)">
          <md-icon>delete</md-icon>
        </md-button>
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

  data: function() {
    return {
      // for the deck renaming modal
      renamerOpen: false,
      activeDeck: null
    }
  },

  methods: {
    openDeckRenamer(deck) {
      this.activeDeck = deck;
      this.renamerOpen = true;
    },

    renameDeck(newDeckName) {
      // the deck's name doesn't auto-update b/c binding stuff
      // so we must manually update it
      this.$store.dispatch("renameDeck", {
        deck: this.activeDeck,
        name: newDeckName
      });
    }
  },

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
