<template>
  <div class="gallery-toolbar toolbar">
    <div class="toolbar-section left">
      <h2 class="gallery-name">{{ galleryName }}</h2>
    </div>
    <div class="toolbar-section right">
      <menu-bar :items="navItems"></menu-bar>
    </div>
  </div>
</template>

<script>
import menuBar from '../common/MenuBar.vue'

export default {
  components: {
    menuBar,
  },
  watch: {
    '$route': function () {
      for (var i in this.navItems) {
        if (this.$route.name === this.navItems[i].routeName) {
          this.lastRouteName = this.$route.name
        }
      }
    },
  },
  computed: {
    galleryId () {
      return this.$route.params.galleryId
    },
    galleryName () {
      return this.$store.getters.galleryById(this.galleryId).name
    },
  },
  methods: {
    itemExtraClass (item) {
      return item.routeName === this.lastRouteName ? 'callout' : ''
    },
  },
  data () {
    return {
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

.gallery-toolbar {
  padding-left: 10px;
}

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
