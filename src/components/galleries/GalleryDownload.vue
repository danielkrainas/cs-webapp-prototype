<template>
  <sheet-modal :show="show"
    @ok="confirm"
    @cancel="cancel"
    @didClose="didClose"
    >
    <div class="download modal-content">
      <section>
        <h1>Download Images</h1>
        <checkbox
          v-for="folder in folders"
          :label="folder.name"
          >
        </checkbox>
      </section>
    </div>
  </sheet-modal>
</template>

<script>
import Checkbox from '../common/Checkbox.vue'
import SheetModal from '../common/SheetModal.vue'

export default {
  props: ['galleryId'],
  components: {
    Checkbox,
    SheetModal,
  },
  data () {
    return {
      show: true,
      folders: [{
        name: 'A Folder',
        id: '1',
      }, {
        name: 'Another folder',
        id: '2',
      }, {
        name: 'Yet another folder',
        id: '3',
      }, {
        name: 'And another...',
        id: '4',
      }, {
        name: 'Last one!',
        id: '5',
      }],
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
