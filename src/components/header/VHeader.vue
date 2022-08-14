<template>
  <header :class="props.position">
    <div class="container">
      <div class="header">
        WebState
        <VHeaderMenu/>
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref} from "vue";
import VHeaderMenu from './VHeaderMenu.vue'

const props = defineProps({
  position: {
    type: String,
    default: ''
  }
})

</script>

<style lang="scss" scoped>

header {
  z-index: 999;
  display: block;
  position: fixed;
  width: 100%;
  background: #000;
  transition: .3s ease-in-out;

  .header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    box-sizing: border-box;
    font-size: 46px;
  }

  &.fixed {
    background: transparent;
  }
}

</style>
