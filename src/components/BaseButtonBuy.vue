<template>
  <a :href="link" class="product__button button button-buy"
    ><span>
      <slot>В корзину</slot>
    </span></a
  >
</template>

<script>
export default {
  name: "BaseButtonBuy",
  props: {
    link: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style lang="scss" scoped></style>
