<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <DeckList />

    <!-- TODO factor out into DeckAddButton or something -->
    <md-speed-dial class="md-bottom-right" md-event="click">
      <md-speed-dial-target>
        <md-icon>add</md-icon>
      </md-speed-dial-target>

      <!-- <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>note</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>event</md-icon>
        </md-button>
      </md-speed-dial-content> -->
    </md-speed-dial>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DeckList from "@/components/DeckList.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    DeckList
  }
};
</script>

<style scoped lang="scss">
.md-speed-dial {
  z-index: 100;
}
</style>
