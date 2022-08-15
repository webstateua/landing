<template>
  <div class="carousel_wrapper"
       ref="carousel">
    <div class="slide_wrapper" :id="'slider' + props.sliders.length">
      <div class="slide"
           v-for="slide in props.sliders"
           :key="slide.id"
           :id="slide.id"
           :style="
           `width: ${ slide.id === props.sliders.length ? sliderWidth : sliderWidth }px;
            transform: translateX(-${sliderPosition}px);`"
           >

        <div :style="`width: ${sliderWidth}px;`"
             class="slide_content">
          <div class="img_wrapper">
            <div class="img_wrapper__prevBtn" @click="prevSlide(slide.id)">
              <img src="@/assets/images/icons/arrowLeft.png" alt="arrow">
            </div>
            <img :src="slide.img"
                 class="slider_image"
                 alt="slider image">
            <div class="img_wrapper__nextBtn" @click="nextSlide(slide.id)">
              <img src="@/assets/images/icons/arrowRight.png" alt="arrow">
            </div>
          </div>
          <div class="slider_content">
            <h4 class="content_title">
              {{ slide.title }}
            </h4>
            <p class="content_description">
              {{ slide.description }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";


const sliderPosition = ref(0)
const   selectedSlide = ref(1)
const  sliderWidth = ref(525)
const carousel = ref(null)

const props = defineProps({
  sliders: {
    type: Array,
    default: () => []
  }
})


onMounted(() => {
  getSliderWidth()
})

const getSliderWidth = () => {
  sliderWidth.value = carousel.value.clientWidth;
}
const nextSlide = (id) => {
  if (id < props.sliders.length) {
    selectedSlide.value = id
    sliderPosition.value += (sliderWidth.value) + 18
  }if (id === props.sliders.length) {
    toStartSlide(id)
  }
}
const prevSlide = (id) => {
  selectedSlide.value = id
  sliderPosition.value -= (sliderWidth.value) + 18
}
const toStartSlide = (id) => {
  selectedSlide.value = id
  sliderPosition.value -= ((sliderWidth.value) + 18) * props.sliders.length
}


</script>

<style lang="scss" scoped>

.carousel_wrapper {
  max-width: 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .slide_wrapper {
    width: fit-content;
    height: 100%;
    display: flex;
    gap: 18px;

    .slide {
      transition: all .6s ease-in-out;

      .slide_content {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr max-content;
        grid-row-gap: 27px;
        transition: all 1s ease-in-out;

        .img_wrapper {
          max-width: 100%;
          width: 100%;
          box-sizing: border-box;
          border-radius: 17px;
          overflow: hidden;
          position: relative;

          &__prevBtn, &__nextBtn {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.5);
            z-index: 1;
            transition: .6s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 20px;
            }

            &:hover {
              background: rgba(255, 255, 255, 1);
            }
          }

          &__prevBtn {
            left: 0;
            transform: translate(0, -50%);
            border-bottom-right-radius: 24px;
            -webkit-border-top-right-radius: 24px;
          }

          &__nextBtn {
            right: 0;
            transform: translate(0, -50%);
            border-bottom-left-radius: 24px;
            border-top-left-radius: 24px;
          }

          .slider_image {
            max-width: 100%;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .slider_content {
          max-width: 100%;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          grid-auto-rows: max-content;
          grid-row-gap: 10px;

          .content_title {
            width: 100%;
            font-family: 'Manrope', sans-serif;
            font-size: 18px;
            font-weight: 600;
            line-height: 24px;
            margin: 0;
          }

          .content_description {
            margin: 0;
            width: 100%;
            font-size: 14px;
            font-weight: 500;
            line-height: 19px;
            color: $blue;
          }
        }
      }
    }
  }
}

</style>
