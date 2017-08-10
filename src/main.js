import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'

import account from './components/account/Account.vue'
import events from './components/events/Events.vue'
import people from './components/people/People.vue'
import store from './components/store/Store.vue'

Vue.use(ToggleButton)
Vue.use(VueRouter)

const routes = [
  { path: '/account', component: account },
  { path: '/events', component: events },
  { path: '/people', component: people },
  { path: '/store', component: store },
]

const router = new VueRouter({
  routes,
})

/* TODO - these don't belong here... */
require('./style/reset.css')
require('./style/global.scss')

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
