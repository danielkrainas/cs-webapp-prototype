<template>
  <div class="subnav">
    <router-link :to="{ name: 'eventImages' }">
      <h2 class="subnav-header">Images</h2>
    </router-link>
    <ol class="subnav-list">
      <li v-for="folder in folders" class="subnav-item">
        <router-link :to="{ name: 'folderImages', params: { folderId: folder.id }}">
          <span>{{ folder.name }}</span>
        </router-link>
      </li>
    </ol>

    <router-link :to="{ name: 'galleryList' }">
      <h2 class="subnav-header">Galleries</h2>
    </router-link>
    <ol class="subnav-list">
      <li v-for="gallery in galleries" class="subnav-item">
        <router-link :to="{ name: 'singleGallery', params: { galleryId: gallery.id }}">
          <span>{{ gallery.name }}</span>
        </router-link>
      </li>
    </ol>

    <router-link :to="{ name: 'analyticsOverview' }">
      <h2 class="subnav-header">Analytics</h2>
    </router-link>
    <ol class="subnav-list">
      <li v-for="section in analyticsSections" class="subnav-item">
        <router-link :to="{ name: section.route }">
          <span>{{ section.name }}</span>
        </router-link>
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
          id: 'a',
        },
        {
          name: 'Folder B',
          id: 'b',
        },
        {
          name: 'Folder C',
          id: 'c',
        },
        {
          name: 'Folder D',
          id: 'd',
        },
      ],
      galleries: [
        {
          name: 'Gallery A',
          id: 'a',
        },
        {
          name: 'Gallery B',
          id: 'b',
        },
        {
          name: 'Gallery C',
          id: 'c',
        },
      ],
      analyticsSections: [
        {
          name: 'Overview',
          route: 'analyticsOverview',
        },
        {
          name: 'Favorites',
          route: 'analyticsFavorites',
        },
        {
          name: 'Visitor Emails',
          route: 'analyticsVisitors',
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
