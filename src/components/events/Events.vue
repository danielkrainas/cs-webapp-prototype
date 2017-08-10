<template>
  <div class="events">
    <router-view name="eventsContent"></router-view>
  </div>
</template>

<script>
export default {
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
