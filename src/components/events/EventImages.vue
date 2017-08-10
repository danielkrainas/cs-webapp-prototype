<template>
  <div class="folder-images-grid">
    <div class="folder-images-toolbar">
      <div class="upload-button button">
        <span class="fa fa-upload"></span>
        <span>Upload Images</span>
      </div>
      <div class="folder-name">
        Folder Name
      </div>
      <div class="folder-tools">
        <ol class="filter-tags">
          <li v-for="tag in tags" class="button">
            <span class="fa fa-circle-o filter-item" v-bind:class="tag.class"></span>
          </li>
        </ol>
      </div>
    </div>
    <ol class="images">
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

.folder-images-toolbar {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

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
  font-size: 22px;
}

.folder-images-grid {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
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
