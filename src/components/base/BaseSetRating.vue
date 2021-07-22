<template>
  <div class="rating" :data-value="rating">
    <ul>
      <!-- Default state -->
      <li
        v-show="hoveredRating == 0 && activeRating == 0"
        class="off"
        v-for="i in ratingMax"
        :data-set-rating="i"
        :key="100 * i + ratingMax"
        @click="setRating(i)"
        @mouseover="hoverRating(i)"
      >
        <span></span>
      </li>

      <!-- Hover state -->
      <li
        v-show="hoveredRating > 0"
        class="on"
        v-for="i in hoveredRating"
        :data-set-rating="i"
        :key="210 * i + hoveredRating"
        @click="setRating(i)"
        @mouseover="hoverRating(i)"
        @mouseout="cleanHoverRating"
      >
        <span></span>
      </li>

      <li
        v-show="hoveredRating > 0"
        class="off"
        v-for="i in hoverRatingLeftToMax"
        :data-set-rating="hoveredRating + i"
        :key="220 * i + hoverRatingLeftToMax"
        @click="setRating(hoveredRating + i)"
        @mouseover="hoverRating(hoveredRating + i)"
        @mouseout="cleanHoverRating"
      >
        <span></span>
      </li>

      <!-- Activated state -->
      <li
        v-show="activeRating != 0"
        class="on"
        v-for="i in activeRating"
        :data-set-rating="i"
        :key="310 * i + activeRating"
      >
        <span></span>
      </li>

      <li
        v-show="activeRating != 0"
        class="off"
        v-for="i in activeRatingLeftToMax"
        :data-set-rating="activeRatingLeftToMax + i"
        :key="320 * i + activeRatingLeftToMax"
      >
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseSetRating",

  //   props: {
  //     rating: {
  //       type: Number,
  //       default: 0,
  //     },
  //   },

  data() {
    return {
      //   rating: 5,
      ratingMax: 5,
      activeRating: 0,
      hoveredRating: 0,
    };
  },

  computed: {
    hoverRatingLeftToMax() {
      return this.ratingMax - this.hoveredRating;
    },

    activeRatingLeftToMax() {
      return this.ratingMax - this.activeRating;
    },
  },

  methods: {
    setRating(value) {
      this.activeRating = value;
      this.cleanHoverRating();
      //   this.$emit("myEvent");
      this.$emit("set-rating", value);
    },

    hoverRating(value) {
      this.hoveredRating = value;
    },

    cleanHoverRating() {
      console.log("cleanHoverRating() ");
      this.hoveredRating = 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
