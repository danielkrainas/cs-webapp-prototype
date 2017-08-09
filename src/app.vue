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
      msg: 'This is populated from the msg data in this component',
    }
  },
}
</script>

<style>
</style>
