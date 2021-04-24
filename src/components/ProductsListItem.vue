<template>
  <div class="product">
    <ProductImage
      :productImage="product.image"
      :productTitle="product.title"
    ></ProductImage>

    <div class="product__content">
      <ProductTitle
        :productTitle="product.title"
        :productID="product.id"
      ></ProductTitle>

      <ProductParameters
        :productParameters="product.specificationsShort"
      ></ProductParameters>

      <div class="product__rating--outer">
        <div class="product__rating rating"></div>
      </div>

      <ProductPrice
        :price="product.price"
        :priceSale="product.priceSale"
      ></ProductPrice>

      <ProductButton :productLink="productLink"></ProductButton>
    </div>

    <div class="product__meta">
      <div class="product__meta-inner">
        <ProductCode :productCode="product.id"></ProductCode>

        <ProductRating :productRating="product.rating"></ProductRating>

        <ProductAvailability
          :productAvailability="product.availability"
        ></ProductAvailability>
      </div>
    </div>
  </div>
</template>

<script>
import ProductImage from "@/components/product/ProductImage.vue";
import ProductTitle from "@/components/product/ProductTitle.vue";
import ProductParameters from "@/components/product/ProductParameters.vue";
import ProductCode from "@/components/product/ProductCode.vue";
import ProductRating from "@/components/product/ProductRating.vue";
import ProductPrice from "@/components/product/ProductPrice.vue";
import ProductButton from "@/components/product/ProductButton.vue";
import ProductAvailability from "@/components/product/ProductAvailability.vue";

export default {
  name: "ProductsListItem",
  components: {
    ProductImage,
    ProductTitle,
    ProductParameters,
    ProductCode,
    ProductRating,
    ProductPrice,
    ProductButton,
    ProductAvailability,
  },
  props: {
    product: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
