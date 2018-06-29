<template>
<div id="app">

  <div class="page-container">
    <md-app>
      <md-app-content>
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

<style lang="scss">
// this makes the app content take up at least the entire window height, so that
// footers will be at the bottom of the window even if there's no content
// this also helps the floating action buttons (the big colorful circular ones)
// always appear at the bottom of the screen
// see https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
.md-app-container {
  min-height: 100vh;
}
.md-app-content {
  // we have an embedded Wrapper component that actually holds everything, for technical reasons
  // - idk why but you can't embed custom components in App, so we're having
  // all routed stuff go through the Wrapper.
  // anyway no padding here; it belongs in the wrapper content instead
  padding: 0 !important;
}
</style>
