<template>
  <!-- <div>Product Full page, ID: {{ productid }}</div> -->

  <section class="section">
    <div class="container">
      <div class="topline">
        <div class="breadcrumbs-outer">
          <ul class="breadcrumbs">
            <li class="breadcrumbs__item"><a href="index.html">Главная</a></li>
            <li class="breadcrumbs__item">
              <a href="category.html">компьютеры</a>
            </li>
            <li class="breadcrumbs__item">
              <span>{{ product.title }}</span>
            </li>
          </ul>
        </div>
        <h1 class="h1 page-title">{{ product.title }}</h1>
      </div>

      <main class="main main--sidebar--right">
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
            <div class="productfull__brand-outer">
              <div class="productfull__brand">
                <img src="uploads/brands/brand_apple_deluxe.jpg" alt="Apple" />
              </div>
            </div>

            <div class="productfull-header">
              <div class="productfull-header-left">
                <div class="productfull__reviews-counter">
                  <span class="productfull__reviews-counter-text"
                    >Отзывов:</span
                  >
                  <span class="productfull__reviews-counter-value"> 2</span>
                </div>
                <div class="productfull__rating-outer">
                  <div class="productfull__rating">
                    <div class="rating" data-value="4">
                      <ul>
                        <li class="on"><span></span></li>
                        <li class="on"><span></span></li>
                        <li class="on"><span></span></li>
                        <li class="on"><span></span></li>
                        <li class="off"><span></span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="productfull-header-right">
                <div class="product__availability product__availability">
                  наличие:
                  <span
                    class="product__availability-value product__availability-value--in-stock"
                    >в магазине</span
                  >
                </div>
              </div>
            </div>

            <div class="productfull__description">
              <div class="productfull__description-title g-subtitle h4">
                Описание:
              </div>
              <div class="productfull__description-text">
                Есть много вариантов Lorem Ipsum, но большинство из них имеет не
                всегда приемлемые модификации, например, юмористические вставки
                или слова, которые даже отдалённо не напоминают латынь.
              </div>
            </div>

            <div class="productfull__specifications">
              <div class="productfull__specifications g-subtitle h4">
                Характеристики:
              </div>
              <ul class="productfull__specifications-list">
                <li class="productfull__specifications-list-item">
                  <div class="productfull__specifications-list-item-name">
                    <span>Производитель</span>
                  </div>
                  <div class="productfull__specifications-list-item-value">
                    Apple
                  </div>
                </li>
                <li class="productfull__specifications-list-item">
                  <div class="productfull__specifications-list-item-name">
                    <span>Операционная система</span>
                  </div>
                  <div class="productfull__specifications-list-item-value">
                    Mac OS
                  </div>
                </li>
                <li class="productfull__specifications-list-item">
                  <div class="productfull__specifications-list-item-name">
                    <span>Оперативная память</span>
                  </div>
                  <div class="productfull__specifications-list-item-value">
                    8 Гб
                  </div>
                </li>
                <li class="productfull__specifications-list-item">
                  <div class="productfull__specifications-list-item-name">
                    <span>Объем памяти видеокарты</span>
                  </div>
                  <div class="productfull__specifications-list-item-value">
                    512 Гб
                  </div>
                </li>
                <li class="productfull__specifications-list-item">
                  <div class="productfull__specifications-list-item-name">
                    <span>Разрешение экрана</span>
                  </div>
                  <div class="productfull__specifications-list-item-value">
                    2560 х 1440
                  </div>
                </li>
              </ul>
            </div>
            <!-- - -->
          </div>
        </div>
      </main>

      <div class="bottomline"></div>
    </div>
  </section>
</template>

<script>
// import Name from '@/components/Name.vue';

export default {
  name: "ProductPage",
  // components: {
  //     Name
  // },

  props: {
    productid: {
      type: String,
    },
  },

  created() {
    // this.$store.dispatch("fetchNewsItem", this.newid);
    // this.fetchData();
    // this.$store.dispatch("fetchProductById", this.productid);
    this.$store.dispatch("fetchProducts");
  },

  computed: {
    product() {
      return this.$store.getters.getProductFull(this.productid);
      //   return this.$store.state.products.productFull;
      //   return this.$store.state.products_module.productFull; // refact: module
    },
  },
};
</script>

<style lang="scss" scoped></style>
