import { registerRoute } from '../shared'
import { generateTestGalleries } from './mock'

import modAnalytics from './analytics'

import GalleriesComponent from './components/gallery.vue'
import GalleryListComponent from './components/gallery-list.vue'
import ViewGalleryComponent from './components/gallery-single.vue'
import CreateGalleryComponent from './components/gallery-create.vue'
import EditGallerySettingsComponent from './components/gallery-settings.vue'
import ShareGalleryComponent from './components/gallery-share.vue'

export default function moduleInit (bootstrap) {
  bootstrap.use(registerRoutes)
  bootstrap.use(configureStore)
  modAnalytics(bootstrap)
}

export function configureStore (config, { storeConfig }) {
  Object.assign(storeConfig.state, {
    galleries: [],
  })

  Object.assign(storeConfig.getters, {
    /* Fetch one gallery by ID */
    galleryById: (s, g) => (id) => {
      const matches = s.galleries.filter(g => g.id === id)
      return matches.length === 0 ? null : matches[0]
    },
  })

  Object.assign(storeConfig.mutations, {
    setCurrentGallery (state, gallery) {
      state.currentGallery = gallery
    },

    initGalleries (state) {
      state.galleries = generateTestGalleries(20)
    },
  })
}

export function registerRoutes (config, { routes }) {
  registerRoute(routes, {
    path: '/galleries',
    components: { default: GalleriesComponent },
    children: [{
      path: '',
      name: 'galleries',
      redirect: { name: 'galleryList' },
    }, {
      path: 'list',
      name: 'galleryList',
      components: { galleryContent: GalleryListComponent },
    }, {
      path: 'create',
      name: 'galleryCreate',
      components: { galleryContent: CreateGalleryComponent },
    }, {
      path: ':galleryId',
      components: { galleryContent: ViewGalleryComponent },
      props: { galleryContent: true },
      children: [{
        path: 'settings',
        name: 'gallerySettings',
        components: { galleryDetails: EditGallerySettingsComponent },
        props: { galleryDetails: true },
      }, {
        path: 'share',
        name: 'galleryShare',
        components: { galleryDetails: ShareGalleryComponent },
        props: { galleryDetails: true },
      }],
    }],
  })

  console.info('routes ', routes)
}
