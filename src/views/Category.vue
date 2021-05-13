<template>
  <div>
    <section class="section">
      <div class="container">
        <main class="main main--sidebar--left">
          <div class="row">
            <div class="mv_12">
              <div class="">
                <h1 class="h1 page-title">Категория</h1>
              </div>
            </div>
          </div>

          <CategoryBlock class="ad" v-bind:category="category"></CategoryBlock>

          <!-- <div class="row section-category-text">
            <div class="mv_12">
              <div class="category-text">
                <p>
                  Есть много вариантов Lorem Ipsum, но большинство из них имеет
                  не всегда приемлемые модификации, например, юмористические
                  вставки или слова, которые даже отдалённо не напоминают
                  латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы
                  наверняка не хотите какой-нибудь шутки, скрытой в середине
                  абзаца.
                </p>
              </div>
            </div>
          </div> -->

          <div class="row section-categories">
            <div class="mv_12 section__block">
              <div class="categories-outer">
                <CategorySubcategoriesList
                  :subcategories="subcategories"
                ></CategorySubcategoriesList>
              </div>
            </div>
          </div>

          <div class="row section-toolbar">
            <div class="mv_12 section__block">
              <Toolbar :filter="filter" @update-view="updateView"></Toolbar>
            </div>
          </div>

          <div class="row section-products" v-if="activeView == 'ProductsGrid'">
            <div class="mv_12 section__title">
              <h2 class="h1">Products Grid</h2>
            </div>

            <div class="mv_12">
              <ProductsGrid v-bind:products="products"></ProductsGrid>
            </div>
          </div>

          <div
            class="row section-products"
            __style="display: none"
            v-if="activeView == 'ProductsList'"
          >
            <div class="mv_12 section__title">
              <h2 class="h1">Products List</h2>
            </div>

            <div class="mv_12">
              <ProductsList v-bind:products="products"></ProductsList>
            </div>
          </div>

          <div class="row section-pagination" _style="display: none">
            <div class="mv_12 section__block">
              <div class="pagination-outer">
                <BasePagination class="asd"></BasePagination>
              </div>
            </div>
          </div>
        </main>

        <aside class="sidebar">
          <div class="sidebar-inner">
            <div class="filter-outer">
              <div class="filter-title-outer">
                <div class="filter-title js-trigger" data-target="filter">
                  <span
                    >Подбор по параметрам<i
                      class="users__item-icon themify themify-angle-right"
                    ></i
                  ></span>
                </div>
              </div>
              <div class="filter" id="filter">
                <div class="filter__item">
                  <div class="filter__item-title">Название</div>
                  <div class="filter__item-field">
                    <input
                      type="text"
                      class="field-text"
                      placeholder="Название"
                    />
                  </div>
                </div>
                <div class="filter__item">
                  <div class="filter__item-title">Производитель</div>
                  <div class="filter__item-field">
                    <select name="select-brand" class="select">
                      <!-- <option value="" disabled>Выберите пункт</option> -->
                      <option value="">Не выбрано</option>
                      <option value="">ASUS</option>
                      <option value="">Gigabyte</option>
                      <option value="">MSI</option>
                    </select>
                    <!-- <div class="select select--closed">
                                    <div class="select__title">Не выбрано<i class="themify  themify-angle-right"></i></div>
                                    <ul class="select__list">
                                        <li class="select__list-item">Item 1</li>
                                        <li class="select__list-item">Item 2</li>
                                        <li class="select__list-item">Item 3</li>
                                    </ul>
                                </div> -->
                  </div>
                </div>
                <div class="filter__item">
                  <div class="filter__item-title">Тип разъема</div>
                  <!-- <div class=""> -->
                  <div class="filter__item-field">
                    <input
                      type="checkbox"
                      class="field-checkbox"
                      name="checkbox_group_1"
                      id="checkbox_1"
                    />
                    <label for="checkbox_1">ASUS</label>
                  </div>
                  <div class="filter__item-field">
                    <input
                      type="checkbox"
                      class="field-checkbox hover"
                      name="checkbox_group_2"
                      id="checkbox_2"
                    />
                    <label for="checkbox_2" class="hover">Gigabyte</label>
                  </div>
                  <div class="filter__item-field">
                    <input
                      type="checkbox"
                      class="field-checkbox"
                      name="checkbox_group_3"
                      id="checkbox_3"
                      checked=""
                    />
                    <label for="checkbox_3" class="checked">MSI</label>
                  </div>
                  <!-- </div> -->
                </div>
                <div class="filter__item">
                  <div class="filter__item-title">Количество ядер</div>
                  <!-- <div class=""> -->
                  <div class="filter__item-field">
                    <input
                      type="radio"
                      class="field-radio"
                      name="radio_group_1"
                      id="radio_1"
                    />
                    <label for="radio_1">2</label>
                  </div>
                  <div class="filter__item-field">
                    <input
                      type="radio"
                      class="field-radio"
                      name="radio_group_1"
                      id="radio_2"
                    />
                    <label for="radio_2" class="hover">4</label>
                  </div>
                  <div class="filter__item-field">
                    <input
                      type="radio"
                      class="field-radio"
                      name="radio_group_1"
                      id="radio_3"
                      checked=""
                    />
                    <label for="radio_3" class="">6</label>
                  </div>
                  <!-- </div> -->
                </div>

                <div class="filter__item">
                  <!-- <div class="filter__item-title">Производитель</div> -->
                  <div class="filter__item-field">
                    <a href="#" class="button button-buy"
                      ><span>Применить</span></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="brands-menu-outer">
            <ul class="brands-menu">
              <li><a href="#">AMD</a></li>
              <li><a href="#">ASUS</a></li>
              <li class="active"><a href="#">GigaByte </a></li>
              <li><a href="#">Inno3D</a></li>
              <li><a href="#">MSI</a></li>
              <li><a href="#">Palit</a></li>
              <li><a href="#">Sapphire</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryBlock from "@/components/CategoryBlock.vue";
