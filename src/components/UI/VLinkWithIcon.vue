<template>
  <a :href="props.link">
    <slot name="leftIcon"/>
    <slot/>
    <slot name="rightIcon"/>
  </a>
</template>

<script setup>


const props = defineProps({
  link: {
    type: String,
    default: ''
  }
})

</script>

<style scoped>

</style>
