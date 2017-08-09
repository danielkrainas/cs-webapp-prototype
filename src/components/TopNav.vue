<template>
  <div class="top-nav">
    <ul class="nav-list">
      <li v-for="item in navItems" class="nav-item">
        <a v-bind:href="item.link">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        {
          title: 'Events',
          link: '#',
        },
        {
          title: 'Store',
          link: '#',
        },
        {
          title: 'People',
          link: '#',
        },
        {
          title: 'Account',
          link: '#',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.top-nav {
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: flex-end;
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
    background-color: #ccc;
  }
}
</style>
