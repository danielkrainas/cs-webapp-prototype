<template>
  <div class="toolbar">
    <div class="toolbar-section left">
      <router-link to="{ name: 'galleries' }">
        <div class="nav-back button">
          <span class="fa fa-chevron-left"></span>
          <span>All Galleries</span>
        </div>
      </router-link>
    </div>
    <div class="toolbar-section center">
      <h2 class="gallery-name">{{ galleryName }}</h2>
    </div>
    <div class="toolbar-section right">
      <div class="button">
        <span class="button-title">Uplaod</span>
      </div>
      <div class="button">
        <span class="button-title">Share</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['galleryName'],
  data () {
    return {
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

.gallery-name {
  font-size: 22px;
}

@media screen and (max-width: 800px) {
  .button-title {
    width: 0;
    opacity: 0;
  }

  .right {
    .fa {
      margin-right: 0;
    }
  }
}

</style>
