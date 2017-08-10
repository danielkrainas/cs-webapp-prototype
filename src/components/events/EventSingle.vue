<template>
  <div class="single-event-container">
    <event-toolbar :event-name="'Event ' + this.eventId"></event-toolbar>
    <div class="content">
      <event-subnav></event-subnav>
      <router-view name="eventDetails"></router-view>
    </div>
  </div>
</template>

<script>
import eventToolbar from './EventToolbar.vue'
import eventSubnav from './EventSubnav.vue'

export default {
  components: {
    eventToolbar,
    eventSubnav,
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
