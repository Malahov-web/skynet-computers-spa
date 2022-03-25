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

      <ProductCompareSpecifications
        class="asd"
        :compareModeActive="compareModeActive"
        :specificationsValuesByGroups="
          // this.setSpecificationsValuesByGroups(product)
          setSpecificationsValuesByGroups
        "
        :specificationsFull="product.specificationsFull"
        :specificationsByGroups="specificationsByGroups"
        :specificationsProcutsCompareDifference="
          specificationsProcutsCompareDifference
        "
      >
        таблица
      </ProductCompareSpecifications>
    </div>
  </div>
</template>

<script>
import ProductsServices from "@/services/ProductsServices.js";

// import ProductsGridItem from "@/components/ProductsGridItem.vue";
import ProductsGridItemV2 from "@/components/product/ProductsGridItemV2.vue";

import ProductImage from "@/components/product/ProductImage.vue";
import ProductTitle from "@/components/product/ProductTitle.vue";
// import ProductRating from "@/components/product/ProductRating.vue";
import ProductPrice from "@/components/product/ProductPrice.vue";
import ProductButton from "@/components/product/ProductButton.vue";
import ProductAvailability from "@/components/product/ProductAvailability.vue";

import ProductCompareSpecifications from "@/components/compare/ProductCompareSpecifications.vue";

export default {
  name: "CompareProducts",

  components: {
    // ProductsGridItem,
    ProductsGridItemV2,
    ProductImage,
    ProductTitle,
    // ProductRating,

    ProductPrice,
    ProductButton,
    ProductAvailability,

    ProductCompareSpecifications,
  },
  props: {
    products: {
      type: Object,
      default: () => {
        return {};
      },
    },

    compareModeActive: {
      type: Number,
      defalut: 0,
    },

    specificationsProcutsCompareAll: {
      type: Array,
      default: () => {
        return [];
      },
    },

    specificationsProcutsCompareDifference: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  computed: {
    specifications() {
      return this.$store.state.products_module.specifications;
    },

    specificationsGroups() {
      return this.$store.state.products_module.specificationsGroups;
    },

    specificationsByGroups() {
      return this.groupProperties();
    },

    // specificationsValuesByGroups() {
    //   return this.setSpecificationsValuesByGroup();
    // },
  },

  methods: {
    // setSpecificationsValuesByGroup(product) {
    //   //   product.specificationsFull;
    //   //   return { yeah: 1 };
    //   return product.specificationsFull;
    // },

    groupProperties() {
      //   let specs = this.specificationsProcutsCompareAll; // -
      let specs = this.specifications; // +
      let groupedSpecs;
      //   let groupedSpecs = this.groupByField(specs); // my custom methodgroupByField() is for Arrays
      //   groupedSpecs = groupBy(specs, "group"); // - Lodash method for Arrays, возвращает эл-ты сгруппированые в массивы, у нас теряется имя-ключ
      groupedSpecs = ProductsServices.groupObjectByField(specs, "group");
      return groupedSpecs;
    },
  },
};
</script>

<style lang="scss" scoped></style>
