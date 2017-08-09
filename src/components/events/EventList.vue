<template>
  <div class="event-list-container">
    <ol class="event-list">
      <li v-for="event in events" class="event">
        <div class="event-image">
          {{ event.name }}
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data () {
    var events = []
    const numEvents = 20
    for (var i = 0; i < numEvents; i++) {
      events.push({
        name: `Event ${i}`,
      })
    }
    return {
      events: events,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.event-list-container {
  overflow-y: auto;
  flex-shrink: 1;
  flex-grow: 1;
}

.event-list {
  display: flex;
  flex-wrap: wrap;
}

.event {
  margin: 15px;
  width: 300px;
  height: 200px;
  flex-grow: 1;
}

.event-image {
  width: 100%;
  height: 100%;
  background-color: $color-block-placeholder;
  color: $color-app-bg;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}

</style>
