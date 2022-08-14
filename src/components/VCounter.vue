<template>
  <div class="counter">
    <VButton :class="'min_btn'"
             @click="prevValue"
    >
      -
    </VButton>
    <span class="counter__value">
      {{ value }}
    </span>
    <VButton :class="'yellow'"
             @click="nextValue"
    >
      +
    </VButton>
  </div>
</template>

<script setup>

import {defineEmits, ref} from "vue";

const value = ref(1)

const emits = defineEmits(['value'])
const nextValue = () => {
  value.value += 1
  emits('value', value.value)
}
const prevValue = () => {
 if (value.value > 1) {
   value.value -= 1
   emits('value', value.value)
 }
}

</script>

<style lang="scss" scoped>

.counter {
  width: min(205px, 100%);
  padding: 4px;
  box-sizing: border-box;
  background: rgba(16, 21, 32, 0.56);
  border-radius: 12px;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-gap: 40px;
  align-items: center;

  .btn {
    width: 52px;
    height: 52px;
    min-width: unset;
    padding: 0;

    &.min_btn {
      background: rgba(255, 255, 255, 0.06);
      color: $white;
    }
  }

  &__value {

  }
}

</style>
