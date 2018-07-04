<template>
<div>
  <p>Hi!!</p>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import DeckList from "@/components/DeckList.vue";

// import _ from "lodash";
// import factory from "@/lib/factory";
import Page from "@/mixins/Page";
import Deck from "@/mixins/Deck";

export default {
  name: "studypage",

  mixins: [Page, Deck],

  data: function() {
    return {

    }
  },

  computed: {
    pageName() {
      // computes the page's name, which will be shown on the app's TopBar
      return "Study " + this.deck.name;
    }
  },
};
</script>

<style scoped lang="scss">
</style>
