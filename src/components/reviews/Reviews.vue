<template>
  <div class="productfull__reviews reviews">
    <ReviewsHeader
      class="asd"
      :reviewsQuantity="reviewsQuantity"
      :averageRating="averageRating"
    ></ReviewsHeader>

    <div class="reviews__content">
      <div class="reviews__list">
        <ReviewsItem
          class="asd"
          v-for="(item, index) in reviews"
          :key="item.productId + index"
          :item="item"
        ></ReviewsItem>
      </div>
    </div>

    <ReviewsForm class="asd"></ReviewsForm>
  </div>
</template>

<script>
import ReviewsHeader from "@/components/reviews/ReviewsHeader.vue";
import ReviewsItem from "@/components/reviews/ReviewsItem.vue";
import ReviewsForm from "@/components/reviews/ReviewsForm.vue";

export default {
  name: "Reviews",

  components: {
    ReviewsHeader,
    ReviewsItem,
    ReviewsForm,
  },

  props: {
    reviews: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  computed: {
    reviewsQuantity() {
      return this.reviews.length;
    },

    averageRating() {
      return this.calcAverageRating();
    },
  },

  methods: {
    calcAverageRating() {
      //   let averageRating = 0;

      let summaryRating = this.reviews.reduce((accumulator, item) => {
        return accumulator + item.rating;
      }, 0);

      const averageRating = summaryRating / this.reviews.length;
      return averageRating;
    },
  },
};
</script>

<style lang="scss" scoped></style>
