<template>
<div>
  <md-tabs md-alignment="centered">
    <!-- <md-tab id="tab-home" md-icon="home"></md-tab> -->
    <md-tab id="tab-pages" md-label="Create New" md-icon="create">

      <form novalidate class="md-layout" @submit="addDeckFromScratch">

        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">Create deck from scratch</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">

                <md-field>
                  <label>Deck name</label>
                  <md-input v-model="deckName"></md-input>
                  <!-- <span class="md-helper-text">Helper text</span> -->
                </md-field>
              </div>
            </div>
          </md-card-content>

          <md-card-actions>
            <md-button type="submit" class="md-primary">Create deck</md-button>
          </md-card-actions>
        </md-card>

      </form>
    </md-tab>
    <md-tab id="tab-posts" md-label="Quizlet Import" md-icon="cloud_download">
      <md-field>
        <label>Search for a set on Quizlet</label>
        <md-input v-model="quizletSearchTerm"></md-input>
        <!-- <span class="md-helper-text">Helper text</span> -->
      </md-field>
    </md-tab>
    <!-- <md-tab id="tab-favorites" md-icon="favorite"></md-tab> -->
  </md-tabs>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import DeckList from "@/components/DeckList.vue";

// import _ from "lodash";
import factory from "@/lib/factory";

export default {
  name: "adddeck",

  data: function() {
    return {
      deckName: null,
      quizletSearchTerm: null
    };
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
    addDeckFromScratch() {
      console.log("adding a deck called", this.deckName);
      // for now, just add a random deck to test
      let deck = factory.createDeck({ name: this.deckName });
      this.$store.dispatch("addDeck", deck);

      // go back home
      // TODO make an enum for route names instead of hardcoding
      this.$router.push({ name: "home" });

      // reset form
      this.deckName = null;
    },
    quizletSearch() {
      // search for a particular term
    }
  }
  // components: {
  //   HelloWorld,
  //   DeckList
  // }
};
</script>

<style scoped lang="scss">
</style>
