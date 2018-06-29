<template>
<div id="app">

  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <h3 class="md-title">Cabra</h3>
      </md-app-toolbar>

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
</style>
