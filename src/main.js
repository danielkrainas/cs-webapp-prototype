import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'

import account from './components/account/Account.vue'

import events from './components/events/Events.vue'
import eventList from './components/events/EventList.vue'
import singleEvent from './components/events/SingleEvent.vue'
import folderImagesGrid from './components/events/FolderImagesGrid.vue'

import galleryList from './components/galleries/GalleryList.vue'
import singleGallery from './components/galleries/SingleGallery.vue'

import analyticsOverview from './components/analytics/Overview.vue'
import analyticsFavorites from './components/analytics/Favorites.vue'
import analyticsVisitors from './components/analytics/Visitors.vue'

import people from './components/people/People.vue'

import store from './components/store/Store.vue'
import storeOrders from './components/store/Orders.vue'
import storeCatalogs from './components/store/Catalogs.vue'
import storeDiscounts from './components/store/Discounts.vue'
import storeBanking from './components/store/Banking.vue'
import storeTaxes from './components/store/Taxes.vue'
import storeShipping from './components/store/Shipping.vue'

Vue.use(ToggleButton)
Vue.use(VueRouter)

/* eslint-disable indent */
const routes = [{
  path: '/account',
  name: 'account',
  component: account,
}, {
  path: '/events',
  components: { default: events },
  children: [{
      path: '',
      redirect: '/events/list',
    }, {
      path: 'list',
      name: 'eventList',
      components: { eventsContent: eventList },
    }, {
      path: ':eventId',
      components: { eventsContent: singleEvent },
      props: { eventsContent: true },
      children: [{
          path: '',
          name: 'singleEvent',
          redirect: 'images',
        }, {
          path: 'images',
          name: 'eventImages',
          components: { eventDetails: folderImagesGrid },
          children: [{
            path: ':folderId',
            name: 'folderImages',
            components: { eventDetails: folderImagesGrid },
            props: { eventDetails: true },
          }],
        }, {
          path: 'galleries',
          name: 'galleryList',
          components: { eventDetails: galleryList },
        }, {
          path: 'galleries/:galleryId',
          name: 'singleGallery',
          components: { eventDetails: singleGallery },
          props: { eventDetails: true },
        }, {
          path: 'overview',
          name: 'analyticsOverview',
          components: { eventDetails: analyticsOverview },
          props: { eventDetails: true },
        }, {
          path: 'visitors',
          name: 'analyticsVisitors',
          components: { eventDetails: analyticsVisitors },
          props: { eventDetails: true },
        }, {
          path: 'favorites',
          name: 'analyticsFavorites',
          components: { eventDetails: analyticsFavorites },
          props: { eventDetails: true },
        },
    ],
  }],
}, {
  path: '/people',
  name: 'people',
  component: people,
}, {
  path: '/store',
  name: 'store',
  component: store,
  children: [{
    path: 'orders',
    name: 'storeOrders',
    components: { storeContent: storeOrders },
  }, {
    path: 'catalogs',
    name: 'storeCatalogs',
    components: { storeContent: storeCatalogs },
  }, {
    path: 'discounts',
    name: 'storeDiscounts',
    components: { storeContent: storeDiscounts },
  }, {
    path: 'banking',
    name: 'storeBanking',
    components: { storeContent: storeBanking },
  }, {
    path: 'taxes',
    name: 'storeTaxes',
    components: { storeContent: storeBanking },
  }, {
    path: 'shipping',
    name: 'storeShipping',
    components: { storeContent: storeBanking },
  }],
}]
/* eslint-enable indent */

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
