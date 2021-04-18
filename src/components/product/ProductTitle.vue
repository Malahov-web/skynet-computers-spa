<template>
  <div class="product__title-outer">
    <a href="product.html" class="product__title"> {{ productTitle }} </a>
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
  },
};
</script>

<style lang="scss" scoped></style>
