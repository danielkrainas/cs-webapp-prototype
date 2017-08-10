<template>
  <div class="single-event-container">
    <single-event-toolbar></single-event-toolbar>
    <div class="content">
      <single-event-subnav></single-event-subnav>
      <!-- <folder-images-grid></folder-images-grid> -->
      <single-gallery></single-gallery>
    </div>
  </div>
</template>

<script>
import singleEventToolbar from './SingleEventToolbar.vue'
import singleEventSubnav from './SingleEventSubnav.vue'
import folderImagesGrid from './FolderImagesGrid.vue'
import singleGallery from './SingleGallery.vue'

export default {
  components: {
    singleEventToolbar,
    singleEventSubnav,
    folderImagesGrid,
    singleGallery,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.single-event-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.content {
  display: flex;
  flex-grow: 1;
}

</style>
