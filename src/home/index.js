import { registerRoute } from '../shared'
import Home from './components/home.vue'

export default function moduleInit (bootstrap) {
  bootstrap.use(registerRoutes)
}

export function registerRoutes (config, { routes }) {
  registerRoute(routes, {
    path: '/',
    name: 'home',
    component: Home,
  })
}
