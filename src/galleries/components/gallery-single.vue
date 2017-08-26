<template>
  <div class="single-gallery-container">
    <gallery-toolbar></gallery-toolbar>
    <transition name="fade" mode="out-in">
      <router-view name="galleryDetails"></router-view>
    </transition>
  </div>
</template>

<script>
import galleryToolbar from './gallery-toolbar.vue'

export default {
  components: {
    galleryToolbar,
  },
  props: ['galleryId'],

  data () {
    return {
      theId: this.galleryId,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.single-gallery-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.content {
  display: flex;
  flex-grow: 1;
}

</style>
