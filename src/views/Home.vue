<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <DeckList />

    <!-- TODO factor out into DeckAddButton or something -->
    <md-speed-dial class="md-bottom-right" md-event="click">
      <md-speed-dial-target  to="/add">
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <!-- <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>note</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content> -->
    </md-speed-dial>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import DeckList from "@/components/DeckList.vue";
import Page from "@/mixins/Page";
// import factory from "@/lib/factory.js";

export default {
  name: "home",
  components: {
    // HelloWorld,
    DeckList
  },
  data: function() {
    return {
      pageName: "Cabra" // used by the Page mixin to update the title bar and other stuff
    };
  },
  methods: {
    // addDeck() {
    //   console.log("adding a deck");
    //   // for now, just add a random deck to test
    //   let deck = factory.createDeck({ name: "New Deck" });
    //   this.$store.dispatch("addDeck", deck);
    // }
  },

  mixins: [Page]
};
</script>

<style scoped lang="scss">
.md-speed-dial {
  z-index: 100;
}
</style>
