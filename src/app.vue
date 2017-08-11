<template>
  <div class="app-container">
    <main-nav></main-nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import mainNav from './components/MainNav.vue'

export default {
  name: 'app',
  components: {
    mainNav,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'style/colors';

.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  // flex-direction: column;
  overflow: hidden;
  background-color: $color-app-bg;
}

</style>
