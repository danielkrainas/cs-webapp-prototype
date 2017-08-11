<template>
  <div class="main-nav">
    <div class="nav-item">
      <router-link :to="{ name: 'home' }" class="button home">
        <!-- <span class="fa fa-question"></span> -->
        <div class="cs-icon">
          <svg width="2200" height="2500" viewBox="0 0 2200 2500" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="m1326.9743,783.64914c-166.60435,0 -320.55368,88.87953 -403.8857,233.17843c-83.30018,144.28099 -83.30018,322.06791 0,466.34691c83.33202,144.2989 237.28136,233.18241 403.8857,233.18241c101.91657,0 199.05767,-33.26913 278.23105,-92.10695c31.71711,-23.5789 75.73106,-20.27587 103.68748,7.66066l439.26401,439.26401c15.59988,15.61978 24.01665,36.99002 23.26054,59.05669c-0.77601,22.04677 -10.68512,42.78029 -27.31969,57.28579c-223.15391,194.44138 -512.18947,306.10788 -817.12338,306.10788c-444.29616,0 -854.84365,-237.04258 -1077.00864,-621.80649c-222.13913,-384.78381 -222.13913,-858.84709 0,-1243.61299c222.16499,-384.78182 632.71248,-621.83037 1077.00864,-621.83037c304.93391,0 593.96946,111.66849 817.12338,306.10788c16.63457,14.48759 26.48398,35.24101 27.26,57.26788c0.77601,22.05075 -7.62086,43.48069 -23.20084,59.08057l-439.26401,439.26003c-27.89673,27.87882 -72.04996,31.18185 -103.68748,7.66265c-79.17338,-58.83782 -176.31448,-92.10496 -278.23105,-92.10496l-0.00001,-0.00003zm12.43613,634.24064c55.53478,0 106.85123,-29.62784 134.62857,-77.72084c27.75744,-48.093 27.75744,-107.36857 0,-155.46157c-27.77734,-48.093 -79.09379,-77.72084 -134.62857,-77.72084c-55.53478,0 -106.85123,29.62784 -134.62857,77.72084c-27.75744,48.093 -27.75744,107.36857 0,155.46157c27.77734,48.093 79.09379,77.72084 134.62857,77.72084"/>
            </g>
          </svg>
        </div>
      </router-link>
    </div>
    <ol class="nav-list">
      <li v-for="item in navItems" class="nav-item">
        <router-link :to="{ name: item.route }" class="button">
          <span class="fa" :class="'fa-' + item.icon"></span>
          {{ item.title }}
        </router-link>
      </li>
    </ol>
    <div class="help nav-item">
      <router-link :to="{ name: 'help' }" class="button">
        <span class="fa fa-question"></span>
        Help
      </router-link>
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

.button {
  &.home {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
  }
}

.cs-icon {
  width: 32px;
  height: 32px;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
}

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
