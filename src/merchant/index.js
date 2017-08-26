import { registerRoute } from 'shared'
import mockOrders from 'shared/store/mock-data/orders'
import mockCatalogs from 'shared/store/mock-data/pricesheets'

import StoreComponent from './components/store.vue'
import OrdersComponent from './components/orders.vue'
import CatalogsComponent from './components/catalogs.vue'
import CreateCatalogComponent from './components/catalog-create.vue'
import EditCatalogComponent from './components/catalog-edit.vue'
import DiscountsComponent from './components/discounts.vue'
import BankingComponent from './components/banking.vue'
import TaxesComponent from './components/taxes.vue'
import ShippingComponent from './components/shipping.vue'

export default function moduleInit (bootstrap) {
  bootstrap.use(registerRoutes)
  bootstrap.use(configureStore)
}

export function configureStore (config, { storeConfig }) {
  Object.assign(storeConfig.state, {
    orders: mockOrders.result,
    catalogs: mockCatalogs.result,
  })

  Object.assign(storeConfig.getters, {
    orderById: (s, g) => (id) => {
      const matches = s.orders.filter(g => g.id === id)
      return matches.length === 0 ? null : matches[0]
    },

    catalogById: (s, g) => (id) => {
      // Underscore _id here
      const matches = s.catalogs.filter(g => g._id === id)
      return matches.length === 0 ? null : matches[0]
    },
  })
}

export function registerRoutes (config, { routes }) {
  registerRoute(routes, {
    path: '/store',
    name: 'store',
    components: { default: StoreComponent },
    children: [{
      path: '',
      redirect: { name: 'storeOrders' },
    }, {
      path: 'orders',
      name: 'storeOrders',
      components: { storeContent: OrdersComponent },
    }, {
      path: 'catalogs',
      components: { storeContent: CatalogsComponent },
      redirect: { name: 'storeCatalogs' },
      children: [{
        path: '',
        name: 'storeCatalogs',
      }, {
        path: ':catalogId',
        name: 'storeCatalogSingle',
      }, {
        path: ':catalogId/edit',
        name: 'storeCatalogEdit',
        components: { storeCatalogModal: EditCatalogComponent },
      }, {
        path: 'create',
        name: 'storeCatalogCreate',
        components: { storeCatalogModal: CreateCatalogComponent },
      }],
    }, {
      path: 'discounts',
      name: 'storeDiscounts',
      components: { storeContent: DiscountsComponent },
    }, {
      path: 'banking',
      name: 'storeBanking',
      components: { storeContent: BankingComponent },
    }, {
      path: 'taxes',
      name: 'storeTaxes',
      components: { storeContent: TaxesComponent },
    }, {
      path: 'shipping',
      name: 'storeShipping',
      components: { storeContent: ShippingComponent },
    }],
  })
}
