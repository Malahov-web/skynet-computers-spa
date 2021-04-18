<template>
  <a href="product.html" class="product__image">
    <img
      _src="uploads/products-grid/0185414_3.JPG"
      :alt="productTitle"
      :src="productImage"
    />
  </a>
</template>

<script>
export default {
  name: "ProductImage",
  props: {
    productImage: {
      type: String,
      default: "images/no_image_available.svg.png",
    },
    productTitle: {
      type: String,
      default: "Product without title",
    },
  },
};
</script>

<style lang="scss" scoped></style>
