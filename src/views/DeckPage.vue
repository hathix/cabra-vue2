<template>
  <div>
    <p>
    <router-link to="add" tag="md-button" append>Add card</router-link>
    <router-link to="cards" tag="md-button" append>View cards</router-link>

    <md-button @click="renamerOpen = true">Rename deck</md-button>
    <md-button @click="deleterOpen = true">Delete deck</md-button>
  </p>


  <!-- deck name changer
    TODO factor this out into its own component?
  -->
    <md-dialog-prompt
      :md-active.sync="renamerOpen"
      md-title="Rename Deck"
      md-input-placeholder="New Deck Name"
      md-confirm-text="Rename"
      md-cancel-text="Cancel"
      @md-confirm="renameDeck"
       />

    <!-- Deletion confirmation dialog -->
       <md-dialog-confirm
        :md-active.sync="deleterOpen"
        md-title="Delete this deck?"
        md-content="This deck will be permanently deleted. OK?"
        md-confirm-text="Delete"
        md-cancel-text="Cancel"
        @md-confirm="deleteDeck" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import DeckList from "@/components/DeckList.vue";

// TODO give cards unique IDs

// import _ from "lodash";
// import factory from "@/lib/factory";
import Page from "@/mixins/Page";
import Deck from "@/mixins/Deck";

export default {
  name: "deckpage",
  // the router will pass the deck's ID, which is extracted from the URL.
  // this is much better than using $route directly -- that would make the
  // component very fragile. see:
  // https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode

  data: function() {
    return {
      // for the renamer dialog
      renamerOpen: false,
      // for the deleter dialog
      deleterOpen: false
    };
  },

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

    renameDeck(newName) {
      if (newName) {
        // we must manually run the storage update b/c the store is immutable
        console.log("new deck name", newName);
        this.$store.dispatch("renameDeck", {
          deck: this.deck,
          name: newName
        });
      }
    },

    deleteDeck() {
      console.log("Deleting deck", this.deck.name);

      // go back before the deed is done
      this.$router.go(-1);

      this.$store.dispatch("deleteDeck", {
        deck: this.deck
      });

      // TODO show snackbar when deck has been deletedt
    }
  },

  mixins: [Page, Deck]
  // components: {
  //   HelloWorld,
  //   DeckList
  // }
};
</script>

<style scoped lang="scss">
</style>
