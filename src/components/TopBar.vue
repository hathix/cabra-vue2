<!-- Top navbar -->

<template>
  <md-app-toolbar class="md-primary">
    <md-button class="md-icon-button" @click="goBack()">
      <md-icon>arrow_back</md-icon>
    </md-button>
    <h3 class="md-title">Cabra</h3>
  </md-app-toolbar>
</template>

<script>
export default {
  name: "topbar",
  // props: {
  //   msg: String
  // },
  // computed: {
  //   decks() {
  //     return this.$store.state.decks;
  //   }
  // }

  // trying custom functions,
  methods: {
    goBack() {
      console.log("BACKING UP!");
      // note that this is $routER, not $routE.
      // $.route gives the current page's URL and stuff,
      // $.router gives global functions.
      this.$router.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
