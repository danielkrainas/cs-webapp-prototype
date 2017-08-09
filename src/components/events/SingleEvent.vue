<template>
  <div class="single-event-container">
    <single-event-toolbar></single-event-toolbar>
    <div class="content">
      <single-event-subnav></single-event-subnav>

    </div>
  </div>
</template>

<script>
import singleEventToolbar from './SingleEventToolbar.vue'
import singleEventSubnav from './SingleEventSubnav.vue'

export default {
  components: {
    singleEventToolbar,
    singleEventSubnav,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.single-event-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.content {
  display: flex;
  flex-grow: 1;
}

</style>
