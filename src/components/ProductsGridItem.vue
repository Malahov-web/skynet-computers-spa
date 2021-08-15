<template>
  <div class="product">
    <ProductImage
      :productImage="product.image"
      :productTitle="product.title"
    ></ProductImage>

    <ProductTitle
      :productTitle="product.title"
      :productID="product.id"
    ></ProductTitle>

    <ProductParameters
      :productParameters="product.specificationsShort"
    ></ProductParameters>

    <ProductCode :productCode="product.id"></ProductCode>

    <!-- <ProductRating :productRating="product.rating"></ProductRating> -->

    <BaseRating class="asd" :rating="product.rating"></BaseRating>

    <ProductPrice
      :price="product.price"
      :priceSale="product.priceSale"
    ></ProductPrice>

    <ProductButton :productLink="productLink"></ProductButton>

    <ProductAvailability
      :productAvailability="product.availability"
    ></ProductAvailability>
  </div>
</template>

<script>
import ProductImage from "@/components/product/ProductImage.vue";
import ProductTitle from "@/components/product/ProductTitle.vue";
import ProductParameters from "@/components/product/ProductParameters.vue";
import ProductCode from "@/components/product/ProductCode.vue";
// import ProductRating from "@/components/product/ProductRating.vue";
import ProductPrice from "@/components/product/ProductPrice.vue";
import ProductButton from "@/components/product/ProductButton.vue";
import ProductAvailability from "@/components/product/ProductAvailability.vue";
// import BaseRating from "@/components/BaseRating.vue";

export default {
  name: "ProductsGridItem",
  props: {
    product: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  components: {
    ProductImage,
    ProductTitle,
    ProductParameters,
    ProductCode,
    // ProductRating,
    ProductPrice,
    ProductButton,
    ProductAvailability,
    // BaseRating,
  },
  computed: {
    productLink() {
      return "product" + this.product.id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
