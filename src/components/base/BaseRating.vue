<template>
  <div class="rating" :data-value="rating">
    <ul>
      <li class="on" v-for="i in ratingRounded" :key="i"><span></span></li>

      <li class="off" v-for="i in ratingLeftToMax" :key="i + ratingLeftToMax">
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseRating",

  props: {
    rating: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      ratingMax: 5,
    };
  },

  computed: {
    ratingRounded() {
      return Math.round(this.rating);
    },
    ratingLeftToMax() {
      return this.ratingMax - this.ratingRounded;
    },
  },
};
</script>

<style lang="scss" scoped></style>
