<!-- For running a study session -->

<template>
  <div>

    <md-card v-if="!finished">
      <md-card-area>
        <!-- <md-card-header>
          <h2 class="md-title">Coffee House</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>2 miles</span>
          </div>
        </md-card-header> -->

        <md-card-content>
          <span class="md-headline">{{ cardFront }}</span>
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <!-- <h3 class="md-subheading">Today's availability</h3> -->
        <span v-if="backShown" class="md-headline">{{ cardBack }}</span>
      </md-card-content>

      <md-card-actions md-alignment="left">
        <md-button v-if="!backShown" @click="backShown = true">Show {{ backPrompt }}</md-button>


        <md-button v-if="backShown" class="md-primary" @click="studyResult(STUDY_RESULTS.KNEW)">
          <md-icon>check</md-icon>
          I knew it
        </md-button>
        <md-button v-if="backShown" @click="studyResult(STUDY_RESULTS.SORT_OF)">
          <md-icon>remove</md-icon>
          Sort of knew it
        </md-button>
        <md-button v-if="backShown" class="md-accent" @click="studyResult(STUDY_RESULTS.DIDNT_KNOW)">
          <md-icon>clear</md-icon>
          Didn't know it
        </md-button>
      </md-card-actions>
    </md-card>

    <div v-if="finished">
      done!
    </div>

  </div>
</template>

<script>

import { CARD_STUDY_RESULTS } from "@/lib/study";

export default {
  name: "SessionViewer",

  props: ["deck", "session"],

  data: function() {
    return {
      // toggles between true and false when the back of the card is being shown
      backShown: false,

      // for the HTML to call
      STUDY_RESULTS: CARD_STUDY_RESULTS,

      // if the session is over, show some summary stats
      // TODO extract into its own component
      finished: false
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
    studyResult(result) {
      // result is from the CARD_STUDY_RESULTS enum
      console.log("RESULT", result),
      this.finished = this.session.cardStudied(result);
    }
  },

  // props: {
  //   msg: String
  // },
  computed: {
    currentCard() {
      return this.session.getCurrentCard();
    },

    cardFront() {
      // TODO extract this all into an enum
      return this.order === "question_first"
        ? this.currentCard.question
        : this.currentCard.answer;
    },

    cardBack() {
      return this.order === "question_first"
        ? this.currentCard.answer
        : this.currentCard.question;
    },

    order() {
      // show question first or answer first
      return this.session.order;
    },

    backPrompt() {
      // "show question" or "show answer", based on the order
      return this.order === "question_first" ? "Answer" : "Question";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // @import "~vue-material/theme/engine";
  //
  // @include md-register-theme("green-button", (
  //   primary: md-get-palette-color(green, 500)
  // ));
  //
  // @include md-register-theme("black-card", (
  //   primary: md-get-palette-color(black, 500)
  // ));
  //
  // @include md-register-theme("purple-card", (
  //   primary: md-get-palette-color(purple, 500)
  // ));
  //
  // @include md-register-theme("orange-card", (
  //   primary: md-get-palette-color(orange, 500)
  // ));
</style>
