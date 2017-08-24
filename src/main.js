import Vue from 'vue'
import VueRouter from 'vue-router'
import ToggleButton from 'vue-js-toggle-button'
import SimpleInput from './components/common/simple-input.vue'

import App from './app.vue'
import Home from './components/home.vue'
import Help from './components/help.vue'

import account from './components/account/account.vue'
import accountAmbassador from './components/account/ambassador.vue'
import accountEmail from './components/account/email.vue'
import accountPlan from './components/account/plan.vue'
import accountUser from './components/account/user.vue'
import accountWeb from './components/account/web.vue'

import analyticsOverview from './components/analytics/overview.vue'
import analyticsFavorites from './components/analytics/favorites.vue'
import analyticsVisitors from './components/analytics/visitors.vue'

import gallery from './components/galleries/gallery.vue'
import galleryList from './components/galleries/gallery-list.vue'
import gallerySingle from './components/galleries/gallery-single.vue'
import galleryImages from './components/galleries/gallery-images.vue'
import galleryImagesGrid from './components/galleries/gallery-images-grid.vue'
import gallerySettings from './components/galleries/gallery-settings.vue'
import galleryShare from './components/galleries/gallery-share.vue'
import galleryCreate from './components/galleries/gallery-create.vue'
import galleryUpload from './components/galleries/gallery-upload.vue'
import galleryDownload from './components/galleries/gallery-download.vue'

import people from './components/people/people.vue'

import store from './components/store/store.vue'
import storeOrders from './components/store/orders.vue'
import storeCatalogs from './components/store/catalogs.vue'
import storeCatalogCreate from './components/store/catalog-create.vue'
import storeCatalogEdit from './components/store/catalog-edit.vue'
import storeDiscounts from './components/store/discounts.vue'
import storeBanking from './components/store/banking.vue'
import storeTaxes from './components/store/taxes.vue'
import storeShipping from './components/store/shipping.vue'

import DataStore from './vuex'
import { ClientTable } from 'vue-tables-2'

Vue.use(VueRouter)
Vue.use(ClientTable)
Vue.use(ToggleButton)
Vue.component('simple-input', SimpleInput)

/* eslint-disable indent */
const routes = [{
  path: '/',
  name: 'home',
  component: Home,
}, {
  path: '/account',
  name: 'account',
  component: account,
  children: [{
    path: '',
    redirect: { name: 'accountPlan' },
  }, {
    path: 'ambassador',
    name: 'accountAmbassador',
    components: { accountContent: accountAmbassador },
  }, {
    path: 'email',
    name: 'accountEmail',
    components: { accountContent: accountEmail },
  }, {
    path: 'plan',
    name: 'accountPlan',
    components: { accountContent: accountPlan },
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
      path: 'create',
      name: 'galleryCreate',
      components: { galleryContent: galleryCreate },
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
            components: {
              galleryImagesContent: galleryImagesGrid,
              galleryImagesModal: galleryUpload,
            },
            props: {
              galleryImagesContent: true,
              galleryContent: true,
            },
          }, {
            path: 'download',
            name: 'galleryDownload',
            components: {
              galleryImagesContent: galleryImagesGrid,
              galleryImagesModal: galleryDownload,
            },
            props: {
              galleryImagesContent: true,
              galleryContent: true,
            },
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
    components: { storeContent: storeCatalogs },
    redirect: { name: 'storeCatalogs' },
    children: [{
      path: '',
      name: 'storeCatalogs',
    }, {
      path: ':catalogId',
      name: 'storeCatalogSingle',
    }, {
      path: ':catalogId/edit',
      name: 'storeCatalogEdit',
      components: { storeCatalogModal: storeCatalogEdit },
    }, {
      path: 'create',
      name: 'storeCatalogCreate',
      components: { storeCatalogModal: storeCatalogCreate },
    }],
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
  component: Help,
}]
/* eslint-enable indent */

const router = new VueRouter({
  routes,
})

/* TODO - these don't belong here... */
require('./style/reset.css')
require('./style/global.scss')
require('./style/tables.scss')
require('./style/animation.scss')

window.app = new Vue({
  store: DataStore,
  el: '#app',
  router,
  render: h => h(App),
})
