import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'

import account from './components/account/Account.vue'
import events from './components/events/Events.vue'
import eventList from './components/events/EventList.vue'
import singleEvent from './components/events/SingleEvent.vue'

import people from './components/people/People.vue'
import store from './components/store/Store.vue'

Vue.use(ToggleButton)
Vue.use(VueRouter)

const routes = [
  { path: '/account', component: account },
  {
    path: '/events',
    components: {
      default: events,
      eventsContent: eventList,
    },
    children: [
      {
        path: '',
        components: {
          default: events,
          eventsContent: eventList,
        },
      }, {
        path: ':eventId',
        components: {
          default: events,
          eventsContent: singleEvent,
        },
        props: {
          default: false,
          eventsContent: true,
        },
      },
    ],
  },
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
