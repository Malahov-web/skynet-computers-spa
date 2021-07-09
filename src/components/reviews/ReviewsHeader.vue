<template>
  <div class="reviews__header">
    <div class="row-flex middle">
      <div class="reviews-left">
        <div class="reviews__counter">
          <span class="reviews__counter-value">
            {{ this.reviewsQuantity }}
          </span>
          <span class="reviews__counter-text">отзыва</span>
        </div>
      </div>

      <div class="reviews-right">
        <div class="reviews__rating-average-title">
          <div class="reviews__rating-average-title" :title="allVoicesTitle">
            Средняя оценка:
            <span class="reviews__rating-average-value">{{
              averageRating
            }}</span>
          </div>
          <div class="reviews__rating-average-rating">
            <BaseRating :rating="averageRating"></BaseRating>
          </div>
        </div>

        <!-- <div class="reviews__button"> -->
        <a href="#reviews__form" class="button button-buy"
          ><span>Оставить отзыв </span>
        </a>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewsHeader",

  props: {
    reviewsQuantity: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    allVoicesTitle() {
      return `Всего голосов ${this.reviewsQuantity}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
