import { registerRoute } from '../shared'

import AccountComponent from './components/account.vue'
import AmbassadorOverviewComponent from './components/ambassador.vue'
import EmailSettingsComponent from './components/email.vue'
import SubscriptionComponent from './components/plan.vue'
import UserSettingsComponent from './components/user.vue'
import WebSettingsComponent from './components/web.vue'

export default function moduleInit (bootstrap) {
  bootstrap.use(registerRoutes)
}

export function registerRoutes (config, { routes }) {
  registerRoute(routes, {
    path: '/account',
    name: 'account',
    component: AccountComponent,
    children: [{
      path: '',
      redirect: { name: 'accountPlan' },
    }, {
      path: 'ambassador',
      name: 'accountAmbassador',
      components: { accountContent: AmbassadorOverviewComponent },
    }, {
      path: 'email',
      name: 'accountEmail',
      components: { accountContent: EmailSettingsComponent },
    }, {
      path: 'plan',
      name: 'accountPlan',
      components: { accountContent: SubscriptionComponent },
    }, {
      path: 'user',
      name: 'accountUser',
      components: { accountContent: UserSettingsComponent },
    }, {
      path: 'web',
      name: 'accountWeb',
      components: { accountContent: WebSettingsComponent },
    }],
  })
}
