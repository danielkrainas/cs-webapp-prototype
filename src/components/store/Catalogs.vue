<template>
  <div class="store-catalogs">
    <div class="catalogs-toolbar toolbar">
      <div class="catalog-select-container">
        <select class="catalog-select" v-model="currentCatalogIndex">
          <option v-for="(catalog, i) in catalogs" :value="i">
            {{ catalog.displayName }}
          </option>
        </select>
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
      tableColumns: ['name', 'cost', 'markup', 'price', 'delete'],
      tableOptions: {
        perPage: 100,
        columnsClasses: {
          name: 'col-name',
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
          name: product.name,
          cost: product.whcc_cost || 0,
          markup: product.cost - product.whcc_cost || 'N/A',
          price: product.cost || product.totalCost,
          delete: 'X',
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.catalog-list-content {
  padding: 20px;
}

.catalog-select-container {
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.catalog-select {

}

</style>
