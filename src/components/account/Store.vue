<template>
  <div class="store">
    <store-toolbar></store-toolbar>
    <router-view name="storeContent"></router-view>
  </div>
</template>

<script>
import storeToolbar from './StoreToolbar.vue'

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
