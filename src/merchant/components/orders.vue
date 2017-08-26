<template>
  <div class="store-orders">
    <div class="orders-list-toolbar toolbar">
      <div class="toolbar-section">
        <simple-search
          placeholder="Search Orders"
          @input="v => updateSearch(v)"></simple-search>
      </div>
    </div>

    <div class="orders-list-content">
      <v-client-table
        :data="tableData"
        :columns="tableColumns"
        :options="tableOptions"
        ref="orderTable"></v-client-table>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      tableColumns: ['orderNumber', 'date', 'customer', 'gallery', 'status', 'total'],
      tableOptions: {
        perPage: 100,
        dateColumns: ['date'],
        headings: {
          orderNumber: 'Order #',
        },
        columnsClasses: {
          orderNumber: 'col-num',
          date: 'col-date',
          customer: 'col-customer',
          gallery: 'col-gallery',
          status: 'col-status',
          total: 'col-total',
        },
        columnsDisplay: {
          orderNumber: 'min_desktop',
          gallery: 'min_tabletL',
          status: 'not_mobile',
        },
      },
    }
  },
  methods: {
    updateSearch (query) {
      this.$refs.orderTable.setFilter(query)
    },
  },
  computed: {
    tableData () {
      return this.$store.state.orders.map((order) => {
        return {
          orderNumber: order.orderNumber,
          date: moment(order.createdDate).format('l'),
          customer: order.address[0].fullName,
          gallery: order.onlineGalleryName,
          status: order.status,
          total: order.total,
        }
      })
    },
  },
}
</script>

<style lang="scss">
.orders-list-content {
  .col-total {
    text-align: right;
  }
}
</style>

<style lang="scss" scoped>
@import 'src/style/colors';

.orders-list-toolbar {
  padding-left: 15px;
}

.orders-list-content {
  padding: 20px;
}

</style>
