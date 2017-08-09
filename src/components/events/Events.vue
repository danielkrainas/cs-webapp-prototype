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


</style>
