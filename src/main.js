import Vue from 'vue'
import VueRouter from 'vue-router'
import ToggleButton from 'vue-js-toggle-button'
import SimpleInput from './components/common/simple-input.vue'

import App from './App.vue'

import home from './components/Home.vue'

import account from './components/account/Account.vue'
import accountAmbassador from './components/account/Ambassador.vue'
import accountBilling from './components/account/Billing.vue'
import accountEmail from './components/account/Email.vue'
import accountStorage from './components/account/Storage.vue'
import accountUser from './components/account/User.vue'
import accountWeb from './components/account/Web.vue'

import gallery from './components/galleries/gallery.vue'
import galleryList from './components/galleries/GalleryList.vue'
import gallerySingle from './components/galleries/GallerySingle.vue'
import galleryImages from './components/galleries/GalleryImages.vue'
import galleryImagesGrid from './components/galleries/GalleryImagesGrid.vue'
import gallerySettings from './components/galleries/GallerySettings.vue'
import galleryShare from './components/galleries/GalleryShare.vue'
import galleryUpload from './components/galleries/GalleryUpload.vue'
import galleryDownload from './components/galleries/GalleryDownload.vue'

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

import help from './components/Help.vue'

Vue.use(VueRouter)
Vue.use(ToggleButton)
Vue.component('simple-input', SimpleInput)

/* eslint-disable indent */
const routes = [{
  path: '/',
  name: 'home',
  component: home,
}, {
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
  path: '/galleries',
  components: { default: gallery },
  children: [{
      path: '',
      name: 'galleries',
      redirect: { name: 'galleryList' },
    }, {
      path: 'list',
      name: 'galleryList',
      components: { galleryContent: galleryList },
    }, {
      path: ':galleryId',
      components: { galleryContent: gallerySingle },
      props: { galleryContent: true },
      children: [{
          path: '',
          name: 'gallerySingle',
          redirect: { name: 'galleryImages' },
        }, {
          path: 'images',
          redirect: { name: 'galleryImages' },
          components: { galleryDetails: galleryImages },
          children: [{
            path: '',
            name: 'galleryImages',
            components: { galleryImagesContent: galleryImagesGrid },
            props: { galleryImagesContent: true },
          }, {
            path: ':folderId',
            name: 'folderImages',
            components: { galleryImagesContent: galleryImagesGrid },
            props: { galleryImagesContent: true },
          }, {
            path: 'upload',
            name: 'galleryUpload',
            components: { galleryImagesContent: galleryUpload },
            props: { galleryImagesContent: true },
          }, {
            path: 'download',
            name: 'galleryDownload',
            components: { galleryImagesContent: galleryDownload },
            props: { galleryImagesContent: true },
          }],
        }, {
          path: 'overview',
          name: 'analyticsOverview',
          components: { galleryDetails: analyticsOverview },
          props: { galleryDetails: true },
        }, {
          path: 'visitors',
          name: 'analyticsVisitors',
          components: { galleryDetails: analyticsVisitors },
          props: { galleryDetails: true },
        }, {
          path: 'favorites',
          name: 'analyticsFavorites',
          components: { galleryDetails: analyticsFavorites },
          props: { galleryDetails: true },
        }, {
          path: 'settings',
          name: 'gallerySettings',
          components: { galleryDetails: gallerySettings },
          props: { galleryDetails: true },
        }, {
          path: 'share',
          name: 'galleryShare',
          components: { galleryDetails: galleryShare },
          props: { galleryDetails: true },
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
}, {
  path: '/help',
  name: 'help',
  component: help,
}]
/* eslint-enable indent */

const router = new VueRouter({
  routes,
})

/* TODO - these don't belong here... */
require('./style/reset.css')
require('./style/global.scss')
require('./style/animation.scss')

window.app = new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
