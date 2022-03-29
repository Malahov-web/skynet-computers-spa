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
              :specificationsProcutsCompareDifference="
                specificationsProcutsCompareDifference
              "
            ></CompareSpecifications>

            <div class="compare__specifications" style="display: none">
              <div class="compare__specifications-title g-subtitle h4">
                Общие характеристики:
              </div>
              <table class="compare__specifications-table">
                <tr>
                  <td>Производитель</td>
                  <!-- <td>Apple</td> -->
                </tr>
                <tr>
                  <td>Страна производитель</td>
                  <!-- <td>Китай</td> -->
                </tr>
                <tr>
                  <td>Операционная система</td>
                  <!-- <td>Mac OS</td> -->
                </tr>
                <tr>
                  <td>Оперативная память</td>
                  <!-- <td>8 Гб</td> -->
                </tr>
                <tr>
                  <td>Объем памяти видеокарты</td>
                  <!-- <td>512 Гб</td> -->
                </tr>
                <tr>
                  <td>Разрешение экрана</td>
                  <!-- <td>2560 х 1440</td> -->
                </tr>
                <tr>
                  <td>Постоянная память</td>
                  <!-- <td>1 Тб HDD + 512 Гб SSD</td> -->
                </tr>
              </table>

              <div class="compare__specifications-title g-subtitle h4">
                Экран:
              </div>
              <table class="compare__specifications-table">
                <tr>
                  <td>
                    Диагональ
                    <span class="tooltip-button"
                      ><i class="themify themify-plus _themify-help"></i
                    ></span>
                  </td>
                  <!-- <td>Apple</td> -->
                </tr>

                <tr>
                  <td class="hover">
                    Разрешение экрана
                    <span
                      class="tooltip-button"
                      title="Нажмите чтобы увидеть подсказку"
                      ><i class="themify themify-plus _themify-help"></i
                    ></span>
                  </td>
                  <!-- <td>Apple</td> -->
                </tr>

                <tr>
                  <td>
                    Тип матрицы
                    <span class="tooltip-button"
                      ><i class="themify themify-plus _themify-help"></i
                    ></span>
                  </td>
                  <!-- <td>Apple</td> -->
                </tr>
                <tr>
                  <td>
                    Подсветка
                    <span class="tooltip-button"
                      ><i class="themify themify-plus _themify-help"></i
                    ></span>
                  </td>
                  <!-- <td>Apple</td> -->
                </tr>
                <tr>
                  <td>
                    Время отклика
                    <span class="tooltip-button"
                      ><i class="themify themify-plus _themify-help"></i
                    ></span>
                  </td>
                  <!-- <td>Apple</td> -->
                </tr>
              </table>
            </div>
          </div>

          <div class="mv_12 mh_6 tb_8 ds_9 compare-right">
            <CompareProducts
              class="compare__products"
              v-bind:products="products"
              :specificationsProcutsCompareAll="specificationsProcutsCompareAll"
              :specificationsProcutsCompareActive="
                specificationsProcutsCompareActive
              "
              :specificationsProcutsCompareDifference="
                specificationsProcutsCompareDifference
              "
            ></CompareProducts>

            <div
              class="row compare__products products-grid"
              style="display: none"
            >
              <div class="mv_12 mh_12 tb_6 ds_4 product-outer">
                <div class="product product--viewed">
                  <div class="product__remove-outer">
                    <a href="#" class="product__remove">
                      <i class="themify themify-close"></i>
                    </a>
                  </div>
                  <a href="product.html" class="product__image"
                    ><img src="uploads/products-grid/0185414_3.JPG" alt=""
                  /></a>
                  <div class="product__title-outer">
                    <a href="product.html" class="product__title"
                      >Материнская плата ASUS M5A78L-M LX3</a
                    >
                  </div>
                  <div class="product__rating-outer">
                    <div class="product__rating rating" data-value="4">
                      <ul>
                        <li class="on"><span></span></li>
                        <li class="on"><span></span></li>
                        <li class="on"><span></span></li>
                        <li class="on"><span></span></li>
                        <li class="off"><span></span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="product__footer __row">
                    <div class="product__price-outer">
                      <div class="product__price">
                        <span class="product__price-value">3 530</span>
                        <span class="product__price-currency">₽</span>
                      </div>
                    </div>
                    <div class="product__button-outer">
                      <a href="#" class="button button-buy button-buy--small">
                        <i class="themify themify-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                  <!-- <div class="product__price-outer">
                                <div class="product__price">
                                    <span class="product__price-value">3 530</span>
                                    <span class="product__price-currency">₽</span>
                                </div>
                            </div> -->
                  <!-- <div class="product__button-outer">
                                <a href="" class="product__button button button-buy"><span>В корзину</span></a>
                            </div> -->
                  <div class="product__availability product__availability">
                    наличие:
                    <span
                      class="product__availability-value product__availability-value--in-stock"
                      >в магазине</span
                    >
                  </div>
                </div>
                <div class="compare__specifications">
                  <div class="compare__specifications-title g-subtitle h4">
                    .
                  </div>
                  <table class="compare__specifications-table">
                    <tr>
                      <!-- <td>Производитель</td> -->
                      <td>Apple</td>
                    </tr>
                    <tr>
                      <!-- <td>Страна производитель</td> -->
                      <td>Китай</td>
                    </tr>
                    <tr>
                      <!-- <td>Операционная система</td> -->
                      <td>Mac OS</td>
                    </tr>
                    <tr>
                      <!-- <td>Оперативная память</td> -->
                      <td>8 Гб</td>
                    </tr>
                    <tr>
                      <!-- <td>Объем памяти видеокарты</td> -->
                      <td>512 Гб</td>
                    </tr>
                    <tr>
                      <!-- <td>Разрешение экрана</td> -->
                      <td>2560 х 1440</td>
                    </tr>
                    <tr>
                      <!-- <td>Постоянная память</td> -->
                      <td>1 Тб HDD + 512 Гб SSD</td>
                    </tr>
                  </table>

                  <div class="compare__specifications-title g-subtitle h4">
                    .
                  </div>
                  <table class="compare__specifications-table">
                    <tr>
                      <!-- <td>Производитель</td> -->
                      <td>23.8"</td>
                    </tr>
                    <tr>
                      <!-- <td>Страна производитель</td> -->
                      <td class="hover">1920x1080</td>
                    </tr>
                    <tr>
                      <!-- <td>Операционная система</td> -->
                      <td>IPS</td>
                    </tr>
                    <tr>
                      <!-- <td>Оперативная память</td> -->
                      <td>WLED</td>
                    </tr>
                    <tr>
                      <!-- <td>Объем памяти видеокарты</td> -->
                      <td>4 мс</td>
                    </tr>
                  </table>
                </div>
              </div>

              <div class="mv_12 mh_12 tb_6 ds_4 product-outer">
                <div class="product product--viewed">
                  <div class="product__remove-outer">
                    <a href="#" class="product__remove">
                      <i class="themify themify-close"></i>
                    </a>
                  </div>
                  <a href="product.html" class="product__image"
                    ><img src="uploads/products-grid/0185414_3.JPG" alt=""
                  /></a>
                  <div class="product__title-outer">
                    <a href="product.html" class="product__title"
                      >Материнская плата ASUS M5A78L-M LX3</a
                    >
                  </div>
                  <div class="product__rating-outer">
                    <div class="product__rating rating" data-value="4">
                      <ul>
                        <li class="on"><span></span></li>
                        <li class="on"><span></span></li>
                        <li class="on"><span></span></li>
                        <li class="on"><span></span></li>
                        <li class="off"><span></span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="product__footer __row">
                    <div class="product__price-outer">
                      <div class="product__price">
                        <span class="product__price-value">3 530</span>
                        <span class="product__price-currency">₽</span>
                      </div>
                    </div>
                    <div class="product__button-outer">
                      <a href="#" class="button button-buy button-buy--small">
                        <i class="themify themify-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                  <!-- <div class="product__price-outer">
                                <div class="product__price">
                                    <span class="product__price-value">3 530</span>
                                    <span class="product__price-currency">₽</span>
                                </div>
                            </div> -->
                  <!-- <div class="product__button-outer">
                                <a href="" class="product__button button button-buy"><span>В корзину</span></a>
                            </div> -->
                  <div class="product__availability product__availability">
                    наличие:
                    <span
                      class="product__availability-value product__availability-value--in-stock"
                      >в магазине</span
                    >
                  </div>
                </div>
                <div class="compare__specifications">
                  <div class="compare__specifications-title g-subtitle h4">
                    .
                  </div>
                  <table class="compare__specifications-table">
                    <tr>
                      <!-- <td>Производитель</td> -->
                      <td>Apple</td>
                    </tr>
                    <tr>
                      <!-- <td>Страна производитель</td> -->
                      <td>Китай</td>
                    </tr>
                    <tr>
                      <!-- <td>Операционная система</td> -->
                      <td>Mac OS</td>
                    </tr>
                    <tr>
                      <!-- <td>Оперативная память</td> -->
                      <td>8 Гб</td>
                    </tr>
                    <tr>
                      <!-- <td>Объем памяти видеокарты</td> -->
                      <td>512 Гб</td>
                    </tr>
                    <tr>
                      <!-- <td>Разрешение экрана</td> -->
                      <td>2560 х 1440</td>
                    </tr>
                    <tr>
                      <!-- <td>Постоянная память</td> -->
                      <td>1 Тб HDD + 512 Гб SSD</td>
                    </tr>
                  </table>

                  <div class="compare__specifications-title g-subtitle h4">
                    .
                  </div>
                  <table class="compare__specifications-table">
                    <tr>
                      <!-- <td>Производитель</td> -->
                      <td>23.8"</td>
                    </tr>
                    <tr>
                      <!-- <td>Страна производитель</td> -->
                      <td class="hover">1920x1080</td>
                    </tr>
                    <tr>
                      <!-- <td>Операционная система</td> -->
                      <td>IPS</td>
                    </tr>
                    <tr>
                      <!-- <td>Оперативная память</td> -->
                      <td>WLED</td>
                    </tr>
                    <tr>
                      <!-- <td>Объем памяти видеокарты</td> -->
                      <td>4 мс</td>
                    </tr>
                  </table>
                </div>
              </div>

              <div class="mv_12 mh_12 tb_6 ds_4 product-outer">
                <div class="product"></div>
              </div>
            </div>
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

      return differenceProperies;
    },
  },
};
</script>

<style lang="scss" scoped></style>
