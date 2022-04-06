<template>
  <section class="section">
    <section class="section">
      <div class="container">
        <div class="topline">
          <div class="breadcrumbs-outer">
            <ul class="breadcrumbs">
              <li class="breadcrumbs__item">
                <a href="index.html">Главная</a>
              </li>
              <li class="breadcrumbs__item"><span>Сравнение товаров</span></li>
            </ul>
          </div>
          <h1 class="h1 page-title">Сравнение</h1>
        </div>
      </div>
    </section>

    <section class="section section-compare">
      <div class="container compare">
        <div class="row compare__header">
          <div class="mv_12">
            <CompareControls class=""></CompareControls>
          </div>
        </div>

        <div class="row compare__content">
          <div class="mv_12 mh_6 tb_4 ds_3 compare-left">
            <div class="compare__cap"></div>

            <CompareSpecifications
              class="compare__specifications"
              :specificationsProcutsCompareAll="specificationsProcutsCompareAll"
              :specificationsProcutsCompareActive="
                specificationsProcutsCompareActive
              "
            ></CompareSpecifications>
          </div>

          <div class="mv_12 mh_6 tb_8 ds_9 compare-right">
            <CompareProducts
              class="compare__products"
              v-bind:products="products"
              :specificationsProcutsCompareActive="
                specificationsProcutsCompareActive
              "
              :specificationsProcutsCompareDifference="
                specificationsProcutsCompareDifference
              "
            ></CompareProducts>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import ProductsServices from "@/services/ProductsServices.js";
// import ProductsGridV2 from "@/components/product/ProductsGridV2.vue";
import CompareProducts from "@/components/compare/CompareProducts.vue";
import CompareSpecifications from "@/components/compare/CompareSpecifications.vue";
import CompareControls from "@/components/compare/CompareControls.vue";

export default {
  name: "ComparePage",

  components: {
    // ProductsGridV2,
    CompareProducts,
    CompareSpecifications,
    CompareControls,
  },

  data() {
    return {
      specificationsProcutsCompareAll: [],
      //   specificationsProcutsCompareAll: this.setSpecificationsProcutsCompareAll(),
      specificationsProcutsCompareActive: [],
      specificationsProcutsCompareDifference: [],
    };
  },

  created() {
    //   getProductsCompare
    //   this.$store.state
    //   ;

    // TEMP
    // this.$store.dispatch("getProducts"); // -
    this.$store.dispatch("fetchProducts").then(() => {
      //   console.log("fetchProducts выполнил then в компоненте "); // +
      //   console.log("this.products: ");
      //   console.log("= " + this.products[0]);
      console.log(this.products[0]); // +
      this.setSpecificationsProcutsCompareAll();
      //   this.setSpecificationsProcutsCompareActive();
      this.setSpecificationsProcutsCompareDifference();
    });
  },

  computed: {
    // productsCompare() {
    products() {
      //   return this.$store.state
      //   return this.$store.state.getProductsCompare; // undefined
      //   return this.$store.state.products_module.getProductsCompare; //
      //   return this.$store.getters.getProductsCompare;

      return this.$store.getters.getProductsCompare;
    },

    specificationsGroups() {
      return this.$store.state.products_module.specificationsGroups;
    },
    specifications() {
      return this.$store.state.products_module.specifications;
    },
  },

  methods: {
    productsCompare() {
      return this.products;
    },

    setSpecificationsProcutsCompareAll() {
      //   const productsCompareArr = this.productsCompare;
      const productsCompareArr = this.products;
      console.log("productsCompareArr: ");
      console.log(productsCompareArr);
      //   console.log(this.products); // +

      for (let i = 0; i < productsCompareArr.length; i++) {
        const productSpecsObj = productsCompareArr[i]["specificationsFull"];

        for (const property in productSpecsObj) {
          // Если нету)
          // if this.specificationsProcutsCompareAll[]
          let hasAlready = this.specificationsProcutsCompareAll.find((item) => {
            return item == property;
          });
          //   debugger;

          if (hasAlready) {
            continue;
          }

          this.specificationsProcutsCompareAll.push(property);
        }
      }

      // v2. update in store
      this.$store.dispatch(
        "setSpecificationsProcutsCompareAll",
        this.specificationsProcutsCompareAll
      );
    },

    // setSpecificationsProcutsCompareActive() {
    setSpecificationsProcutsCompareDifference() {
      //   const productsCompareArr = this.products;

      //   specificationsProcutsCompareDifference

      // проходимся по св-вам всем, если св-во NotEqual
      //// добавляем в specificationsProcutsCompareDifference

      let differenceProperies = this.specificationsProcutsCompareAll.map(
        (item) => {
          if (ProductsServices.isPropertyDifference(item, this.products))
            this.specificationsProcutsCompareDifference.push(item);
        }
      );

      // v2. update in store
      this.$store.dispatch(
        "setSpecificationsProcutsCompareDifference",
        // differenceProperies  // - это неправильно, этот массив пуст
        this.specificationsProcutsCompareDifference
      );

      return differenceProperies;
    },
  },
};
</script>

<style lang="scss" scoped></style>
