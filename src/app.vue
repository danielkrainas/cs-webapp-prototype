<template>
  <div class="app-container">
    <top-nav></top-nav>
  </div>
</template>

<script>
import topNav from './components/TopNav.vue'

export default {
  name: 'app',
  components: {
    topNav,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>

$color-app-bg: #eee;

.app-container {
  width: 100vw;
  height: 100vh;
  background-color: $color-app-bg;
}

</style>
