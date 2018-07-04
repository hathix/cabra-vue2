/**
  This mixin provides functionality for stand-alone pages in the app.
  This allows pages to do stuff like updating the title bar with the page's name.

  To use:

  - define a property called `pageName`, either in `computed` or `data`
*/
export default {
  mounted: function() {
    let pageName = this.pageName || "Cabra"; // default
    this.$emit("update-page-name", pageName);
  },

  watch: {
    // whenever page name changes, this will run
    // in our case, emit the page name update event so the title bar reacts
    pageName: function(newPageName /*, oldPageName */) {
      this.$emit("update-page-name", newPageName);
    }
  }
};
