<template>
  <div class="single-event-container">
    <single-event-toolbar :event-name="'Event ' + this.eventId"></single-event-toolbar>
    <div class="content">
      <single-event-subnav></single-event-subnav>
      <router-view name="eventDetails"></router-view>
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
  props: ['eventId'],

  created () {
    console.log('*************** id = ' + this.eventId)
  },

  data () {
    return {
      theId: this.eventId,
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
