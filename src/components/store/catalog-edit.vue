<template>
  <sheet-modal :show="show"
    @ok="confirm"
    @cancel="cancel"
    @didClose="didClose"
    >
    <div class="edit-catalog modal-content">
      <section>
        <h1>Edit Catalog</h1>
        <simple-input label="Catalog Name"></simple-input>

        <checkbox label="Make this catalog the default"></checkbox>

        <div v-if="isAutoFulfill" class="lab-fulfill-options">
          <checkbox label="Add Color Correction"></checkbox>
          <checkbox label="Add Premium Packaging"></checkbox>
        </div>

      </section>
      <router-link :to="{ name: '' }" class="button">
        <span class="fa fa-trash"></span>
        <span>Delete Catalog</span>
      </router-link>
    </div>
  </sheet-modal>
</template>

<script>
import SheetModal from '../common/sheet-modal.vue'
import SimpleInput from '../common/simple-input.vue'
import Checkbox from '../common/checkbox.vue'

export default {
  components: {
    Checkbox,
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
      return this.catalogType === 'Lab Fulfillment' || true
    },
    isCustoFulfill () {
      return this.catalogType === 'Self Fulfillment'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

</style>
