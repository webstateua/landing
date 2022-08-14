<template>
  <section class="section"
           :class="[props.class]">
    <div class="section-title">
      <div class="section-title__title">
        <slot name="title"/>
      </div>
      <div class="section-title__description">
        <slot name="description"/>
      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

</script>

<style lang="scss" scoped>

.section {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 200px 20%;
  background: url("@/assets/images/burger.webp") no-repeat 50% 0/cover;

  .section-title {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;

    &__title {
      font-size: 28px;
    }

    &__description {
      font-size: 18px;
    }
  }
}

</style>
