import config from 'runtime/config'
import App from './app.vue'

import modHome from './home'
import modAccount from './account'
import modGalleries from './galleries'
import modMerchant from './merchant'
import modPeople from './people'
import modHelp from './help'
import modShared, {
  initializeModules,
  makeBootstrapper,
} from './shared'

const bootstrap = makeBootstrapper(config)

initializeModules(bootstrap, [
  modShared,
  modHome,
  modHelp,
  modAccount,
  modGalleries,
  modMerchant,
  modPeople,
])

bootstrap.go(startApp())

/* TODO - these don't belong here... */
require('./style/reset.css')
require('./style/global.scss')
require('./style/tables.scss')
require('./style/animation.scss')

function startApp () {
  return (config, { Vue, store, router }) => {
    // TODO:(dk) leave here?
    // TODO:(dk) actually, do we even need this or just register app component?
    window.app = new Vue({
      store,
      router,
      el: '#app',
      render: h => h(App),
    })
  }
}
