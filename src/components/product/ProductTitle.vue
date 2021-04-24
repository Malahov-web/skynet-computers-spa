<template>
  <div class="product__title-outer">
    <router-link
      class="product__title"
      :to="{ name: 'ProductPage', params: { productid: productID } }"
      >{{ productTitle }}</router-link
    >
    <!-- <a href="product.html" class="product__title"> {{ productTitle }} </a> -->
  </div>
</template>

<script>
export default {
  name: "ProductTitle",
  props: {
    productTitle: {
      type: String,
      default: "Product without title",
    },
    productID: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
