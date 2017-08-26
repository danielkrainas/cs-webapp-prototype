<template>
  <div class="gallery-settings">
    <div class="gallery-param">
      <label>Gallery Name</label>
      <input name="name">
      </input>
    </div>

    <div class="gallery-param">
      <label>URL</label>
      <input name="gallery-url">
      </input>
    </div>

    <div class="gallery-param">
      <label>Video Link</label>
      <input name="video-url">
      </input>
    </div>

    <div class="gallery-param top">
      <span>Include Folders</span>
      <div class="placeholder include-folders">
      </div>
    </div>

    <div class="gallery-param top">
      <span>Cover Image</span>
      <div class="placeholder cover-image">
      </div>
    </div>

    <div class="gallery-param top">
      <span>Gallery Layout</span>
      <div class="placeholder gallery-layout">
      </div>
    </div>

    <div class="gallery-param">
      <span>Downloads</span>
      <toggle-button :labels="true"/>
    </div>

    <div class="subsection downloads">
      <div class="gallery-param">
        <span>Download Size</span>
        <input></input>
      </div>
    </div>

    <div class="gallery-param">
      <span>Sales</span>
      <toggle-button :labels="true"/>
    </div>


    <div class="gallery-param">
      <span>Social Sharing</span>
      <toggle-button :labels="true"/>
    </div>

    <h2>access</h2>

    <div class="gallery-param">
      <span>Display on Home Page</span>
      <toggle-button :labels="true"/>
    </div>

    <div class="gallery-param top">
      <span>Category</span>
      <select>
        <option>Category A</option>
        <option>Category B</option>
        <option>Category B</option>
      </select>
    </div>

    <div class="gallery-param top">
      <span>Expiration Date</span>
      <div class="placeholder date-picker"></div>
    </div>

    <div class="gallery-param">
      <span>Require Email</span>
      <toggle-button :labels="true"/>
    </div>

    <div class="gallery-param">
      <span>Password</span>
      <input></input>
    </div>

    <div class="gallery-param top">
      <span>Watermark</span>
      <div class="placeholder cover-image">
      </div>
    </div>


  </div>
</template>

<script>
export default {
  props: ['galleryId'],
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.gallery-settings {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 25px;
}

.gallery-param {
  display: flex;
  align-items: center;
  margin: 10px;

  &.top {
    align-items: flex-start;

    span {
      margin-top: 3px;
    }
  }

  label,
  span {
    flex-basis: 150px;
  }
}

.placeholder {
  background-color: $color-accent;
  border-radius: 5px;
  width: 250px;
}

.include-folders {
  height: 300px;
}

.gallery-layout,
.cover-image {
  height: 150px;
}

.date-picker {
  height: 40px;
}

</style>
