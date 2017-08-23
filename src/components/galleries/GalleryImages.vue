<template>
  <div class="gallery-images">
    <router-view name="galleryImagesModal"></router-view>
    <div class="folder-images-toolbar toolbar">
      <router-link :to="{ name: 'galleryImages' }" class="button">
        <div class="folder-name">
          All Images
        </div>
      </router-link>
      <div class="folder-actions">
        <router-link :to="{ name: 'galleryUpload' }" class="button">
          Upload
        </router-link>
        <router-link :to="{ name: 'galleryDownload' }" class="button">
          Download
        </router-link>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view name="galleryImagesContent"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['galleryId'],
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.folder-name {
  font-size: 18px;
  margin-left: 5px;
}

.folder-actions {
  display: flex;
}

.gallery-images {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: relative;
}

.content {
  display: flex;
  flex-grow: 1;
}

</style>
