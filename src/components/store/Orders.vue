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
    <div class="note">
      <p>We can hook up the search box in the toolbar to the table's filter via
         the table's setFilter(query) method. Then we should just hide the
         provided search box I think.</p>
      <p>The table can and should be refactored into a component wrapper that we
         can reuse throughout.</p>
    </div>
  </div>
</template>

<script>
import simpleSearch from '../common/SimpleSearch.vue'
import moment from 'moment'

export default {
  components: {
    simpleSearch,
  },
  data () {
    return {
      tableOptions: {
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
    tableColumns () {
      return ['orderNumber', 'date', 'customer', 'gallery', 'status', 'total']
    },
  },
}
</script>

<style lang="scss">
@import 'src/style/colors';

// sass-lint:disable-block class-name-format
.VueTables--client {
  display: flex;
  flex-direction: column;

  // Somewhat of a hack to hide the table's default search box. The CSS provided
  // by the component only adds the class "row", which is pretty useless.
  & > .row:first-child { // sass-lint:disable-line force-pseudo-nesting no-combinators max-line-length
    display: none;
  }

  .table-responsive {
    display: flex;
    flex-direction: column;
  }

  .VueTables__table {
    width: 100%;
    margin: 15px 0;

    tr {
      height: 30px;
    }

    th {
      text-align: left;

      .col-total {
        text-align: right;
      }
    }

    td {
      padding: 8px 0;
    }

    thead {
      border-bottom: 1px solid $color-accent;
    }
  }
}

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

.order-header-row,
.order-row {
  display: flex;
  border-bottom: 1px solid $color-accent;
  height: 30px;
  align-items: center;
  justify-content: space-between;
}
</style>
