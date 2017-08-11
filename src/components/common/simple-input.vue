<template>
  <div class="simple-input top">
    <label v-if="this.label">{{ this.label }}</label>
    <input name="gallery-url" :placeholder="myPlaceholder"></input>
  </div>
</template>

<script>
export default {
  name: 'simple-input',
  props: ['label', 'placeholder'],
  data () {
    return {
      myLabel: this.label,
      myPlaceholder: this.placeholder,
    }
  },
}
</script>

<style lang="scss" scoped>
.simple-input {
  display: flex;

  input {
    height: 40px;
    font-size: 14px;
    padding: 10px;
    width: 100%;
    flex-grow: 1;
  }
}
</style>
