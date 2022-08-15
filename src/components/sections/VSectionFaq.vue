<template>
  <section class="section-faq-wrapper">
    <div class="container">
      <div class="faq">
        <div class="faq-title">
          <h5>
            <slot name="title"/>
          </h5>
        </div>
        <div class="faq-question">
          <div class="question-block"
               v-for="block in blocks"
               :key="block.id"
               @click="open(block.id)"
          >
            <div class="question-block__question"
                 :class="openBlock === block.id ? 'opened': ''"
            >
              {{ block.question }}
            </div>
            <Transition>
              <div v-if="openBlock === block.id"
                   :class="openBlock === block.id ? 'opened': ''"
                   class="question-block__answer"
              >
                {{ block.answer }}
              </div>
            </Transition>
            <div class="question-block__icon"
                 :class="openBlock === block.id ? 'opened': ''"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import {ref} from "vue";

const props = defineProps({
  blocks: {
    type: Array,
    default: () => []
  }
})

const openBlock = ref(null)

const open = (id) => {
  openBlock.value === id ? openBlock.value = null : openBlock.value = id;
}

</script>

<style lang="scss" scoped>

.section-faq-wrapper {
  width: 100%;
  background: url("@/assets/images/faq/pngegg.png") repeat center/100px;
  border-radius: 24px;

  .faq {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 0;
    box-sizing: border-box;

    &-title {
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;

      h5 {
        font-size: 44px;
        font-weight: 900;
        margin: 0;
        letter-spacing: 5px;
      }
    }

    &-question {
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .question-block {
        background: $white;
        color: $black;
        padding: 10px 15px;
        border-radius: 14px;
        box-sizing: border-box;
        position: relative;

        &__question {
          width: calc(100% - 50px);
          font-size: 26px;
          font-weight: 600;
          cursor: pointer;
          transition: .6s ease-in-out;

          &.opened {
            font-size: 18px;
            font-weight: 300;
            color: $gray_light;
            cursor: pointer;
          }
        }

        &__answer {
          font-size: 22px;
          font-weight: 500;
          color: $black;
        }

        &__icon {
          width: 50px;
          height: 50px;
          position: absolute;
          top: 1px;
          right: 10px;
          display: flex;
          align-items: center;
          transition: .6s ease-in-out;

          &.opened {
            transform: rotateZ(180deg);
            width: 30px;
            height: 30px;
          }
        }

        .v-enter-active,
        .v-leave-active {
          //transition: .2s ease-in-out;
        }

        .v-enter-from,
        .v-leave-to {
          //opacity: 0;
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .section-faq-wrapper {
    .faq {
      grid-template-columns: 1fr;
    }
  }
}

</style>
