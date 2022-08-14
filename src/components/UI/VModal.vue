<template>
  <div v-if="props.modalOpened" class="modal">
    <div class="modal__content">
      <div @click="$emit('close')"
           class="modal__content__close_icon"
      >
        <VIconClose/>
      </div>
      <div class="modal__content__title">
        <slot name="title"/>
      </div>
      <div class="modal__content__description">
        <slot name="description"/>
      </div>
      <div class="modal__content__button">
        <slot name="button"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import VIconClose from '@/components/icons/VIconClose.vue'

name: 'VModal'

const props = defineProps({
  modalOpened: {
    type: Boolean,
    default: false
  }
})


</script>

<style lang="scss" scoped>

.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(16, 21, 32, 0.63);
  backdrop-filter: blur(4px);

  &__content {
    position: relative;
    width: min(395px, 100%);
    min-height: 520px;
    padding: 25px;
    box-sizing: border-box;
    background: $dark_blue_bg;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 8px;

    &__close_icon {
      position: absolute;
      top: 30px;
      right: 32px;
      cursor: pointer;

      &:hover {
        svg {
          transform: rotateZ(180deg);
          transition: .3s linear;
        }
      }
    }

    &__title {
      font-size: 24px;
      font-weight: 400;
      line-height: 39px;
    }

    &__description {
      font-family: 'PT Mono', sans-serif;
      font-size: 15px;
      font-weight: 400;
      line-height: 24px;
    }

    &__button {
      margin-top: 16px;

    }
  }
}

</style>
