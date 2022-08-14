<template>
  <div class="custom_input_wrapper">
    <p v-if="title" class="input_title">
      {{ title }}
    </p>
    <div class="input_wrapper">
      <input :type="type"
             :class="inputClass"
             :placeholder="placeholder"
             @input="checkInputVal"
             class="custom_input">
      <div class="input_icon">
        <slot name="icon"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "VInput",
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    inputClass: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
  },
  methods: {
    checkInputVal($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>

<style lang="scss">


.custom_input_wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-row-gap: 10px;

  .input_title {
    width: 100%;
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: #555555;
  }

  .input_wrapper {
    max-width: 100%;
    width: 100%;
    height: fit-content;
    position: relative;

    .custom_input {
      background-color: white;
      max-width: 100%;
      width: 100%;
      height: 60px;
      box-sizing: border-box;
      padding: 22px 24px;
      border-radius: 8px;
      outline: none;
      cursor: text;
      box-shadow: none;
      border: none;
      font-family: Inter, sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 16px;
      color: #555555;
    }

    .input_icon {
      position: absolute;
    }
  }
}
</style>
