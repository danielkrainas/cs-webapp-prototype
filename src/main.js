import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
import SimpleInput from './components/common/simple-input.vue'

import account from './components/account/Account.vue'
import accountAmbassador from './components/account/Ambassador.vue'
import accountBilling from './components/account/Billing.vue'
import accountEmail from './components/account/Email.vue'
import accountStorage from './components/account/Storage.vue'
import accountUser from './components/account/User.vue'
import accountWeb from './components/account/Web.vue'

import events from './components/events/Events.vue'
import eventList from './components/events/EventList.vue'
import eventSingle from './components/events/EventSingle.vue'
import eventImages from './components/events/EventImages.vue'

import galleryList from './components/galleries/GalleryList.vue'
import gallerySingle from './components/galleries/GallerySingle.vue'

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

Vue.use(VueRouter)
Vue.use(ToggleButton)
Vue.component('simple-input', SimpleInput)

/* eslint-disable indent */
const routes = [{
  path: '/account',
  name: 'account',
  component: account,
  children: [{
    path: '',
    redirect: { name: 'accountStorage' },
  }, {
    path: 'ambassador',
    name: 'accountAmbassador',
    components: { accountContent: accountAmbassador },
  }, {
    path: 'billing',
    name: 'accountBilling',
    components: { accountContent: accountBilling },
  }, {
    path: 'email',
    name: 'accountEmail',
    components: { accountContent: accountEmail },
  }, {
    path: 'storage',
    name: 'accountStorage',
    components: { accountContent: accountStorage },
  }, {
    path: 'user',
    name: 'accountUser',
    components: { accountContent: accountUser },
  }, {
    path: 'web',
    name: 'accountWeb',
    components: { accountContent: accountWeb },
  }],
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
      components: { eventsContent: eventSingle },
      props: { eventsContent: true },
      children: [{
          path: '',
          name: 'eventSingle',
          redirect: { name: 'eventImages' },
        }, {
          path: 'images',
          name: 'eventImages',
          components: { eventDetails: eventImages },
          children: [{
            path: ':folderId',
            name: 'folderImages',
            components: { eventDetails: eventImages },
            props: { eventDetails: true },
          }],
        },

        {
          path: 'galleries',
          name: 'galleryList',
          components: { eventDetails: galleryList },
        }, {
          path: 'galleries/:galleryId',
          name: 'gallerySingle',
          components: { eventDetails: gallerySingle },
          props: { eventDetails: true },
        },

        {
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
  components: { default: store },
  children: [{
    path: '',
    redirect: { name: 'storeOrders' },
  }, {
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
    components: { storeContent: storeTaxes },
  }, {
    path: 'shipping',
    name: 'storeShipping',
    components: { storeContent: storeShipping },
  }],
}]
/* eslint-enable indent */

const router = new VueRouter({
  routes,
})

/* TODO - these don't belong here... */
require('./style/reset.css')
require('./style/global.scss')
require('./style/animation.scss')

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
