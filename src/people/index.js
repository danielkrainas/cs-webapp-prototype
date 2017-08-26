import { registerRoute } from 'shared'

import PeopleComponent from './components/people.vue'

export default function moduleInit (bootstrap) {
  bootstrap.use(registerRoutes)
}

export function registerRoutes (config, { routes }) {
  registerRoute(routes, {
    path: '/people',
    name: 'people',
    component: PeopleComponent,
  })
}
