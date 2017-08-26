import Vue from 'vue'
import VueRouter from 'vue-router'
import ToggleButton from 'vue-js-toggle-button'
import { ClientTable } from 'vue-tables-2'

import CheckboxComponent from './components/checkbox.vue'
import SimpleInputComponent from './components/simple-input.vue'
import MenuBarComponent from './components/menubar.vue'
import SheetModalComponent from './components/sheet-modal.vue'
import AppNavComponent from './components/appnav.vue'
import RadioComponent from './components/radio.vue'
import SimpleSearchComponent from './components/simple-search.vue'

import Store from './store'
import { routesToRouterConfig } from './util'

export * from './util'

export default function moduleInit (bootstrap) {
  bootstrap.use(genericService('routes', {}))
  bootstrap.use(genericService('Vue', Vue))
  bootstrap.use(registerStoreConfig())
  bootstrap.use(registerThirdPartyVueComponents())
  bootstrap.use(registerSharedComponents(ToggleButton))

  // NOTE:(dk) needs to be lower priority so modules can modify store configuration
  bootstrap.use(storeService(Store), { priority: -1000 })

  // NOTE:(dk) super low priority: router needs to be created after modules add their routes
  bootstrap.use(routingService(VueRouter), { priority: -1000 })
}

export function registerStoreConfig () {
  return (config, services, register) => {
    register('storeConfig', {
      state: {},
      getters: {},
      mutations: {},
    })
  }
}

export function routingService (Router) {
  return (config, { Vue, routes }, register) => {
    const routerConfig = routesToRouterConfig(routes)
    register('router', new Router(routerConfig))
  }
}

export function registerThirdPartyVueComponents () {
  return (config, { Vue }) => {
    Vue.use(VueRouter)
    Vue.use(ClientTable)
    Vue.use(ToggleButton)
  }
}

export function registerSharedComponents () {
  return (config, { Vue }) => {
    Vue.component('simple-input', SimpleInputComponent)
    Vue.component('appnav', AppNavComponent)
    Vue.component('menubar', MenuBarComponent)
    Vue.component('sheet-modal', SheetModalComponent)
    Vue.component('checkbox', CheckboxComponent)
    Vue.component('radio', RadioComponent)
    Vue.component('simple-search', SimpleSearchComponent)
  }
}

export function storeService (Store) {
  return (config, services, register) => {
    register('store', Store(services))
  }
}

export function genericService (name, svc) {
  return (config, services, register) => {
    register(name, svc)
  }
}
