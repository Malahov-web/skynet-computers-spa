<template>
  <div class="product__rating-outer">
    <div
      class="product__rating rating"
      _data-value="4"
      :data-rating="productRating"
    >
      <ul v-html="renderRating">
        <!-- <li class="on"><span></span></li>
        <li class="on"><span></span></li>
        <li class="on"><span></span></li>
        <li class="on"><span></span></li>
        <li class="off"><span></span></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductRating",

  props: {
    productRating: {
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
    renderRating: function () {
      let template = "";
      for (let index = 1; index < this.ratingMax + 1; index++) {
        if (index <= this.productRating) {
          template += `<li class="on"><span></span></li>`;
          continue;
        }
        template += `<li class="off"><span></span></li>`;
      }

      return template;
      // return 'Text return'; // +
    },
  },
};
</script>

<style lang="scss" scoped></style>
