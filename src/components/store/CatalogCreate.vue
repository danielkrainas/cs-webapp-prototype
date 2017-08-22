<template>
  <div class="sheet-modal-container">
    <transition name="fade">
      <div v-if="showing" class="modal-background"></div>
    </transition>
    <transition name="slide-down">
      <div v-if="showing" class="store-catalog-create">
        <h1>Create Catalog</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showing: false,
    }
  },
  mounted () {
    // Show on mount to trigger animations
    this.showing = true
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

.store-catalog-create {
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
}


</style>
