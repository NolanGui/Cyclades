<template>
  <button
    class="custom-btn"
    :class="{ disabled: isDisabled }"
    @click="onClick"
    :disabled="isDisabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
.custom-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.custom-btn.disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
