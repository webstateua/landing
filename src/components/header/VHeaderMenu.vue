<template>
  <menu>
    <div class="desktop-menu">
      <div class="desktop-menu-icons">
        <img src="@/assets/images/icons/social/telegram_dark.png" alt="telegram icon" class="desktop-menu-icons__icon">
        <img src="@/assets/images/icons/social/instagram_dark.png" alt="instagram icon"
             class="desktop-menu-icons__icon">
        <img src="@/assets/images/icons/social/facebook_dark.png" alt="facebook icon" class="desktop-menu-icons__icon">
      </div>
    </div>
    <div class="mobile-menu">
      <VIconNav @click="openedMenu = !openedMenu"
                :active="openedMenu"
      />
    </div>
    <div v-if="openedMenu" class="menu-wrapper">
      <div class="menu">
        <div class="menu-icons">
          <img src="@/assets/images/icons/social/telegram_dark.png" alt="telegram icon" class="menu-icons__icon">
        </div>
        <div class="menu-icons">
          <img src="@/assets/images/icons/social/instagram_dark.png" alt="instagram icon"
               class="menu-icons__icon">
        </div>
        <div class="menu-icons">
          <img src="@/assets/images/icons/social/facebook_dark.png" alt="facebook icon" class="menu-icons__icon">
        </div>
      </div>
    </div>
  </menu>
</template>

<script setup>
import VIconNav from '@/components/icons/VIconNav.vue'
import {ref} from "vue";


const openedMenu = ref(false)

</script>

<style lang="scss" scoped>

menu {
  margin: 0;
  max-width: 100%;
  position: relative;
}

.fixed {
  .desktop-menu-icons {
    background: rgba(255, 255, 255, 0.3);

    &__icon {
      opacity: 1;
    }
  }

}

.desktop-menu {
  display: flex;

  &-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 10px 10px;
    box-sizing: border-box;
    border-radius: 12px;
    background: rgba(255, 255, 255, 1);
    transition: .6s ease-in-out;

    &__icon {
      max-width: 100%;
      width: 36px;
      transition: .3s ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }

    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
}

.mobile-menu {
  display: none;
}

.menu-wrapper {
  z-index: 999;
  width: 100vw;
  position: absolute;
  top: calc(100% + 35px);
  background: #ffffff;
  right: -15px;
  padding: 10px;
  box-sizing: border-box;

  .menu {

    &-icons {
      &__icon {
        max-width: 100%;
        width: 36px;
        transition: .5s ease-in-out;
        cursor: pointer;

        &:hover {
          width: 32px;
        }
      }
    }
  }
}

@media (max-width: 900px) {

  .desktop-menu {
    display: none;
  }

  .mobile-menu {
    display: block;
  }
}

</style>
