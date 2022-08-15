<template>
  <footer>
    <div class="container">
      <div class="footer">
        WebState
        <div class="footer-icons">
          <img @click="RouteToLink('https://t.me/webstate')"
               src="@/assets/images/icons/social/telegram_dark.png"
               alt="telegram icon" class="footer-icons__icon">
          <img src="@/assets/images/icons/social/instagram_dark.png" alt="instagram icon"
               class="footer-icons__icon">
          <img src="@/assets/images/icons/social/facebook_dark.png" alt="facebook icon" class="footer-icons__icon">
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import RouteToLink from "@/utils/routeToLink.js";

</script>

<style lang="scss" scoped>

footer {
  background: $white;

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    box-sizing: border-box;
    font-size: 26px;
    color: $black;

    .footer-icons {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;

      &__icon {
        width: min(36px, 100%);
        transition: .3s ease-in-out;
        cursor: pointer;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}

</style>
