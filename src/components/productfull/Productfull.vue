<template>
  <div class="row productfull">
    <div class="productfull-left" _style="display: none">
      <div class="productfull-left-inner" style="display: none">
        <div class="productfull__image owl-carousel">
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
        </div>

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
        Изображение
        <div class="productfull__image">
          <img
            v-bind:src="'/' + product.image"
            v-bind:alt="product.title"
            v-bind:title="'Это ' + product.title"
          />
        </div>
      </div>
    </div>

    <div class="productfull-right">
      <ProductSpecifications
        class="asd"
        :specifications="product.specificationsShort"
      ></ProductSpecifications>

      <ProductfullDescription class="asd"></ProductfullDescription>
      <ProductfullBrand class="asd"></ProductfullBrand>
      <ProductfullRating class="asd"></ProductfullRating>
      <ProductfullReviewsCounter class="asd"></ProductfullReviewsCounter>
      <ProductfullAvailability class="asd"></ProductfullAvailability>
      <ProductfullParameters class="asd"></ProductfullParameters>
    </div>
  </div>
</template>

<script>
import ProductSpecifications from "@/components/productfull/ProductSpecifications .vue";

export default {
  name: "Productfull",
  components: {
    ProductSpecifications,
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
      key: value,
    };
  },
};
</script>

<style lang="scss" scoped></style>
