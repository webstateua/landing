<template>
  <button class="btn"
          :class="props.class"
  >
    <slot name="leftIcon"/>
    <slot></slot>
    <slot name="rightIcon"/>
  </button>
</template>

<script setup>

const props = defineProps({
  class: {
    type: String,
  default: ''
  },
})

</script>

<style lang="scss">

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Integral CF', sans-serif;
  font-style: normal;
  min-width: 211px;
  border-radius: 24px;
  height: 45px;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  box-sizing: border-box;
  padding: 13.5px 30px;
  border-style: none;
  cursor: pointer;
  background: #000;
  color: #FFFFFF;
  transition: .6s ease-in-out;

  &:hover {
    background: rgba(145, 138, 138, 0.8);
  }
}

</style>
