<template>
  <sheet-modal>
    <div class="create-catalog">
      <h1>Create Catalog</h1>
      <simple-input label="Catalog Name"></simple-input>
      <checkbox
        name="color-correction"
        label="Add Color Correction"
        >
      </checkbox>
    </div>
  </sheet-modal>
</template>

<script>
import SheetModal from '../common/SheetModal.vue'
import SimpleInput from '../common/SimpleInput.vue'
import Checkbox from '../common/Checkbox.vue'
export default {
  components: {
    Checkbox,
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
</style>
