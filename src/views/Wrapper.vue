<template>
  <div>
    <TopBar :title="activePageName" />

    <div class="wrapper-content">
      <router-view @update-page-name="updatePageName($event)"></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";

export default {
  name: "wrapper",
  data: function() {
    return {
      activePageName: "Cabra"
    };
  },
  components: {
    TopBar
  },

  methods: {
    updatePageName(newPageName) {
      // called when we load a new page
      this.activePageName = newPageName;
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper-content {
  padding: 1em;
}
</style>
