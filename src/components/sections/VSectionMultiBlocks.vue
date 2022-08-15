<template>
  <div class="multi-blocks-wrapper"
       :class="[props.class]"
  >
    <div class="multi-blocks-wrapper__title">
      <h3 class="multi-blocks-wrapper__title-text">
        <slot name="title"/>
      </h3>
    </div>
    <div class="multi-blocks-wrapper__contents">
      <div class="multi-blocks-wrapper__contents__content"
           v-for="content in contents"
           :key="content.id"
      >
        <div class="multi-blocks-wrapper__contents__content-image">
          <img :src="content.img" alt="block icon">
        </div>
        <div class="multi-blocks-wrapper__contents__content-title">
          {{ content.title }}
        </div>
        <div class="multi-blocks-wrapper__contents__content-description">
          {{ content.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  contents: {
    type: Array,
    default: () => []
  }
})

</script>

<style lang="scss" scoped>

.multi-blocks-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
  padding: 50px 0;

  &__title {

    &-text {
      margin: 0;
      font-size: 34px;
    }
  }

  &__contents {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
      box-sizing: border-box;
      padding: 15px;
      border-radius: 24px;
      background: rgba(255, 255, 255, .05);

      &-title {
        font-size: 22px;
      }

      &-description {
        font-size: 18px;
      }

      &-image {
        box-sizing: border-box;
        padding: 50px 0;

       img {
         width: 100px;
         border-radius: 40%;
       }
      }
    }
  }
}

</style>
