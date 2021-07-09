<template>
  <Reviews class="asd" :reviews="reviews"></Reviews>
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
  },
};
</script>

<style lang="scss" scoped></style>
