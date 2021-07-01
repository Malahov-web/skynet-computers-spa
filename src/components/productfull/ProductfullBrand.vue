<template>
  <div class="productfull__brand" v-if="brandImage">
    <img :src="'/' + brandImage" :alt="brandText" :title="titleText" />
  </div>

  <div class="productfull__brand" v-else>
    <!-- <img :src="brandImage" alt="Apple" /> -->
    <span class="productfull__brand-title"> {{ titleText }} </span>
  </div>
</template>

<script>
export default {
  name: "ProductfullBrand",

  props: {
    brand: {
      type: String,
      default: "Неизвестного происхождения",
    },
    brandImage: {
      type: String,
      default: "",
    },
  },

  computed: {
    brandText() {
      return this.brand || "Неизвестного происхождения";
    },
    titleText() {
      return "Производитель: " + this.brandText;
    },
    // textNoImage() {}
  },
};
</script>

<style lang="scss" scoped>
.productfull__brand-title {
  color: #77757b;
}
</style>
