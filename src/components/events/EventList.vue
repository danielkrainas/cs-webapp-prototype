<template>
  <div class="event-list-container">
    <div class="event-toolbar">
      <div class="search">
        <span class="fa fa-search search-icon"></span>
        <input class="search-box" placeholder="Search Events">
        </input>
      </div>
      <div class="controls">
        <span>Sort By</span>
        <select class="sort-by">
          <option v-for="option in sortOptions" v-bind:value="option.key">
            {{ option.display }}
          </option>
        </select>
        <span class="fa fa-th-large button option-grid-view"></span>
        <div class="fa fa-th-list button option-list-view"></div>
      </div>
    </div>

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
      sortOptions: [
        {
          key: 'name',
          display: 'Event Name',
        },
        {
          key: 'dateDesc',
          display: 'Event Date (newest first)',
        },
        {
          key: 'dateAsc',
          display: 'Event Date (oldest first)',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.event-list-container {
  overflow: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.event-list {
  overflow-y: auto;
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

.event-toolbar {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  border-bottom: 1px solid $color-accent;
  position: relative;
}

.search {
  position: relative;
}

.search-box {
  height: 30px;
  border-radius: 15px;
  border: 1px solid $color-accent;
  width: 300px;
  padding: 0 10px;
  text-indent: 25px;
  position: relative;
}

.search-icon {
  position: absolute;
  top: 8px;
  left: 11px;
  z-index: 10;
  color: $color-accent;
}

.controls {
  display: flex;
  align-items: center;
}

.sort-by {
  height: 20px;
  margin: 0 8px;
  background-color: $color-form-background;
  color: $color-font-default;
  border-color: $color-accent;
}

.option-grid-view,
.option-list-view {
  font-size: 20px;
}



</style>
