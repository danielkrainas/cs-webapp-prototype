<template>
  <div class="top-nav">
    <ol class="nav-list">
      <li v-for="item in navItems" class="nav-item">
        <router-link :to="item.link">
          {{ item.title }}
        </router-link>
      </li>
    </ol>
    <div class="help nav-item">
      Help
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        {
          title: 'Events',
          link: '/events',
        },
        {
          title: 'Store',
          link: '/store',
        },
        {
          title: 'People',
          link: '/people',
        },
        {
          title: 'Account',
          link: '/account',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../style/colors';

.top-nav {
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  border-bottom: 1px solid $color-accent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.nav-list {
  display: flex;
}

.nav-item {
  min-width: 80px;
  padding: 10px;
  transition: background-color 0.3s ease;
  text-align: center;
  border-radius: 5px;

  &:hover {
    background-color: $color-button-hover-bg;
  }
}
</style>
