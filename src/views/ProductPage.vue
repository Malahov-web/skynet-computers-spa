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
              <span>{{ productTitle }}</span>
            </li>
          </ul>
        </div>
        <h1 class="h1 page-title">{{ productTitle }}</h1>
      </div>

      <main class="main main--sidebar--right">
        <!-- comp -->
        <Productfull class="asd" :product="product"> </Productfull>
      </main>

      <aside class="sidebar sidebar--productfull">
        <div class="sidebar-inner">
          <ProductfullSidebar class="asd" :product="product">
          </ProductfullSidebar>
        </div>
      </aside>

      <div class="bottomline"></div>
    </div>
  </section>
</template>

<script>
import Productfull from "@/components/productfull/Productfull.vue";
import ProductfullSidebar from "@/components/productfull/ProductfullSidebar.vue";

export default {
  name: "ProductPage",
  components: {
    Productfull,
    ProductfullSidebar,
  },

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
    productTitle() {
      if (!this.product) {
        return "";
      }
      return this.product.title;
    },
  },
};
</script>

<style lang="scss" scoped></style>
