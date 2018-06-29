<template>
<div id="app">

  <div class="page-container">
    <md-app>
      <TopBar />

      <md-app-content>

        <HelloWorld msg="hi" />
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
  <!-- <md-app>

      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </md-app> -->
</div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";

export default {
  name: "app",
  components: {
    TopBar
  }
};
</script>

<style lang="scss">
// this makes the app content take up at least the entire window height, so that
// footers will be at the bottom of the window even if there's no content
// this also helps the floating action buttons (the big colorful circular ones)
// always appear at the bottom of the screen
// see https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
.md-app-container {
  min-height: 100vh;
}
</style>
