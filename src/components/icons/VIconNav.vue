<template>
  <div class="burgerIconWrapper" :class="props.active ? 'active' : ''">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>

<script setup>

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  }
})

</script>

<style lang="scss" scoped>

.burgerIconWrapper {
  position: relative;
  width: 24px;
  height: 24px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: 1px transparent solid;

  .line {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: $white;
    border-radius: 4px;
    margin: 0;
    transition: .5s ease, opacity .2s ease;
  }
  .line:nth-child(1) {
    top: 4px;
  }
  .line:nth-child(2) {
    top: 50%;
    left: 0;
  }
  .line:nth-child(3) {
    bottom: 2px;
  }

  &.active {

    .line:nth-child(1) {
      transform: rotateZ(45deg) translate(5px, 6px);
    }
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(3) {
      transform: rotateZ(-45deg) translate(5px, -6px);
    }
  }
}

</style>
