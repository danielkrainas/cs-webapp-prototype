<template>
  <div class="toolbar">
    <div class="toolbar-section left">
      <div class="nav-back button">
        <span class="fa fa-chevron-left"></span>
        <span>All Events</span>
      </div>
    </div>
    <div class="toolbar-section center">
      <h2 class="event-name">{{ eventName }}</h2>
    </div>
    <div class="toolbar-section right">
      <div class="button">
        <span class="fa fa-share button"></span>
        <span>Share</span>
      </div>
      <div class="button">
        <span class="fa fa-cog button"></span>
        <span>Event Settings</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['eventName'],
  data () {
    return {
      // eventName: 'Event Name',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.toolbar-section {
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-basis: 33%;

  &.left {
    justify-content: flex-start;
  }

  &.center {
    text-align: center;
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;
  }
}

.event-name {
  font-size: 22px;
}

</style>
