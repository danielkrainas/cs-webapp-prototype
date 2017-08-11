<template>
  <div class="folder-images">
    <div class="folder-images-toolbar toolbar">
      <div class="folder-name">
        All Images
      </div>
      <div class="folder-actions">
        <router-link :to="{ name: galleryUpload }" class="button">
          Upload
        </router-link>
        <router-link :to="{ name: galleryDownload }" class="button">
          Download
        </router-link>
      </div>
    </div>
    <ol class="images grid">
      <li v-for="image in images" class="image">
        <span>{{ image.name }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
function generateTestImages (count) {
  var images = []
  for (var i = 0; i < count; i++) {
    images.push({
      name: `Image ${i}`,
    })
  }
  return images
}

function generateTestTags (count) {
  var tags = []
  for (var i = 0; i < count; i++) {
    tags.push({
      class: `image-tag-${i}`,
    })
  }
  return tags
}

export default {
  data () {
    return {
      images: generateTestImages(50),
      tags: generateTestTags(5),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

// .folder-images-toolbar {
//   padding: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border-bottom: 1px solid $color-accent;
// }

.filter-tags {
  display: flex;
}

.filter-item {
  color: $color-accent;

  &.fa {
    margin-right: 0;
  }
}

.folder-name {
  font-size: 18px;
  margin-left: 5px;
}

.folder-actions {
  display: flex;
}

.folder-images {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.grid {
  padding-top: 7px;
}

.content {
  display: flex;
  flex-grow: 1;
}

.images {
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
}

.image {
  background-color: $color-block-placeholder;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-accent;
  margin: 15px;
  font-size: 22px;
  flex-grow: 1;
}

</style>
