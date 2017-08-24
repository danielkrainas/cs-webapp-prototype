<template>
  <div class="simple-input">
    <label v-if="myLabel">{{ myLabel }}</label>
    <div class="input-container">
      <span v-if="hasIcon" :class="myIconClass" class="fa input-icon"></span>
      <input :class="hasIcon" :placeholder="myPlaceholder"></input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'simple-input',
  props: ['label', 'placeholder', 'icon'],
  data () {
    return {
      myLabel: this.label,
      myPlaceholder: this.placeholder,
      myIconClass: this.icon ? 'fa-' + this.icon : '',
      hasIcon: this.icon ? 'has-icon' : '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.simple-input {
  margin: 15px 0;
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;
  }

  input {
    height: 35px;
    font-size: 14px;
    padding: 10px;
    width: 100%;
    flex-grow: 1;

    &.has-icon {
      text-indent: 27px;
    }

    &::placeholder,
    &::-webkit-input-placeholder {
      color: $color-placeholder-text;
    }
  }

  .input-container {
    position: relative;
    flex-grow: 1;
    display: flex;
  }

  .input-icon {
    position: absolute;
    top: 10px;
    left: 13px;
    z-index: 10;
    color: $color-accent;
  }

}
</style>
