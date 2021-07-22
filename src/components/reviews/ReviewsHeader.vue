<template>
  <div class="reviews__header">
    <div class="row-flex middle">
      <div class="reviews-left">
        <ReviewsCounter :reviewsQuantity="reviewsQuantity"></ReviewsCounter>
      </div>

      <div class="reviews-right">
        <div class="reviews__rating-average-title">
          <div class="reviews__rating-average-title" :title="allVoicesTitle">
            Средняя оценка:
            <span class="reviews__rating-average-value">{{
              averageRatingRounded
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
import ReviewsCounter from "@/components/reviews/ReviewsCounter.vue";

export default {
  name: "ReviewsHeader",

  components: {
    ReviewsCounter,
  },

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
    averageRatingRounded() {
      // return this.averageRating.toFixed(1) || "-";
      //   return this.averageRating.toFixed(1) || "-";
      if (!this.averageRating) {
        return "-";
      }
      return this.averageRating.toFixed(1);
    },
    allVoicesTitle() {
      return `Всего голосов ${this.reviewsQuantity}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
