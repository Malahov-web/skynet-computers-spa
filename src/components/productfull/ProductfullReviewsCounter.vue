<template>
  <div class="productfull__reviews-counter">
    <span class="productfull__reviews-counter-text">Отзывов:</span>
    <span class="productfull__reviews-counter-value">
      {{ reviewsQuantity }}</span
    >
  </div>
</template>

<script>
export default {
  name: "ProductfullReviewsCounter",

  props: {
    reviewsQuantity: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
