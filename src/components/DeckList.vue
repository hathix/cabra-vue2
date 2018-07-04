<!-- List of all decks -->

<template>
  <div>



       <!-- you can't make clickable cards so these won't work for navigation -->
<!--
    <md-card md-with-hover v-for="deck in decks" :to="'decks/' + deck.id" :key="deck.id">
      <md-card-header>
        <div class="md-title">{{ deck.name }}</div>
      </md-card-header>

      <md-card-content>
        {{ deck.cards.length }} cards
      </md-card-content>

      <md-card-actions>

        <md-button class="md-icon-button" @click="openDeckRenamer(deck)">
          <md-icon>create</md-icon>
        </md-button>
        <md-button class="md-icon-button" @click="deleteDeck(deck)">
          <md-icon>delete</md-icon>
        </md-button>
      </md-card-actions>
    </md-card> -->


    <md-list>
      <md-list-item v-for="deck in decks" :to="'decks/' + deck.id" :key="deck.id">
        <span class="md-list-item-text">
          {{ deck.name }}
        </span>

        <!-- you can't add clickable buttons to clickable lists. i think the move is
        to just enable deck renaming/deletion in the deck page -->
        <!-- <md-button class="md-icon-button md-list-action" @click="openDeckRenamer(deck)">
          <md-icon>chat_bubble</md-icon>
        </md-button> -->
      </md-list-item>
    </md-list>

    <md-empty-state
      v-show="decks.length === 0"
      md-icon="class"
      md-label="Create your first deck"
      md-description="Create flashcards from scratch or import from a library of millions.">
      <router-link tag="md-button" class="md-primary md-raised" to="add">Create first deck</router-link>
    </md-empty-state>
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
    };
  },

  methods: {
    // openDeckRenamer(deck) {
    //   this.activeDeck = deck;
    //   this.renamerOpen = true;
    // },
    //
    // renameDeck(newDeckName) {
    //   // the deck's name doesn't auto-update b/c binding stuff
    //   // so we must manually update it
    //   this.$store.dispatch("renameDeck", {
    //     deck: this.activeDeck,
    //     name: newDeckName
    //   });
    // }
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
