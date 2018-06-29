<!-- Top navbar -->

<template>
  <md-app-toolbar class="md-primary">
    <!-- if we're on the homepage, show the menu button -->
    <md-button class="md-icon-button" v-if="home">
      <md-icon>menu</md-icon>
    </md-button>
    <!-- else show the back button -->
    <md-button class="md-icon-button" @click="goBack()" v-else>
      <md-icon>arrow_back</md-icon>
    </md-button>

    <h3 class="md-title">Cabra</h3>
  </md-app-toolbar>
</template>

<script>
export default {
  name: "topbar",

  data: function() {
    return {
      // whether or not we are currently on the app's home page
      home: true
    }
  },

  // props: {
  //   msg: String
  // },
  // computed: {
  //   decks() {
  //     return this.$store.state.decks;
  //   }
  // }

  mounted: function() {
    // when page loads, analyze the route to decide which button to show
    // do the same afterward too
    this.onRouteChange(this.$route.name);
  },

  watch: {
    $route(to /*, from */) {
      // react to route changes...
      // when the route gets to "home", show the menu button
      // otherwise, show "back" so people can navigate back home
      // console.log(to);
      let newPageName = to.name;
      this.onRouteChange(newPageName);
    }
  },

  // trying custom functions,
  methods: {
    onRouteChange(newPageName) {
      // call me whenever the page loads or when the route is changed.
      // this will update the top bar's button accordingly.

      // TODO stop hardcoding this
      if (newPageName === "home") {
        // console.log("HOME SWEET HOME");
        this.home = true;
      } else {
        // console.log("ON THE BASEPATHS");
        this.home = false;
      }
    },
    goBack() {
      // console.log("BACKING UP!");
      // note that this is $routER, not $routE.
      // $.route gives the current page's URL and stuff,
      // $.router gives global functions.
      this.$router.back();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
