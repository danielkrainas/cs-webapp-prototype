<template>
  <div class="toolbar">
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
