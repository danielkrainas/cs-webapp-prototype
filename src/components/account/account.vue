<template>
  <div class="account">
    <account-toolbar></account-toolbar>
    <transition name="fade" mode="out-in">
      <router-view name="accountContent"></router-view>
    </transition>
  </div>
</template>

<script>
import accountToolbar from './account-toolbar.vue'

export default {
  components: {
    accountToolbar,
  },
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.account {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

</style>
