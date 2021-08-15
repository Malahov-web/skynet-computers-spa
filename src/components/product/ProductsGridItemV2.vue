<template>
  <div class="product">
    <slot name="imageSlot">DefaultContent</slot>
    <slot name="titleSlot">DefaultContent</slot>
    <slot name="parametersSlot"></slot>
    <slot name="codeSlot"></slot>
    <slot name="ratingSlot">DefaultContent</slot>
    <slot name="priceSlot">DefaultContent</slot>
    <!-- <slot name="buttonSlot">DefaultContent Button</slot> -->
    <slot name="availabilitySlot">DefaultContent</slot>
  </div>
</template>

<script>
export default {
  name: "ProductsGridItem",

  //   props: {
  //     product: {
  //       type: Object,
  //       default: () => {
  //         return {};
  //       },
  //     },
  //   },

  //   computed: {
  //     productLink() {
  //       return "product" + this.product.id;
  //     },
  //   },
};
</script>

<style lang="scss" scoped></style>
