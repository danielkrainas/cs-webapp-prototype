<template>
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
</template>

<script>
export default {
  data () {
    return {
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
