<template>
  <div class="product__button-outer">
    <BaseButtonBuy :link="productLink">Add to Cart</BaseButtonBuy>
  </div>
</template>

<script>
export default {
  name: "ProductButton",
  props: {
    productLink: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style lang="scss" scoped></style>
