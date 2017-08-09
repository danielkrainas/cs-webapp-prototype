<template>
  <div class="events">
    <event-toolbar></event-toolbar>
    <event-list></event-list>
  </div>
</template>

<script>
import eventList from './EventList.vue'
import eventToolbar from './EventToolbar.vue'

export default {
  components: {
    eventList,
    eventToolbar,
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
