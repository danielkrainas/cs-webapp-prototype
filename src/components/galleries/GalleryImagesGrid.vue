<template>
  <ol class="images grid">
    <li v-for="image in images" class="image">
      <span>{{ image.name }}</span>
    </li>
  </ol>
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
  props: ['galleryId'],
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

.grid {
  padding-top: 7px;
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
