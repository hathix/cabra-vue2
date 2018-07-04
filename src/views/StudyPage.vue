<template>
<div>
  <SessionViewer v-if="session" :session="session" :deck="deck"></SessionViewer>
  <div v-else>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="order">Order</label>
          <md-select v-model="settings.order" name="order" id="order">
            <md-option value="question_first">Normal: see question, give answer</md-option>
            <md-option value="answer_first">Jeopardy: see answer, give question</md-option>
            <md-option value="random">Random</md-option>
          </md-select>
        </md-field>
      </div>
    </div>

    <!-- for session setup -->
    <md-button @click="startSession">Start studying</md-button>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import DeckList from "@/components/DeckList.vue";
import SessionViewer from "@/components/SessionViewer.vue";

// import _ from "lodash";
// import factory from "@/lib/factory";
import Page from "@/mixins/Page";
import Deck from "@/mixins/Deck";

import {
  StudySession /* , CARD_STUDY_RESULTS */
} from "@/lib/study";

export default {
  name: "studypage",

  mixins: [Page, Deck],

  data: function() {
    return {
      settings: {
        // TODO make this an enum not hardcoded
        order: "question_first"
      },
      session: null
    };
  },

  computed: {
    pageName() {
      // computes the page's name, which will be shown on the app's TopBar
      return "Study " + this.deck.name;
    }
  },

  methods: {
    startSession() {
      // TODO: pass options
      this.session = new StudySession({
        deck: this.deck,
        store: this.$store,
        ...this.settings
      });
      console.log("Made session");
    }
  },

  components: {
    SessionViewer
  }
};
</script>

<style scoped lang="scss">
</style>
