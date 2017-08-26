<template>
  <div class="app-container">
    <appnav></appnav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// components: {
// mainNav,
// },
export default {
  name: 'app',
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
@import 'style/colors';

.app-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  // flex-direction: column;
  overflow: hidden;
  background-color: $color-app-bg;
}

</style>
