<template>
  <div class="claim_label">
    <div class="claim_label__image">
      <slot/>
    </div>
    <div class="claim_label__value">
        <span>
      x
    </span>
      {{ props.value }} NFT
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  value: {
    type: [String, Number],
    default: 1
  }
})

</script>

<style lang="scss">

.claim_label {
  width: min(200px, 100%);
  box-sizing: border-box;
  padding: 10px 17px;
  background: rgba(16, 21, 32, 0.56);
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: 'PT Mono', sans-serif;

  &__image {

    img {
      max-width: 36px;
      height: auto;
      border-radius: 6px;
    }
  }

  &__value {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 24px;
    font-weight: 700;
    line-height: 38px;

    span {
      font-size: 18px;
      font-weight: 400;
      line-height: 29px;
    }
  }
}

</style>
