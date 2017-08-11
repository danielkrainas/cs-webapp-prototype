<template>
  <div class="toolbar">
    <div class="toolbar-section left">
      <h2 class="gallery-name">Gallery {{ galleryId }}</h2>
    </div>
    <div class="toolbar-section center">
    </div>
    <div class="toolbar-section right">
      <ol class="nav-items">
        <li v-for="item in navItems">
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
    justify-content: flex-end;
  }
}

.nav-items {
  display: flex;
}

.gallery-name {
  font-size: 18px;
}

</style>
