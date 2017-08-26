import { registerRoute } from '../shared'
import HelpComponent from './components/help.vue'

export default function moduleInit (bootstrap) {
  bootstrap.use(registerRoutes)
}

export function registerRoutes (config, { routes }) {
  registerRoute(routes, {
    path: '/help',
    name: 'help',
    component: HelpComponent,
  })
}
