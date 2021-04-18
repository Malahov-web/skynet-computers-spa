<template>
  <div class="product__availability product__availability">
    наличие:
    <span
      v-if="0 == productAvailability"
      class="product__availability-value product__availability-value--none"
      >нет</span
    >
    <span
      v-if="1 == productAvailability"
      class="product__availability-value product__availability-value--in-stock"
      >в магазине</span
    >
    <span
      v-if="2 == productAvailability"
      class="product__availability-value product__availability-value--awaiting"
      >ожидается</span
    >
  </div>
</template>

<script>
export default {
  name: "ProductAvailability",
  props: {
    productAvailability: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
