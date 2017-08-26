import { registerSubRoutes } from '../../shared'

import analyticsOverview from './components/overview.vue'
import analyticsFavorites from './components/favorites.vue'
import analyticsVisitors from './components/visitors.vue'

export default function moduleInit (bootstrap) {
  bootstrap.use(registerRoutes)
}

export function registerRoutes (config, { routes }) {
  registerSubRoutes(routes, '/galleries/:galleryId', {
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
  })
}
