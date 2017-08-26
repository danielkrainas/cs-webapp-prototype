<template>
  <div class="toolbar">
    <menubar :items="navItems"></menubar>
  </div>
</template>

<script>

export default {
  data () {
    return {
      navItems: [
        {
          name: 'Plan',
          routeName: 'accountPlan',
        }, {
          name: 'User',
          routeName: 'accountUser',
        }, {
          name: 'Email',
          routeName: 'accountEmail',
        }, {
          name: 'Web',
          routeName: 'accountWeb',
        }, {
          name: 'Ambassador',
          routeName: 'accountAmbassador',
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
