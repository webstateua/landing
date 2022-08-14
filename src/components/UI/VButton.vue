<template>
  <button class="btn"
          :class="[props.primary ? 'primary' : props.secondary ? 'secondary' : '', props.customClass]">
    <slot name="leftIcon"/>
    <slot></slot>
    <slot name="rightIcon"/>
  </button>
</template>

<script setup>

const props = defineProps({
  primary: {
    type: Boolean,
  default: false
  },
  secondary: {
    type: Boolean,
  default: false
  },
  customClass: {
    type: String,
  default: ''
  },
})

</script>

<style lang="scss">

.btn {
  font-family: 'Integral CF', sans-serif;
  font-style: normal;
  min-width: 211px;
  border-radius: 12px;
  height: 45px;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  box-sizing: border-box;
  padding: 13.5px 30px;
  border-style: none;
  cursor: pointer;

  &.yellow {
    background: $yellow;
    color: $black;
  }

  &.blue {
    background: $blue;
    color: $white;
  }
}

</style>
