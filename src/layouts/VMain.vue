<template>
  <main>
    <VSectionTitle>
      <template v-slot:title>
        My BURGERS
      </template>
      <template v-slot:description>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </template>
    </VSectionTitle>
    <div class="container">
      <div class="main">
        <VSectionContent :class="'withCarousel'">
          <template v-slot:image>
            <VCarousel :sliders="sliders"/>
          </template>
          <template v-slot:title>
            Choose your BURGER
          </template>
          <template v-slot:description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea impedit iste laudantium minus nostrum qui quidem
            rem sit tempore voluptatem. Adipisci architecto atque deleniti id, inventore ipsa ipsum, laboriosam nesciunt
            nulla provident quisquam recusandae reprehenderit sapiente similique temporibus veritatis voluptas.
          </template>
        </VSectionContent>
        <VSectionContent :revert="true">
          <template v-slot:title>
            My BURGERS
          </template>
          <template v-slot:description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea impedit iste laudantium minus nostrum qui quidem
            rem sit tempore voluptatem. Adipisci architecto atque deleniti id, inventore ipsa ipsum, laboriosam nesciunt
            nulla provident quisquam recusandae reprehenderit sapiente similique temporibus veritatis voluptas.
          </template>
          <template v-slot:buttons>
            <VButton>
              Connect
            </VButton>
          </template>
          <template v-slot:image>
            <img src="@/assets/images/burger.webp" alt="block image">
          </template>
        </VSectionContent>
        <VSectionMultiBlocks :contents="blocks">
          <template v-slot:title>
            Our services
          </template>
        </VSectionMultiBlocks>
        <VSectionContent>
          <template v-slot:title>
            My BURGERS
          </template>
          <template v-slot:description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea impedit iste laudantium minus nostrum qui quidem
            rem sit tempore voluptatem. Adipisci architecto atque deleniti id, inventore ipsa ipsum, laboriosam nesciunt
            nulla provident quisquam recusandae reprehenderit sapiente similique temporibus veritatis voluptas.
          </template>
          <template v-slot:buttons>
            <VButton>
              Connect
            </VButton>
          </template>
          <template v-slot:image>
            <img src="@/assets/images/burger.webp" alt="block image">
          </template>
        </VSectionContent>
        <VSectionContent :revert="true">
          <template v-slot:title>
            My BURGERS
          </template>
          <template v-slot:description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea impedit iste laudantium minus nostrum qui quidem
            rem sit tempore voluptatem. Adipisci architecto atque deleniti id, inventore ipsa ipsum, laboriosam nesciunt
            nulla provident quisquam recusandae reprehenderit sapiente similique temporibus veritatis voluptas.
          </template>
          <template v-slot:buttons>
            <VButton>
              Connect
            </VButton>
          </template>
          <template v-slot:image>
            <img src="@/assets/images/burger.webp" alt="block image">
          </template>
        </VSectionContent>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import VSectionContent from '@/components/sections/VSectionContent.vue'
import VSectionTitle from '@/components/sections/VSectionTitle.vue'
import VSectionMultiBlocks from '@/components/sections/VSectionMultiBlocks.vue'
import VCarousel from '@/components/VCarousel.vue'
import burger1 from '@/assets/images/burgers/8aa7d9e5429b506212a04d2bbf5916b1_1.webp'
import burger2 from '@/assets/images/burgers/233de757428d5e4889fbe482971caf10.webp'
import burger3 from '@/assets/images/burgers/2115018_1644510398.1914_original.webp'
import burger4 from '@/assets/images/burgers/burger-vegan_1.webp'
import service1 from '@/assets/images/services/becon.webp'
import service3 from '@/assets/images/services/donat.webp'



const sliders = reactive([
  {
    id: 1,
    title: 'Chicken cheeseburger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, veritatis.',
    img: burger1,
  },
  {
    id: 2,
    title: 'Fishburger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, veritatis.',
    img: burger2,
  },
  {
    id: 3,
    title: 'Villageger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, veritatis.',
    img: burger3,
  },
  {
    id: 4,
    title: 'Blackhole burger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, veritatis.',
    img: burger4,
  },
])
const blocks = reactive([
  {
    id: 1,
    title: 'Support 24/7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, veritatis.',
    img: service1,
  },
  {
    id: 2,
    title: 'Delivery in bad weather',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, veritatis.',
    img: service3,
  },
  {
    id: 3,
    title: 'Good mood',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, veritatis.',
    img: service1,
  },
])


</script>

<style lang="scss" scoped>

.main {
  box-sizing: border-box;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

</style>
