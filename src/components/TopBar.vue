<!-- Top navbar -->

<template>
  <div>
  <md-app-toolbar class="md-primary">
    <!-- if we're on the homepage, show the menu button -->
    <md-button class="md-icon-button" v-if="home" @click="showSidebar = true">
      <md-icon>menu</md-icon>
    </md-button>
    <!-- else show the back button -->
    <md-button class="md-icon-button" @click="goBack()" v-else>
      <md-icon>arrow_back</md-icon>
    </md-button>

    <h3 class="md-title">{{ title }}</h3>
  </md-app-toolbar>

  <!-- TODO consider moving this out into another component -->
  <md-drawer :md-active.sync="showSidebar">
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">Cabra</span>
    </md-toolbar>

    <md-list>
      <md-list-item @click="$store.dispatch('clearAllData')">
        <md-icon>delete_sweep</md-icon>
        <span class="md-list-item-text">Clear All Data</span>
      </md-list-item>

      <md-list-item>
        <md-icon>send</md-icon>
        <span class="md-list-item-text">Sent Mail</span>
      </md-list-item>

      <md-list-item>
        <md-icon>delete</md-icon>
        <span class="md-list-item-text">Trash</span>
      </md-list-item>

      <md-list-item>
        <md-icon>error</md-icon>
        <span class="md-list-item-text">Spam</span>
      </md-list-item>
    </md-list>
  </md-drawer>
</div>
</template>

<script>
export default {
  name: "topbar",

  // pass me whatever I should put in the top bar's title
  // (the big text at the top of the app)
  props: [
    "title"
  ],

  data: function() {
    return {
      // whether or not we are currently on the app's home page
      home: true,
      // whether or not we should show the sidebar
      showSidebar: false
    };
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
