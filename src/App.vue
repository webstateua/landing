<template>
  <VHeader :position="position"/>
  <RouterView />
  <VFooter/>
</template>

<script setup>
import VHeader from '@/components/header/VHeader.vue'
import VFooter from '@/components/VFooter.vue'
import {onMounted, ref} from "vue";


const position = ref('fixed')

onMounted(() => {
  document.addEventListener('scroll', scroll)
})

const scroll = (e) => {
  const top = e.target.documentElement.scrollTop
  top > 100 ? position.value = '': position.value = 'fixed'
}

</script>

<style scoped>

</style>
