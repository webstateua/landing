<template>
  <header>
    <div class="container">
      <div class="header">
        HEADER
      </div>
    </div>
  </header>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  position: {
    type: String,
    default: ''
  }
})

const openedModal = ref(false)


const connectWallet = () => {
  console.log('wwww')
}

</script>

<style lang="scss">

header {

  .header {
    display: flex;
  }
}

</style>
