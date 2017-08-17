<template>
  <div class="store-catalogs">
    <div class="catalogs-toolbar toolbar">
      <div class="catalog-tools">
        <router-link :to="{ name: 'storeCatalogCreate'}" class="button">
          <span class="fa fa-plus-square"></span>
          <span>New Catalog</span>
        </router-link>
      </div>
      <div class="catalog-select-container">
        <select class="catalog-select" v-model="currentCatalogIndex">
          <option v-for="(catalog, i) in catalogs" :value="i">
            {{ catalog.displayName }}
          </option>
        </select>
      </div>
      <div class="catalog-tools">
        <router-link :to="{ name: '' }" class="button">
          <span class="fa fa-trash"></span>
          <span>Delete Catalog</span>
        </router-link>
      </div>
    </div>
    <div class="catalog-list-content">
      <v-client-table
        :data="tableData"
        :columns="tableColumns"
        :options="tableOptions"
        ref="orderTable"></v-client-table>
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
      currentCatalogIndex: 0,
    }
  },
  computed: {
    tableData () {
      return this.catalogs[this.currentCatalogIndex].products.map((product) => {
        return {
          product: product.name,
          cost: product.whcc_cost.toFixed(2) || 0,
          markup: (product.cost - product.whcc_cost).toFixed(2) || 'N/A',
          price: (product.cost || product.totalCost).toFixed(2),
          delete: 'X',
        }
      })
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
}

.store-catalogs {
  @include flex-content(column);
}

.catalog-list-content {
  @include flex-content(column);
  overflow-y: scroll;
  padding: 20px;
}

.catalog-select-container {
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.catalog-tools {
  display: flex;
  align-items: stretch;

  .button {
    border-radius: 0;
  }
}

</style>
