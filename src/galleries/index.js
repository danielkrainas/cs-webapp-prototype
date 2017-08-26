import { registerRoute } from '../shared'
import { generateTestGalleries } from './mock'

import modAnalytics from './analytics'

import GalleriesComponent from './components/gallery.vue'
import GalleryListComponent from './components/gallery-list.vue'
import SingleGalleryComponent from './components/gallery-single.vue'
import CreateGalleryComponent from './components/gallery-create.vue'
import EditGallerySettingsComponent from './components/gallery-settings.vue'
import ShareGalleryComponent from './components/gallery-share.vue'
import GalleryImagesComponent from './components/gallery-images.vue'
import GalleryImagesGridComponent from './components/gallery-images-grid.vue'

import GalleryUploadComponent from './components/gallery-upload.vue'
import GalleryDownloadComponent from './components/gallery-download.vue'

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
      components: { galleryContent: SingleGalleryComponent },
      props: { galleryContent: true },
      children: [{
        path: '',
        name: 'gallerySingle',
        redirect: { name: 'galleryImages' },
      }, {
        path: 'images',
        redirect: { name: 'galleryImages' },
        components: { galleryDetails: GalleryImagesComponent },
        children: [{
          path: '',
          name: 'galleryImages',
          components: { galleryImagesContent: GalleryImagesGridComponent },
          props: { galleryImagesContent: true },
        }, {
          path: ':folderId',
          name: 'folderImages',
          components: { galleryImagesContent: GalleryImagesGridComponent },
          props: { galleryImagesContent: true },
        }, {
          path: 'upload',
          name: 'galleryUpload',
          components: {
            galleryImagesContent: GalleryImagesGridComponent,
            galleryImagesModal: GalleryUploadComponent,
          },
          props: {
            galleryImagesContent: true,
            galleryContent: true,
          },
        }, {
          path: 'download',
          name: 'galleryDownload',
          components: {
            galleryImagesContent: GalleryImagesGridComponent,
            galleryImagesModal: GalleryDownloadComponent,
          },
          props: {
            galleryImagesContent: true,
            galleryContent: true,
          },
        }],
      }],
    }, {
      path: ':galleryId',
      name: 'gallerySingle',
      components: { galleryContent: SingleGalleryComponent },
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