import CategorySubcategoriesList from "@/components/CategorySubcategoriesList.vue";
import ProductsGrid from "@/components/ProductsGrid.vue";
import Toolbar from "@/components/Toolbar.vue";
import ProductsList from "@/components/ProductsList.vue";

export default {
  name: "Category",

  components: {
    CategoryBlock,
    CategorySubcategoriesList,
    ProductsGrid,
    Toolbar,
    ProductsList,
  },

  data() {
    return {
      category: {
        title: "PC",
        description:
          "<p>Персона́льный компью́тер, ПК (англ. personal computer, PC), ПЭВМ (персональная электронно-вычислительная машина) — однопользовательская (предназначенная для использования одним пользователем) ЭВМ, имеющая эксплуатационные характеристики бытового прибора и универсальные функциональные возможности. ПК может быть стационарным (чаще всего настольным) или портативным (лептоп, планшет).</p><br><p>Согласно ГОСТ 27201-87, ПК применяются как средства массовой автоматизации (в основном для создания на их основе автоматизированных рабочих мест) в социальной и производственных сферах деятельности в различных областях народного хозяйства и предназначенные для пользователей, не обладающих специальными знаниями в области вычислительной техники и программирования. </p>",
        image: "uploads/categories/comp.png",
      },

      filter: {
        state: {
          sort: 1,
          show: 0,
          view: 0,
        },

        // sort: [
        //   ("0": {
        //     title: "Newest",
        //     value: "new",
        //   }),
        //   ("1": {
        //     title: "Most popular",
        //     value: "popular",
        //   }),
        //   ("2": {
        //     title: "Price increase",
        //     value: "increase",
        //   }),
        //   ("3": {
        //     title: "Price decrease",
        //     value: "decrease",
        //   }),
        // ],

        // sort: {
        //     "0": "Newest",
        //     "0": "Newest",
        //     "0": "Newest",
        //     "0": "Newest",
        // },
        sort: [
          {
            title: "Newest",
            value: "new",
          },
          {
            title: "Most popular",
            value: "popular",
          },
          {
            title: "Price increase",
            value: "increase",
          },
          {
            title: "Price decrease",
            value: "decrease",
          },
        ],

        show: [
          {
            title: "12",
            value: "12",
          },
          {
            title: "24",
            value: "24",
          },
          {
            title: "48",
            value: "48",
          },
        ],

        view: [
          {
            component: "ProductsGrid",
            value: "0",
          },
          {
            component: "ProductsList",
            value: "1",
          },
        ],
      },

      activeView: "ProductsGrid",
    };
  },

  // this.$store.dispatch('fetchTasksWithPagination', {
  created() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchSubcategories");
  },

  computed: {
    products_module() {
      //   return this.$store.products_modules;
      //   return this.$store.state.products_modules;
      return this.$store.state.products_module;
      //   return this.$store.state.products; // v3
    },

    // direct request to store
    // products() {
    //   return this.products_module.products;
    // },

    // getter request to store
    products() {
      //   console.log("this.$store: ");
      //   console.log(this.$store);
      //   return this.$store.getters.products_module.getProducts; // WRONG !
      return this.$store.getters.getProducts; // RIGHT!!!
    },

    // getter request to store
    subcategories() {
      return this.$store.getters.getSubcategories; // RIGHT!!!
    },

    //   computed: mapState({
    //     task: (state) => state.tasks.task,
    //   }),
  },

  methods: {
    updateView(activeView) {
      this.activeView = activeView;
    },
  },
};
</script>

<style lang="scss" scoped></style>
