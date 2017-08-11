<template>
  <div class="home">
    <h1>Home</h1>

    <div class="content">
      <h2>Notes about this mockup</h2>
      <ul>
        <li>This is intentionally unstyled, or minimally so.</li>
        <li>Not hooked up to any data</li>
      </ul>
      <h2>Functional Changes</h2>
      <p>This mockup represents several functional changes from the current CloudSpot App. In brief, they are...</p>

      <h3>No Events</h3>
      <p>To simplify things, the top-level container for things is now Galleries, not Events. The only difference to the user will be that you cannot have multiple galleries per event. Users who wish to have a separate gallery for e.g. coordinators, will have to just create another gallery. </p>
      <p>Long-term, we can help make this easier by fixing the architecture of our storage system to prevent duplicated images in S3, and possibly by letting users clone a gallery or share images amongs them.</p>
      <p>However, a brief bit of research suggests that only 10% of our events have > 1 gallery attached to them. In many cases these are duplicate galleries that were created sometimes up to 100 times. Further, the subset of users that utilize this feature is low.</p>
      <p>What we gain by flattening this hierarchy is a LOT, though:</p>
      <ol>
        <li>Simplified concept for users - one less layer of abstraction to think about</li>
        <li>One less layer of navigation for the UI - this simplifies a LOT of things, actually.</li>
        <li>Number of steps to get to a shared event is reduced by at LEAST one.</li>
        <li>No confusing settings dichotomy / inheritance. For instance, I think Cover Photos should be per-gallery, not per-event.</li>
        <li>(long-term) a simplified backend API and storage architecture</li>
      </ol>

      <h3>No Folders</h3>
      <p>The primary purpose of folders is to organize images for presentation in galleries. Secondarily, it's to segment images for multiple galleries in an event, but I'd like to ditch that (see above). To accomplish the same end, with greater flexibility, I'd like to use ad-hoc "collections" on the set of gallery images. Filters, basically, which can display a subset of the gallery images in the app or in the galleries themselves.</p>
      <p>In the app, photograpers can tag images (we'll have to overhaul our tag system too - WIP). When setting up a gallery, they can include or exclude tags if needs be, or order presentation based on tags.</p>
      <p>So, galleries contain a flat collection of images, and we can tag images to create collections. We can also create collections from user favorites, purchased images, etc. It will look the same to the gallery visitors, but photographers will have a lot more flexibility.</p>
      <p>I'm still thinking this through. Subject to change. WIP.</p>

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
@import '../style/colors';

.home {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  // color: #fff;

  .content {
    width: 500px;
    overflow-y: auto;
    flex-shrink: 1;
  }

  h1 {
    font-size: 50px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
    margin-top: 44px;
    padding-bottom: 8px;
    border-bottom: 1px solid $color-accent;
  }

  h3 {
    font-size: 18px;
    margin-top: 36px;
    margin-bottom: 18px;
  }

  p {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 15px;
  }

  li {
    line-height: 22px;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;

    li {
      margin-bottom: 8px;
      padding-left: 13px;
      text-indent: -13px;
    }
  }

  ul {
    list-style: circle;
    padding: 0;
    margin: 0;

    li {
      &::before {
        content: '•';
        padding-right: 8px;
        color: $color-font-default;
      }
    }
}


}

</style>
