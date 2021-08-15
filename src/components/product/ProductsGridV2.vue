<template>
  <div class="row row-line top products-grid">
    <div
      class="mv_12 mh_6 tb_4 ds_4 product-outer"
      v-for="product in products"
      :key="product.id"
    >
      <!-- <ProductsGridItem class="asd" v-bind:product="product"></ProductsGridItem> -->

      <ProductsGridItemV2 class="product--viewed" v-bind:product="product">
        <template class="asd" v-slot:imageSlot>
          <ProductImage
            :productImage="product.image"
            :productTitle="product.title"
          ></ProductImage>
        </template>

        <template class="asd" v-slot:titleSlot>
          <ProductTitle
            :productTitle="product.title"
            :productID="product.id"
          ></ProductTitle>
        </template>

        <template class="asd" v-slot:ratingSlot>
          <BaseRating class="asd" :rating="product.rating"></BaseRating>
        </template>

        <template class="asd" v-slot:priceSlot>
          <div class="product__footer __row">
            <ProductPrice
              :price="product.price"
              :priceSale="product.priceSale"
            ></ProductPrice>

            <ProductButton
              :productLink="'product' + product.id"
            ></ProductButton>
          </div>
        </template>

        <template class="asd" v-slot:availabilitySlot>
          <ProductAvailability
            :productAvailability="product.availability"
          ></ProductAvailability>
        </template>
      </ProductsGridItemV2>
    </div>
  </div>
</template>

<script>
// import ProductsGridItem from "@/components/ProductsGridItem.vue";
import ProductsGridItemV2 from "@/components/product/ProductsGridItemV2.vue";

import ProductImage from "@/components/product/ProductImage.vue";
import ProductTitle from "@/components/product/ProductTitle.vue";
// import ProductRating from "@/components/product/ProductRating.vue";
import ProductPrice from "@/components/product/ProductPrice.vue";
import ProductButton from "@/components/product/ProductButton.vue";
import ProductAvailability from "@/components/product/ProductAvailability.vue";

export default {
  name: "ProductsGrid",
  components: {
    // ProductsGridItem,
    ProductsGridItemV2,
    ProductImage,
    ProductTitle,
    // ProductRating,

    ProductPrice,
    ProductButton,
    ProductAvailability,
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
