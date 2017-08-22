<template>
  <div class="store-subnav toolbar">
    <menu-bar :items="navItems"></menu-bar>
  </div>
</template>

<script>
import menuBar from '../common/MenuBar.vue'

export default {
  components: {
    menuBar,
  },
  data () {
    return {
      navItems: [
        {
          name: 'Orders',
          routeName: 'storeOrders',
        }, {
          name: 'Catalogs',
          routeName: 'storeCatalogs',
        }, {
          name: 'Discounts',
          routeName: 'storeDiscounts',
        }, {
          name: 'Shipping',
          routeName: 'storeShipping',
        }, {
          name: 'Taxes',
          routeName: 'storeTaxes',
        }, {
          name: 'Banking',
          routeName: 'storeBanking',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.store-subnav {
  z-index: $z-sub-nav;
  background-color: $color-app-bg;
}

.nav-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
}

</style>
