<template>
  <div class="row productfull">
    <div class="productfull-left" _style="display: none">
      <div class="productfull-left-inner" style="display: none">
        <!-- <div class="productfull__image owl-carousel">
          <img
            src="uploads/productfull/product_full_image_dell_08_image_1.jpg"
            alt="Моноблок Apple iMac"
            data-hash="slide-1"
          />
          <img
            src="uploads/productfull/product_full_image_dell_08_image_2.jpg"
            alt="Моноблок Apple iMac"
            data-hash="slide-2"
          />
          <img
            src="uploads/productfull/product_full_image_dell_08_image_3.jpg"
            alt="Моноблок Apple iMac"
            data-hash="slide-3"
          />
          <img
            src="uploads/productfull/product_full_image_dell_08_image_4.jpg"
            alt="Моноблок Apple iMac"
            data-hash="slide-4"
          />
        </div> -->

        <div class="productfull-gallery gallery">
          <div class="productfull-gallery-inner owl-carousel">
            <a class="productfull-gallery__item url" href="#slide-1">
              <img
                src="uploads/productfull/dell_08_image_gallery_1.jpg"
                alt=""
              />
            </a>
            <a class="productfull-gallery__item url" href="#slide-2">
              <img
                src="uploads/productfull/dell_08_image_gallery_2.jpg"
                alt=""
              />
            </a>
            <a class="productfull-gallery__item url" href="#slide-3">
              <img
                src="uploads/productfull/dell_08_image_gallery_3.jpg"
                alt=""
              />
            </a>
            <a class="productfull-gallery__item url" href="#slide-4">
              <img
                src="uploads/productfull/dell_08_image_gallery_4.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div class="productfull-left-inner">
        <ProductfullSlider
          class="asd"
          :images="product.gallery"
        ></ProductfullSlider>

        <!-- <div class="productfull__image">
          <img
            v-bind:src="'/' + product.image"
            v-bind:alt="product.title"
            v-bind:title="'Это ' + product.title"
          />
        </div> -->

        <ProductfullGallery
          class="asd"
          :images="product.gallery"
        ></ProductfullGallery>
      </div>
    </div>

    <div class="productfull-right">
      <div class="productfull__brand-outer">
        <ProductfullBrand
          class="asd"
          :brand="product.brand"
          :brandImage="product.brandImage"
        ></ProductfullBrand>
      </div>

      <div class="productfull-header">
        <div class="productfull-header-left">
          <!-- reviews-counter -->
          <ProductfullReviewsCounter
            class="asd"
            :reviewsQuantity="reviewsQuantity"
          ></ProductfullReviewsCounter>

          <div class="productfull__rating-outer">
            <ProductRating :productRating="product.rating"></ProductRating>
          </div>
        </div>

        <div class="productfull-header-right">
          <ProductAvailability
            :productAvailability="product.availability"
          ></ProductAvailability>
        </div>
      </div>

      <ProductfullSpecifications
        class="asd"
        :specifications="product.specificationsShort"
      ></ProductfullSpecifications>

      <ProductfullDescription
        class="asd"
        :description="product.description"
      ></ProductfullDescription>

      <!-- <ProductfullRating class="asd"></ProductfullRating> -->
      <ProductfullReviewsCounter class="asd"></ProductfullReviewsCounter>
      <ProductfullAvailability class="asd"></ProductfullAvailability>
      <ProductfullParameters class="asd"></ProductfullParameters>
    </div>

    <div class="bottomline">
      <BaseTabs class="asd" :tabs="tabs" :initialActiveTab="tabs[1]['name']">
        <template v-slot:description>
          <ProductfullDescription
            class="asd"
            :description="product.description"
          ></ProductfullDescription>
        </template>

        <template v-slot:specs>
          <div class="productfull__description-title g-subtitle h4">
            Общие характеристики:
          </div>
          <ProductfullSpecificationsTable
            :specifications="product.specificationsFull"
          ></ProductfullSpecificationsTable>
        </template>

        <template v-slot:reviews>
          <p>Содержимое третьего динамического слота</p>
        </template>

        <template v-slot:delivery>
          <div class="productfull__description-title g-subtitle h4">
            Доставка и оплата
          </div>
        </template>
      </BaseTabs>
    </div>
  </div>
</template>

<script>
// product
import ProductRating from "@/components/product/ProductRating.vue";
import ProductAvailability from "@/components/product/ProductAvailability.vue";
// productfull
import ProductfullSpecifications from "@/components/productfull/ProductfullSpecifications.vue";
import ProductfullDescription from "@/components/productfull/ProductfullDescription.vue";
import ProductfullReviewsCounter from "@/components/productfull/ProductfullReviewsCounter.vue";
import ProductfullSlider from "@/components/productfull/ProductfullSlider.vue";
import ProductfullGallery from "@/components/productfull/ProductfullGallery.vue";
import ProductfullBrand from "@/components/productfull/ProductfullBrand.vue";
import ProductfullSpecificationsTable from "@/components/productfull/ProductfullSpecificationsTable.vue";

export default {
  name: "Productfull",
  components: {
    ProductRating,
    ProductAvailability,
    ProductfullSpecifications,
    ProductfullDescription,
    ProductfullReviewsCounter,
    ProductfullSlider,
    ProductfullGallery,
    ProductfullBrand,
    ProductfullSpecificationsTable,
  },

  props: {
    product: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  data() {
    return {
      //   key: value,

      tabs: [
        {
          name: "description",
          title: "Описание",
          content: "description",
        },
        {
          name: "specs",
          title: "Характеристики",
          content: "description",
        },
        {
          name: "reviews",
          title: "Отзывы",
          content: "description",
        },
        {
          name: "delivery",
          title: "Доставка и оплата",
          content: "description",
        },
      ],
    };
  },

  created() {
    this.fetchReviews();
  },

  computed: {
    reviewsQuantity() {
      return this.product.reviews.length;
    },

    reviews() {
      //   return this.$store.getters.fetchReviews;
      //   return this.$store.getters.getReviews;
      return this.$store.getters.getProductReviews({ id: this.product.id });
    },
  },

  methods: {
    fetchReviews() {
      //   this.$store.dispatch("fetchReviews", this.newid);
      this.$store.dispatch("fetchReviews");
    },
  },
};
</script>

<style lang="scss" scoped>
// .tabs__controls-button:not(.active) {
.tabs__controls-button {
  a {
    display: none;
    cursor: pointer;
  }
}
</style>
