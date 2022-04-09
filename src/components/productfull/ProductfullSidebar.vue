<template>
  <div class="row">
    <div class="mv_12 mh_6 tb_6 ds_12">
      <div class="product__price-outer">
        <div class="product__price-old">
          <span class="product__price-old-value">90 500</span>
          <span class="product__price-old-currency">₽</span>
        </div>
      </div>

      <div class="product__price-outer">
        <div class="product__price product__price--productfull">
          <span class="product__price-value">75 500</span>
          <span class="product__price-currency">₽</span>
        </div>
      </div>

      <div class="product__button-outer">
        <a href="" class="product__button button button-buy"
          ><span>В корзину</span></a
        >
      </div>
    </div>

    <div class="mv_12 mh_6 tb_6 ds_12">
      <div class="product__availability product__availability">
        наличие:
        <span
          class="product__availability-value product__availability-value--in-stock"
          >в магазине</span
        >
      </div>

      <div class="productfull__tools-outer">
        <div class="productfull__tools">
          <div class="productfull__tools-item">
            <i class="themify themify-split-v"></i>
            <span class="">Количество</span>
          </div>
          <div class="productfull__tools-item">
            <i class="themify themify-heart"></i>
            <span class="">Добавить в избранное</span>
          </div>
          <div class="productfull__tools-item">
            <BaseButtonCompare
              class="asd"
              :productId="product.id"
              :isInCompare="isInCompare"
            ></BaseButtonCompare>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductfullSidebar",

  components: {
    // BaseButtonCompare,
  },

  props: {
    product: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  computed: {
    productsCompareIds() {
      //   return this.$store.getters.getProductsCompare;
      //   return this.$store.state.productsCompareIds;
      //   return this.$store.state.products_module.productsCompareIds;

      return this.$store.state.compare.productsCompareIds;
    },
    isInCompare() {
      let isInCompare = this.productsCompareIds.find(
        // (item) => item == this.productId // ОЧЕПЯТКА!
        (item) => item == this.product.id
      );

      if (isInCompare == undefined) return false;

      return true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
