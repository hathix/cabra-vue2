<template>
  <div class="home">
    <img src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <DeckList />
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
