<template>
  <sheet-modal :show="show"
    @ok="confirm"
    @cancel="cancel"
    @didClose="didClose"
    >
    <div class="create-catalog">
      <h1>Create Catalog</h1>
      <simple-input label="Catalog Name"></simple-input>

      <radio
        label="Catalog Type"
        :options="typeOptions"
        @change="changeCatalogType"
        >
      </radio>

      <checkbox label="Make this catalog the default"></checkbox>

      <div v-if="isAutoFulfill" class="lab-fulfill-options">
        <checkbox label="Add Color Correction"></checkbox>
        <checkbox label="Add Premium Packaging"></checkbox>
      </div>
    </div>
  </sheet-modal>
</template>

<script>
import SheetModal from '../common/sheet-modal.vue'
import SimpleInput from '../common/simple-input.vue'
import Checkbox from '../common/checkbox.vue'
import Radio from '../common/radio.vue'

export default {
  components: {
    Checkbox,
    Radio,
    SimpleInput,
    SheetModal,
  },
  data () {
    return {
      show: true,
      // TODO: replace Lab Fulfill and Self Fulfill with an enum from the model
      typeOptions: [{
        name: 'Auto Fulfillment',
        value: 'Lab Fulfillment',
      }, {
        name: 'Custom Fulfillment',
        value: 'Self Fulfillment',
      }],
      catalogType: 'Lab Fulfillment',
    }
  },
  methods: {
    confirm () {
      this.show = false
    },
    cancel () {
      this.show = false
    },
    didClose () {
      window.history.back()
    },
    changeCatalogType (value) {
      this.catalogType = value
    },
  },
  computed: {
    isAutoFulfill () {
      return this.catalogType === 'Lab Fulfillment'
    },
    isCustoFulfill () {
      return this.catalogType === 'Self Fulfillment'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.create-catalog {
  margin: 15px auto;
  width: 100%;
  max-width: 500px;
}

h1 {
  text-align: center;
  font-size: 22px;
  border-bottom: 1px solid $color-accent;
  margin-bottom: 10px;
  padding-bottom: 15px;
  width: 100%;
}

h2 {
  font-size: 18px;
  border-bottom: 1px solid $color-accent;
  margin-bottom: 10px;
  padding-bottom: 15px;
  width: 100%;
}

</style>
