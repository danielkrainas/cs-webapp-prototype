<template>
  <div class="toolbar">
    <div class="toolbar-section left">
      <h2 class="gallery-name">Gallery {{ galleryId }}</h2>
    </div>
    <div class="toolbar-section center">
    </div>
    <div class="toolbar-section right">
      <ol class="nav-items">
        <li v-for="item in navItems" class="nav-item" :class="itemExtraClass(item)">
          <router-link :to="{ name: item.routeName }" class="button">
            {{ item.name }}
          </router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: ['galleryId'],
  watch: {
    '$route': function () {
      for (var i in this.navItems) {
        if (this.$route.name === this.navItems[i].routeName) {
          this.lastRouteName = this.$route.name
        }
      }
    },
  },
  methods: {
    itemExtraClass (item) {
      return item.routeName === this.lastRouteName ? 'callout' : ''
    },
  },
  data () {
    return {
      lastRouteName: this.$route.name,
      navItems: [{
        name: 'Images',
        routeName: 'galleryImages',
      }, {
        name: 'Visitors',
        routeName: 'analyticsOverview',
      }, {
        name: 'Settings',
        routeName: 'gallerySettings',
      }, {
        name: 'Share',
        routeName: 'galleryShare',
      }],
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
    margin-left: 5px;
  }

  &.center {
    text-align: center;
    justify-content: center;
  }

  &.right {
    height: 100%;
    justify-content: flex-end;
    align-items: stretch;
  }
}

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


.gallery-name {
  font-size: 18px;
}

</style>
