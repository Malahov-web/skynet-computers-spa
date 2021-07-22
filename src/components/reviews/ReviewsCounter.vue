<template>
  <div class="reviews__counter" v-if="reviewsQuantity > 0">
    <span class="reviews__counter-value">
      {{ reviewsQuantity }}
    </span>
    <span class="reviews__counter-text">отзыва</span>
  </div>

  <div class="reviews__counter" v-else>
    <span class="reviews__counter-text">Нет отзывов</span>
  </div>
</template>

<script>
export default {
  name: "ReviewsCounter",

  props: {
    reviewsQuantity: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
