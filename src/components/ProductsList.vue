<template>
  <div class="row row-line top products-list">
    <div
      class="mv_12 mh_12 tb_12 ds_12 product-outer"
      v-for="product in products"
      :key="product.id"
    >
      <ProductsListItem v-bind:product="product"></ProductsListItem>
    </div>

    <div class="mv_12 mh_12 tb_12 ds_12 product-outer" style="display: none">
      <div class="product">
        <a href="product.html" class="product__image"
          ><img src="uploads/products-grid/0282409_4.jpg" alt=""
        /></a>

        <div class="product__content">
          <div class="product__title-outer">
            <a href="product.html" class="product__title"
              >Материнская плата ASUS M5A78L-M LX3</a
            >
          </div>
          <div class="product__parameters">
            <ul class="product__parameters-list">
              <li>AMD 760G + SB710</li>
              <li>2*DDR3</li>
              <li>PCI-E16x</li>
              <li>SVGA</li>
            </ul>
          </div>

          <div class="product__rating--outer">
            <div class="product__rating rating"></div>
          </div>
          <div class="product__price-outer">
            <div class="product__price">
              <span class="product__price-value">3 530</span>
              <span class="product__price-currency">₽</span>
            </div>
          </div>
          <div class="product__button-outer">
            <a href="" class="product__button button button-buy"
              ><span>В корзину</span></a
            >
          </div>
        </div>

        <div class="product__meta">
          <div class="product__meta-inner">
            <div class="product__code">
              код: <span class="product__code-value">181350</span>
            </div>
            <div class="product__rating-outer">
              <div class="product__rating rating" data-value="4">
                <ul>
                  <li class="on"><span></span></li>
                  <li class="on"><span></span></li>
                  <li class="on"><span></span></li>
                  <li class="on"><span></span></li>
                  <li class="off"><span></span></li>
                </ul>
              </div>
            </div>
            <div class="product__availability product__availability">
              наличие:
              <span
                class="product__availability-value product__availability-value--in-stock"
                >в магазине</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsListItem from "@/components/ProductsListItem.vue";

export default {
  name: "ProductsList",
  components: {
    ProductsListItem,
  },
  props: {
    products: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
