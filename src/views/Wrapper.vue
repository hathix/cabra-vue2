<template>
  <div>
    <TopBar />

    <div class="wrapper-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";

export default {
  name: "wrapper",
  components: {
    TopBar
  }
};
</script>

<style scoped lang="scss">
  .wrapper-content {
    padding: 1em;
  }
</style>
