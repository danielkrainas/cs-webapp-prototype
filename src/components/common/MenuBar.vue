<template>
  <ol class="nav-items">
    <li v-for="item in items" class="nav-item" :class="itemActiveClass(item)">
      <router-link :to="{ name: item.routeName }" class="button">
        {{ item.name }}
      </router-link>
    </li>
  </ol>
</template>

<script>
export default {
  props: ['items'],
  watch: {
    '$route': function () {
      for (var i in this.items) {
        if (this.$route.name === this.items[i].routeName) {
          this.lastRouteName = this.$route.name
        }
      }
    },
  },
  methods: {
    itemActiveClass (item) {
      return item.routeName === this.lastRouteName ? 'callout' : ''
    },
  },
  data () {
    return {
      lastRouteName: this.$route.name,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.nav-items {
  align-items: stretch;
  display: flex;
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.callout {
  &::after,
  &::before {
    bottom: -1px;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &::after {
    border-color: transparent;
    border-bottom-color: $color-app-bg;
    border-width: 8px;
    margin-left: -8px;
  }

  &::before {
    border-color: transparent;
    border-bottom-color: $color-accent;
    border-width: 10px;
    margin-left: -10px;
  }
}

</style>
