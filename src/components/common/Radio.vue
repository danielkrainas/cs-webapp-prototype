<template>
  <div class="radio">
    <div v-if="hasLabel" class="radio-label">
      {{ this.label }}
    </div>
    <div class="radio-options">
      <div v-for="option in options" class="radio-option">
        <input
          type="radio"
          name="foo"
          class="radio-input"
          :value="option.value"
          v-model="selectedItem"
          @click="didSelect(option.value)"
          >
        <span class="radio-label">{{ option.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radio',
  props: ['options', 'label', 'initialValue'],
  data () {
    return {
      selectedItem: this.initialValue,
    }
  },
  methods: {
    didSelect (value) {
      this.selectedItem = value
      this.$emit('change', value)
    },
  },
  computed: {
    hasLabel () {
      return this.label && this.label.length > 0
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/colors';

.radio {
  display: flex;
}

.radio-label {
  margin-right: 15px;
}

.radio-options {
  display: flex;
  flex-direction: column;
}

.radio-option {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.radio-input {
  margin: 0 10px 0 0;
  height: 14px;
  width: 14px;
}
</style>
