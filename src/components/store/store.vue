<template>
  <div class="store">
    <store-toolbar></store-toolbar>
    <transition name="fade" mode="out-in">
      <router-view name="storeContent"></router-view>
    </transition>
  </div>
</template>

<script>
import storeToolbar from './store-toolbar.vue'

export default {
  components: {
    storeToolbar,
  },
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.store {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

</style>
