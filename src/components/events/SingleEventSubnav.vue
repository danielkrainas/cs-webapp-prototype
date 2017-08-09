<template>
  <div class="subnav">
    <h2 class="subnav-header">Images</h2>
    <ol class="subnav-list">
      <li v-for="folder in folders" class="subnav-item">
        <!-- <span class="fa fa-folder-open-o"></span> -->
        <span>{{ folder.name }}</span>
      </li>
    </ol>

    <h2 class="subnav-header">Galleries</h2>
    <ol class="subnav-list">
      <li v-for="gallery in galleries" class="subnav-item">
        <!-- <span class="fa fa-folder-open-o"></span> -->
        <span>{{ gallery.name }}</span>
      </li>
    </ol>

    <h2 class="subnav-header">Analytics</h2>
    <ol class="subnav-list">
      <li v-for="section in analyticsSections" class="subnav-item">
        <!-- <span class="fa fa-folder-open-o"></span> -->
        <span>{{ section.name }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data () {
    return {
      folders: [
        {
          name: 'Folder A',
        },
        {
          name: 'Folder B',
        },
        {
          name: 'Folder C',
        },
        {
          name: 'Folder D',
        },
      ],
      galleries: [
        {
          name: 'Gallery A',
        },
        {
          name: 'Gallery B',
        },
        {
          name: 'Gallery C',
        },
      ],
      analyticsSections: [
        {
          name: 'Overview',
        },
        {
          name: 'Favorites',
        },
        {
          name: 'Visitor Emails',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.subnav {
  padding-left: 25px;
}

.subnav-header {
  font-size: 22px;
  margin-bottom: 5px;
}

.subnav-list {
  margin-bottom: 20px;
}

.subnav-item {
  font-size: 13px;
  margin: 10px 0 10px 10px;

  .fa {
    margin-right: 5px;
  }
}

</style>
