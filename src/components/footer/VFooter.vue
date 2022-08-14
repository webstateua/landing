<template>
  <footer>
    <div class="container">
      <div class="footer">
        WebState
        <div class="footer-icons">
          <img src="@/assets/images/icons/social/telegram_dark.png" alt="telegram icon" class="footer-icons__icon">
          <img src="@/assets/images/icons/social/instagram_dark.png" alt="instagram icon"
               class="footer-icons__icon">
          <img src="@/assets/images/icons/social/facebook_dark.png" alt="facebook icon" class="footer-icons__icon">
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>



</script>

<style lang="scss" scoped>

footer {
  background: $white;

  .footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    box-sizing: border-box;
    font-size: 26px;
    color: $black;

    .footer-icons {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;

      &__icon {
        width: min(34px, 100%);
      }
    }
  }
}

</style>
