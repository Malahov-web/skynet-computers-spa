<template>
  <section class="section">
    <div class="container">
      <div class="topline">
        <div class="breadcrumbs-outer">
          <ul class="breadcrumbs">
            <li class="breadcrumbs__item"><a href="index.html">Главная</a></li>
            <li class="breadcrumbs__item"><a href="news.html">новости</a></li>
            <li class="breadcrumbs__item"><span>Моноблок Apple iMac</span></li>
          </ul>
        </div>
        <!-- <h1 class="h1 page-title">Моноблок Apple iMac</h1> -->
      </div>

      <main class="main main--sidebar--left">
        <div class="row">
          <div class="mv_12">
            <div class="">
              <h1 class="h1 page-title">Ошибка 404! Старница не найдена..</h1>
              <!-- <div class="page-date date">07.09.2019</div> -->
            </div>
          </div>
        </div>

        <div class="row">
          <div class="mv_12">
            <article class="content">
              <!-- <figure>
                <img src="uploads/news/news_item_image_4_fullsize.jpg" alt="" />
                <figcaption>Подпись к изображению новости © 2019</figcaption>
              </figure> -->

              <p>Запрашиваемая вами страница не найдена на сервере</p>
              <p><a href="#">На главную</a></p>

              <hr />
            </article>
          </div>
        </div>

        <div class="_container section__title">
          <div class="row">
            <div class="mv_12">
              <h2 class="h1">Categories</h2>
            </div>
          </div>

          <div class="row section-categories">
            <div class="mv_12 section__block">
              <div class="categories-outer">
                <CategorySubcategoriesList
                  :subcategories="subcategories"
                ></CategorySubcategoriesList>
              </div>
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
                  <div class="selectric-wrapper selectric-select">
                    <div class="selectric-hide-select">
                      <select name="select-brand" class="select" tabindex="-1">
                        <!-- <option value="" disabled>Выберите пункт</option> -->
                        <option value="">Не выбрано</option>
                        <option value="">ASUS</option>
                        <option value="">Gigabyte</option>
                        <option value="">MSI</option>
                      </select>
                    </div>
                    <div class="selectric">
                      <span class="label">Не выбрано</span
                      ><b class="button">▾</b>
                    </div>
                    <div class="selectric-items" tabindex="-1">
                      <div class="selectric-scroll">
                        <ul>
                          <li data-index="0" class="selected">Не выбрано</li>
                          <li data-index="1" class="">ASUS</li>
                          <li data-index="2" class="">Gigabyte</li>
                          <li data-index="3" class="last">MSI</li>
                        </ul>
                      </div>
                    </div>
                    <input class="selectric-input" tabindex="0" />
                  </div>
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

        <!-- <div class="sidebar-inner"> -->
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
        <!-- </div> -->
      </aside>
    </div>
  </section>
</template>

<script>
// TODO: add Last viewed products block

// import Name from "@/components/Name.vue";
// import CategoryBlock from "@/components/CategoryBlock.vue";
import CategorySubcategoriesList from "@/components/CategorySubcategoriesList.vue";

export default {
  name: "Error404",
  components: {
    // CategoryBlock,
    CategorySubcategoriesList,
  },

  created() {
    // this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchSubcategories");
  },

  computed: {
    // getter request to store
    subcategories() {
      return this.$store.getters.getSubcategories; // RIGHT!!!
    },
  },
};
</script>

<style lang="scss" scoped></style>
