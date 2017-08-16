<template>
  <div class="search">
    <span class="fa fa-search search-icon"></span>
    <input class="search-box" :placeholder="placeholder">
    </input>
  </div>
</template>

<script>
export default {
  props: ['placeholder'],
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

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
</style>
