<template>
  <Reviews class="asd" :reviews="reviews" :productId="productId"></Reviews>
</template>

<script>
import Reviews from "@/components/reviews/Reviews.vue";

export default {
  name: "ProductfullReviews",
  components: {
    Reviews,
  },
  props: {
    reviews: {
      type: Array,
      default: () => {
        return [];
      },
    },
    productId: {
      type: Number,
      default: () => {
        return 0;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
