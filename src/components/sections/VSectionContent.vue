<template>
  <section class="block"
           :class="[props.class, props.revert ? 'revert': '']"
  >
    <div class="block-content">
      <div class="block-content__title">
        <h2 class="block-content__title-text">
          <slot name="title"/>
        </h2>
      </div>
      <div class="block-content__description">
        <p class="block-content__description-text">
          <slot name="description"/>
        </p>
      </div>
      <div class="block-content__buttons">
        <slot name="buttons"/>
      </div>
    </div>
    <div class="block-image">
      <slot name="image"/>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  revert: {
    type: Boolean,
    default: false
  },
})

</script>

<style lang="scss">

.block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  padding: 20px 30px;
  box-sizing: border-box;
  border-radius: 30px;

  .block-content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .block-image {
    max-width: 100%;

    img {
      max-width: 100%;
      width: 100%;
      border-radius: 20px;
    }
  }
}

.revert {
  background: rgba(0, 0, 0, 0.3);
  grid-auto-flow: dense;
  direction: rtl;

  .block-content {

    &__buttons {
      .btn {
        border: 1.5px $white solid;
        background: transparent;

        &:hover {
          background: rgba(145, 138, 138, 0.8);
        }
      }
    }
  }
}

@media (max-width: 900px) {

  .block {
    grid-template-columns: 1fr;
  }

  .revert {
    grid-auto-flow: unset;
    direction: unset;
  }
}

</style>
