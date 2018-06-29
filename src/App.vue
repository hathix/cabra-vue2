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

        <md-list>
          <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
          <md-list-item to="/components/list/router">Link Router</md-list-item>
          <md-list-item to="/components/list">Link Router Active Color</md-list-item>
        </md-list>

        <md-speed-dial class="md-bottom-right" md-event="click">
          <md-speed-dial-target>
            <md-icon>add</md-icon>
          </md-speed-dial-target>

          <md-speed-dial-content>
            <md-button class="md-icon-button">
              <md-icon>note</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>event</md-icon>
            </md-button>
          </md-speed-dial-content>
        </md-speed-dial>


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
.md-speed-dial {
  z-index: 100;
}
</style>
