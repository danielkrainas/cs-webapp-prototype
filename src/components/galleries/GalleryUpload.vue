<template>
  <sheet-modal :show="show"
    @ok="confirm"
    @cancel="cancel"
    @didClose="didClose"
    >
    <div class="upload stub">
      <h1>Upload Images</h1>
    </div>
  </sheet-modal>
</template>

<script>
import SheetModal from '../common/SheetModal.vue'

export default {
  props: ['galleryId'],
  components: {
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
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

</style>
