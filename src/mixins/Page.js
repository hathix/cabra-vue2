/**
  This mixin provides functionality for stand-alone pages in the app.
  This allows pages to do stuff like updating the title bar with the page's name.

  To use:

  - define a computed or static property called `pageName`
*/
export default {

  mounted: function() {
    let pageName = this.pageName || "Cabra"; // default
    this.$emit('update-page-name', pageName);
  }
}
