<template>
  <div class="store-catalogs">
    <router-view name="storeCatalogModal"></router-view>
    <div class="catalogs-toolbar toolbar">
      <div class="catalog-title-container">
        <span class="fa fa-chevron-down button" @click="toggleNav()"></span>
        <span class="catalog-title__name">{{ currentCatalog.displayName }}</span>
        <span class="catalog-title__type">{{ currentCatalog.fullFilmentOptions }}</span>
      </div>
      <div class="catalog-tools">
        <router-link :to="{ name: 'storeCatalogEdit' }" class="button">
          <span class="fa fa-pencil-square-o"></span>
          <span>Edit Catalog</span>
        </router-link>
      </div>
    </div>

    <div class="catalog-content-container">
      <transition name="slide-left">
        <div v-if="showNav" class="catalog-nav">
          <ol>
            <router-link
              v-for="(catalog, i) in catalogs"
              :to="{ name: 'storeCatalogSingle', params: { catalogId: catalog._id } }"
              @click.native="toggleNav(false)"
              >
              <li class="catalog-nav__item button__rollover">
                <p class="catalog-nav__name">{{ catalog.displayName }}</p>
                <p class="catalog-nav__type">{{ catalog.fullFilmentOptions }}</p>
              </li>
            </router-link>
          </ol>
          <router-link
            :to="{ name: 'storeCatalogCreate'}"
            class="button"
            @click.native="toggleNav(false)">
            <span class="fa fa-plus-square"></span>
            <span>New Catalog</span>
          </router-link>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="showNav"
          class="modal-background"
          @click="toggleNav(false)">
        </div>
      </transition>

      <div class="catalog-contents-list">
        <div class="catalog-header">
        </div>
        <v-client-table
          :data="tableData"
          :columns="tableColumns"
          :options="tableOptions"
          ref="orderTable"></v-client-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableColumns: ['product', 'cost', 'markup', 'price', 'delete'],
      tableOptions: {
        perPage: 100,
        columnsClasses: {
          product: 'col-name',
          cost: 'col-cost',
          markup: 'col-markup',
          price: 'col-price',
          delete: 'col-delete',
        },
      },
      catalogs: this.$store.state.catalogs,
      showNav: true,
    }
  },
  computed: {
    currentCatalog () {
      const catalogId = this.$route.params.catalogId
      if (!catalogId) {
        return this.catalogs[0]
      } else {
        return this.$store.getters.catalogById(catalogId)
      }
    },
    tableData () {
      return this.currentCatalog.products.map((product) => {
        return {
          product: product.name,
          cost: (product.whcc_cost || 0).toFixed(2),
          markup: (product.cost - product.whcc_cost).toFixed(2) || 'N/A',
          price: (product.cost || product.totalCost).toFixed(2),
          delete: 'X',
        }
      })
    },
  },
  methods: {
    toggleNav (val) {
      if (typeof val === 'undefined') {
        this.showNav = !this.showNav
        return
      }
      // only use val to set if the user actually passed true or false
      if (val === true) {
        this.showNav = true
      } else if (val === false) {
        this.showNav = false
      }
    },
    setCatalog (index) {
      this.currentCatalogIndex = index
      this.showNav = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

@mixin flex-content($direction) {
  display: flex;
  flex-direction: $direction;
  flex: 1 1;
  position: relative;
}

.store-catalogs {
  @include flex-content(column);
}

.catalog-content-container {
  @include flex-content(row);
  overflow: hidden;
  position: relative;
}

.catalog-title__name {
  font-size: 18px;
  padding-left: 15px;
}

.catalog-title__type {
  margin-left: 10px;
}

.catalog-nav {
  flex: 0 0 200px;
  width: 300px;
  justify-content: space-between;
  border-right: 1px solid $color-accent;
  position: absolute;
  height: 100%;
  background-color: $color-app-bg;
  z-index: $z-modal - 5;
  box-shadow: $shadow-default;
}

.catalog-nav__item {
  padding: 15px;
  line-height: 20px;
}

.catalog-nav__name {

}

.catalog-nav__type {
  opacity: 0.6;
  font-size: 13px;
}

.catalog-contents-list {
  @include flex-content(column);
  overflow-y: scroll;
  padding: 20px;
}

.catalog-title-container {
  display: flex;
  align-items: center;

  .button {
    height: 100%;
    font-size: 18px;
  }
}

.catalog-tools {
  display: flex;
  align-items: stretch;

  .button {
    border-radius: 0;
  }
}

</style>
