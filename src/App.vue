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

<style scoped lang="scss">

</style>
