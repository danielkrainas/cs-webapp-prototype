<template>
  <div class="events">
    <event-list></event-list>
  </div>
</template>

<script>
import eventList from './EventList.vue'

export default {
  components: {
    eventList,
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
