<template>
  <svg :width="props.width" :height="props.height" :viewBox="props.view" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.313486 10.9346C-0.0556546 11.3037 -0.0732327 11.9629 0.322275 12.3408C0.700205 12.7363 1.36817 12.7188 1.73731 12.3496L6.00001 8.08691L10.2627 12.3496C10.6406 12.7275 11.291 12.7363 11.669 12.3408C12.0645 11.9629 12.0557 11.3037 11.6777 10.9258L7.41505 6.66309L11.6777 2.40918C12.0557 2.02246 12.0645 1.37207 11.669 0.994141C11.291 0.598633 10.6406 0.607422 10.2627 0.985352L6.00001 5.24805L1.73731 0.985352C1.36817 0.616211 0.700205 0.598633 0.322275 0.994141C-0.0732327 1.37207 -0.0556546 2.03125 0.313486 2.40039L4.57618 6.66309L0.313486 10.9346Z" fill="white"/>
  </svg>
</template>

<script setup>

const props = defineProps({
  width: {
    type: [String, Number],
    default: 12
  },
  height: {
    type: [String, Number],
    default: 13
  },
  view: {
    type: String,
    default: '0 0 12 13'
  },
})


</script>

<style scoped>

</style>
