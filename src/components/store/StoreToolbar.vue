<template>
  <div class="store-subnav toolbar">
    <ol class="nav-list">
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
          name: 'Orders',
          route: 'storeOrders',
        }, {
          name: 'Catalogs',
          route: 'storeCatalogs',
        }, {
          name: 'Discounts',
          route: 'storeDiscounts',
        }, {
          name: 'Shipping',
          route: 'storeShipping',
        }, {
          name: 'Taxes',
          route: 'storeTaxes',
        }, {
          name: 'Banking',
          route: 'storeBanking',
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
