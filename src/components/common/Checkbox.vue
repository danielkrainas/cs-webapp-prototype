<template>
  <div class="checkbox">
    <input type="checkbox" class="checkbox-input"></input>
    <label v-if="hasLabel">{{ myLabel }}</label>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: ['label', 'value', 'name'],
  data () {
    return {
      myName: this.name,
      myLabel: this.label,
      hasLabel: this.label && this.label.length > 0,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.checkbox {
  margin: 15px 0;
  display: flex;
  align-items: center;

  label {
    margin-left: 10px;
  }

  .checkbox-input {
    height: 14px;
    width: 14px;
  }

}
</style>
