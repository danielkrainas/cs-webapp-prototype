import Vue from 'vue'
import Vuex from 'vuex'

import mockOrders from './mock-data/orders'
import mockCatalogs from './mock-data/pricesheets'

Vue.use(Vuex)

function generateTestGalleries (count = 20) {
  var galleries = []
  for (var i = 0; i < count; i++) {
    galleries.push({
      name: `Gallery ${i}`,
      id: `${i}`,
    })
  }
  return galleries
}

const store = new Vuex.Store({
  state: {
    galleries: [],
    orders: mockOrders.result,
    catalogs: mockCatalogs.result,
  },
  getters: {
    /* Fetch one gallery by ID */
    galleryById: (s, g) => (id) => {
      const matches = s.galleries.filter(g => g.id === id)
      return matches.length === 0 ? null : matches[0]
    },
    orderById: (s, g) => (id) => {
      const matches = s.orders.filter(g => g.id === id)
      return matches.length === 0 ? null : matches[0]
    },
    catalogById: (s, g) => (id) => {
      // Underscore _id here
      const matches = s.catalogs.filter(g => g._id === id)
      return matches.length === 0 ? null : matches[0]
    },
  },
  mutations: {
    setCurrentGallery (state, gallery) {
      state.currentGallery = gallery
    },
    initGalleries (state) {
      state.galleries = generateTestGalleries(20)
    },
  },
})

export default store
