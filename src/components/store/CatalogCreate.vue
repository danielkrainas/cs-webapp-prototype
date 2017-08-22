<template>
  <sheet-modal>
    <div class="sheet-modal-content-inner-wrapper">
      <h1>Create Catalog</h1>
      <simple-input label="Catalog Name"></simple-input>
    </div>
  </sheet-modal>
</template>

<script>
import SheetModal from '../common/SheetModal.vue'
import SimpleInput from '../common/SimpleInput.vue'
export default {
  components: {
    SimpleInput,
    SheetModal,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.sheet-modal-content-inner-wrapper {
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
</style>
