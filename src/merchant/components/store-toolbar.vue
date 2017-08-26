<template>
  <div class="store-subnav toolbar">
    <menubar :items="navItems"></menubar>
  </div>
</template>

<script>
export default {
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
  justify-content: flex-end;
}

.nav-list {
  display: flex;
  align-items: center;
  flex-grow: 1;
}

</style>
