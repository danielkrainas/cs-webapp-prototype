<template>
  <div class="top-nav">
    <ol class="nav-list">
      <li v-for="item in navItems" class="nav-item">
        <router-link :to="{ name: item.route }" class="button">
          {{ item.title }}
        </router-link>
      </li>
    </ol>
    <div class="help nav-item button">
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
          title: 'Galleries',
          route: 'galleries',
        },
        {
          title: 'Store',
          route: 'store',
        },
        {
          title: 'People',
          route: 'people',
        },
        {
          title: 'Account',
          route: 'account',
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
  text-align: center;
}

.button {
  text-align: center;
}
</style>
