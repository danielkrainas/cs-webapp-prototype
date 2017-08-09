<template>
  <div id="app">
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

$bgcolor: #f00;

#app {
  background-color: $bgcolor;
}

</style>
