<template>
  <section class="section"
           :class="[props.class]">
    <div class="section-background">
      <img src="@/assets/images/burger.webp" alt="">
    </div>
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
  position: relative;

  &-background {
    height: 100vh;

    img {
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(5px);
    }
  }

  &-title {
    width: min(500px, 100%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: center;
    letter-spacing: 5px;

    &__title {
      font-size: 48px;
    }

    &__description {
      font-size: 28px;
    }
  }
}

@media (max-width: 900px) {
  .section {

    &-title {

      &__title {
        font-size: 26px;
      }

      &__description {
        font-size: 16px;
      }
    }
  }
}

</style>
