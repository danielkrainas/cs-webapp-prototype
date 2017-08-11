<template>
  <div class="main-nav">
    <ol class="nav-list">
      <li v-for="item in navItems" class="nav-item">
        <router-link :to="{ name: item.route }" class="button">
          <span class="fa" :class="'fa-' + item.icon"></span>
          {{ item.title }}
        </router-link>
      </li>
    </ol>
    <div class="help nav-item button">
      <span class="fa fa-question"></span>
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
          icon: 'picture-o',
        }, {
          title: 'Store',
          route: 'store',
          icon: 'usd',
        }, {
          title: 'People',
          route: 'people',
          icon: 'user',
        }, {
          title: 'Account',
          route: 'account',
          icon: 'cog',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../style/colors';

.main-nav {
  // width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  border-right: 1px solid $color-accent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // padding: 5px;
  font-size: 10px;

  .button {
    display: flex;
    flex-direction: column;
    width: 70px;
    font-size: inherit;
    border-radius: 0;

    .fa {
      margin: 0 0 10px;
      font-size: 24px;
    }
  }
}

.nav-list {
  display: flex;
  flex-direction: column;
}

.nav-item {
  text-align: center;
}

.button {
  text-align: center;
}
</style>
