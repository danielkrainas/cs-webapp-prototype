import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentGallery: {
      name: '',
      id: '',
    },
  },
  mutations: {
    setCurrentGallery (state, gallery) {
      state.currentGallery = gallery
    },
  },
})

export default store
