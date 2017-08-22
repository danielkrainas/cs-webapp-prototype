<template>
  <div class="sheet-modal-container modal">
    <transition
      name="fade"
      @after-leave="afterLeave"
      @before-enter="beforeEnter"
      >
      <div
        v-if="showing"
        class="modal-background"
        @click="close">
      </div>
    </transition>
    <transition
      name="slide-down"
      @after-leave="afterLeave"
      @before-enter="beforeEnter"
      >
      <div v-if="showing" class="sheet-modal-content store-catalog-create">
        <div class="sheet-modal-content-inner-wrapper">
          <h1>Create Catalog</h1>
          <simple-input label="Catalog Name"></simple-input>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SimpleInput from '../common/SimpleInput.vue'
export default {
  components: {
    SimpleInput,
  },
  data () {
    return {
      showing: false,
      runningAnimations: 0,
    }
  },
  mounted () {
    // Show on mount to trigger animations
    this.showing = true

    document.addEventListener('keydown', (e) => {
      if (this.showing && e.keyCode === 27) {
        this.close()
      }
    })
  },
  methods: {
    close () {
      this.showing = false
    },
    afterLeave () {
      this.runningAnimations--
      if (!this.runningAnimations) {
        window.history.back()
      }
    },
    beforeEnter () {
      this.runningAnimations++
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.modal-background {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: $z-modal-bg;
  background-color: $color-modal-bg;
}

.sheet-modal-container {
  position: absolute;
  height: 100%;
  width: 100%;
}

.sheet-modal-content-inner-wrapper {
  width: 100%;
  max-width: 500px;
}

.sheet-modal-content {
  position: absolute;
  width: 100%;
  top: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $color-app-bg;
  border-bottom: 1px solid $color-accent;
  z-index: $z-modal;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    font-size: 22px;
    border-bottom: 1px solid $color-accent;
    margin-bottom: 10px;
    padding-bottom: 15px;
    width: 100%;
  }
}

</style>
