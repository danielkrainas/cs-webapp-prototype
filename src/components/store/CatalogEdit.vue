<template>
  <sheet-modal :show="show"
    @ok="confirm"
    @cancel="cancel"
    @didClose="didClose"
    >
    <div class="create-catalog modal-content">
      <h1>Create Catalog</h1>
      <simple-input label="Catalog Name"></simple-input>

      <checkbox label="Make this catalog the default"></checkbox>

      <div v-if="isAutoFulfill" class="lab-fulfill-options">
        <checkbox label="Add Color Correction"></checkbox>
        <checkbox label="Add Premium Packaging"></checkbox>
      </div>
    </div>
  </sheet-modal>
</template>

<script>
import SheetModal from '../common/SheetModal.vue'
import SimpleInput from '../common/SimpleInput.vue'
import Checkbox from '../common/Checkbox.vue'
import Radio from '../common/Radio.vue'

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

</style>
