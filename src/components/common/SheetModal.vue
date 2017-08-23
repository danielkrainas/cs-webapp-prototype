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
        v-if="shouldShow"
        class="modal-background"
        @click="doCancel">
      </div>
    </transition>
    <transition
      name="slide-down"
      @before-enter="beforeEnter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @after-leave="afterLeave"
      >
      <div v-if="shouldShow" class="sheet-modal-content">
        <slot></slot>
        <div class="modal-buttons">
          <span class="button" @click="doOK">{{ myOKTitle }}</span>
          <span class="button" @click="doCancel">{{ myCancelTitle }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['show', 'okTitle', 'cancelTitle'],
  data () {
    return {
      mounted: false,
      runningAnimations: 0,
      myOKTitle: this.okTitle || 'OK',
      myCancelTitle: this.cancelTitle || 'Cancel',
    }
  },

  mounted () {
    this.mounted = true

    document.addEventListener('keydown', (e) => {
      if (this.show && e.keyCode === 27) {
        this.doCancel()
      }
    })
  },

  methods: {
    // Don't close directly. Instead, emit cancel / OK events and let the parent
    // decide what to do. The parent may not WANT to close the dialog, i.e.
    // because we need to validate data, or because we want to stay shown until
    // some asynchronous task completes.
    doOK () {
      this.$emit('ok')
    },
    doCancel () {
      this.$emit('cancel')
    },
    beforeLeave () {
      this.runningAnimations++
    },
    afterLeave () {
      this.runningAnimations--
      if (this.runningAnimations <= 0 && !this.show) {
        this.$emit('didClose')
      }
    },
    beforeEnter () {
      this.runningAnimations++
    },
    afterEnter () {
      this.runningAnimations--
      if (this.runningAnimations <= 0 && this.show) {
        this.$emit('didShow')
      }
    },
  },
  computed: {
    shouldShow () {
      return this.show && this.mounted
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

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
