import Vuex from 'vuex'

export default function ({ Vue, storeConfig }) {
  Vue.use(Vuex)
  return new Vuex.Store(storeConfig)
}
