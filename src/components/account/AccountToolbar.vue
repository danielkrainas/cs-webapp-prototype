<template>
  <div class="toolbar">
    <ol class="nav-list toolbar">
      <li v-for="item in navItems">
        <router-link :to="{ name: item.route }">
          <span class="button">{{ item.name }}</span>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        {
          name: 'Storage',
          route: 'accountStorage',
        }, {
          name: 'User',
          route: 'accountUser',
        }, {
          name: 'Email',
          route: 'accountEmail',
        }, {
          name: 'Web',
          route: 'accountWeb',
        }, {
          name: 'Billing',
          route: 'accountBilling',
        }, {
          name: 'Ambassador',
          route: 'accountAmbassador',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.nav-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
}

</style>
