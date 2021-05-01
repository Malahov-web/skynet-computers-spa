<template>
  <div class="homepage">
    <section class="section section-edges">
      <div class="container section__block">
        <div class="edges-outer">
          <Edges class="asd"></Edges>
        </div>
      </div>
    </section>

    <section class="section section-categories">
      <div class="container section__title">
        <div class="row">
          <div class="mv_12">
            <h2 class="h1">Categories</h2>
          </div>
        </div>
      </div>
      <div class="container section__block">
        <div class="categories-outer">
          <Categories class="asd"></Categories>
        </div>
      </div>
    </section>

    <section class="section section-products section-products-new">
      <div class="container section__title">
        <div class="row">
          <div class="mv_12">
            <h2 class="h1">Products New</h2>
          </div>
        </div>
      </div>
      <div class="container section__block">
        <ProductsGrid _v-bind:products="products"></ProductsGrid>
      </div>
    </section>

    <section class="section section-actions">
      <div class="container section__title">
        <div class="row">
          <div class="mv_12">
            <div class="h1">Actions</div>
          </div>
        </div>
      </div>

      <div class="container section__block">
        <Actions class="asd"></Actions>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Edges from "@/components/Edges.vue";
// import Categories from "@/components/Categories.vue";
import ProductsGrid from "@/components/ProductsGrid.vue";
import Actions from "@/components/Actions.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Edges,
    // Categories,
    ProductsGrid,
    Actions,
  },
};
</script>
