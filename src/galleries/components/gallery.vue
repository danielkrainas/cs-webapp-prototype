<template>
  <div class="galleries">
    <transition name="fade" mode="out-in">
      <router-view name="galleryContent"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.galleries {
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

</style>
