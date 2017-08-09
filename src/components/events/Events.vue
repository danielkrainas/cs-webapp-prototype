<template>
  <div class="events">
    <!-- <event-list></event-list> -->
    <single-event></single-event>
  </div>
</template>

<script>
import eventList from './EventList.vue'
import singleEvent from './SingleEvent.vue'

export default {
  components: {
    eventList,
    singleEvent,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.events {
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  flex-direction: column;
}

</style>
