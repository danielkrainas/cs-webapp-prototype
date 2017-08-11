<template>
  <div class="account-web container-settings">
    <div class="section-settings">
      <h2>Home Page URL</h2>
      <simple-input
        placeholder="http://your-url.client-gallery.com"
        icon="globe"
        />

      <h2>Gallery Accent Color</h2>
      <div class="placeholder-block"></div>

      <h2>Website & Copyright</h2>
      <simple-input
        placeholder="http://your-website.com"
        icon="globe"
        />
      <simple-input
        placeholder="Your Copyright Info"
        icon="copyright"
        />

      <h2>Social Media Links</h2>
      <simple-input
        placeholder="facebook"
        icon="facebook"
        />
      <simple-input
        placeholder="twitter"
        icon="twitter"
        />
      <simple-input
        placeholder="instagram"
        icon="instagram"
        />
      <simple-input
        placeholder="blog"
        icon="wordpress"
        />

      <h2>Custom Logos</h2>
      <h3>Email Logo</h3>
      <div class="placeholder-block md"></div>

      <h3>Online Gallery Logo</h3>
      <div class="placeholder-block md"></div>

      <h3>Cover Photo Logo</h3>
      <div class="placeholder-block md"></div>

      <h2>Web Gallery Watermark</h2>

      <h3>Watermark File</h3>
      <div class="placeholder-block md"></div>

      <h3>Watermark Location</h3>
      <div class="placeholder-block md"></div>

      <h3>Watermark Opacity</h3>
      <div class="placeholder-block md"></div>


    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

</style>
