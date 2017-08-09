<template>
  <div class="app-container">
    <top-nav></top-nav>
    <events></events>
  </div>
</template>

<script>
import topNav from './components/TopNav.vue'
import events from './components/events/Events.vue'

export default {
  name: 'app',
  components: {
    topNav,
    events,
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
  flex-direction: column;
  overflow: hidden;
  background-color: $color-app-bg;
}

</style>
