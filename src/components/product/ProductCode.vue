<template>
  <div class="product__code">
    код: <span class="product__code-value"> {{ productCode }} </span>
  </div>
</template>

<script>
export default {
  name: "ProductCode",
  props: {
    productCode: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
