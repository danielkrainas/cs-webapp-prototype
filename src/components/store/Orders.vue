<template>
  <div class="store-orders">
    <div class="orders-list-toolbar toolbar">
      <div class="toolbar-section">
        <simple-search placeholder="Search Orders"></simple-search>
      </div>
    </div>

    <div class="orders-list-content">
      <table class="order-table">
        <tr class="order-header-row">
          <th class="col-num">Order #</th>
          <th class="col-date">Date</th>
          <th class="col-customer">Customer</th>
          <th class="col-gallery">Gallery</th>
          <th class="col-status">Status</th>
          <th class="col-total">Total</th>
        </tr>
        <tr v-for="order in orders" class="order-row">
          <td class="col-num">{{ order.orderNumber }}</td>
          <td class="col-date">{{ formatDate(order.createdDate) }}</td>
          <td class="col-customer">{{ order.address[0].fullName }}</td>
          <td class="col-gallery">{{ order.onlineGalleryName }}</td>
          <td class="col-status">{{ order.status }}</td>
          <td class="col-total">{{ order.total }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import simpleSearch from '../common/SimpleSearch.vue'
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  components: { simpleSearch },
  data () {
    return {}
  },
  methods: {
    formatDate (isoDateString) {
      return moment(isoDateString).format('l')
    },
  },
  computed: mapState([ 'orders' ]),
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.orders-list-toolbar {
  padding-left: 15px;
}

.orders-list-content {
  padding: 20px;
}

.order-table {
  width: 100%;
}

td {
  border: 1px solid #fff;
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
