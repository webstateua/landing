<template>
  <main>
    <VSectionTitle>
      <template v-slot:title>
        My BURGERS
      </template>
      <template v-slot:description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea impedit iste laudantium minus nostrum qui quidem
        rem sit tempore voluptatem. Adipisci architecto atque deleniti id, inventore ipsa ipsum, laboriosam nesciunt
        nulla provident quisquam recusandae reprehenderit sapiente similique temporibus veritatis voluptas.
      </template>
    </VSectionTitle>
    <div class="container">
      <div class="main">
        <VSectionContent :class="'test'">
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
        <VSectionContent :class="'test'">
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
import VSectionContent from '@/components/sections/VSectionContent.vue'
import VSectionTitle from '@/components/sections/VSectionTitle.vue'




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
