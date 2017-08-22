<template>
  <div class="sheet-modal-container modal">
    <transition
      name="fade"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @after-leave="afterLeave"
      >
      <div
        v-if="show"
        class="modal-background"
        @click="close">
      </div>
    </transition>
    <transition
      name="slide-down"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @after-leave="afterLeave"
      >
      <div v-if="show" class="sheet-modal-content">
        <slot></slot>
        <div class="modal-buttons">
          <span class="button">{{ okButtonTitle }}</span>
          <span class="button">{{ cancelButtonTitle }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['okTitle', 'cancelTitle'],
  data () {
    return {
      show: false,
      runningAnimations: 0,
      okButtonTitle: this.okTitle || 'OK',
      cancelButtonTitle: this.cancelTitle || 'Cancel',
    }
  },

  mounted () {
    // Show on mount to trigger animations
    this.show = true

    document.addEventListener('keydown', (e) => {
      if (this.showing && e.keyCode === 27) {
        this.close()
      }
    })
  },

  methods: {
    close () {
      this.show = false
      this.$emit('willClose')
    },
    beforeLeave () {
      this.runningAnimations++
    },
    afterLeave () {
      this.runningAnimations--
      console.log(this.runningAnimations)
      if (!this.runningAnimations) {
        this.$emit('didClose')
        window.history.back()
      }
    },
    beforeEnter () {
      this.runningAnimations++
      this.$emit('willShow')
    },
    afterEnter () {
      this.runningAnimations--
      if (!this.runningAnimations) {
        this.$emit('didShow')
      }
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

.sheet-modal-content {
  position: absolute;
  width: 100%;
  top: 0;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  background-color: $color-app-bg;
  border-bottom: 1px solid $color-accent;
  z-index: $z-modal;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
}

.modal-buttons {
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    min-width: 80px;
    justify-content: center;
    margin: 0 10px;
  }
}

</style>
