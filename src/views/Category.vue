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
              <div class="toolbar">
                <div class="toolbar__sort sort">
                  <div class="sort">
                    <div class="sort__item">
                      <div class="sort__item-title">Сортировать</div>
                      <div class="sort__item-field">
                        <select name="select-sort" class="select">
                          <option value="">Новые</option>
                          <option value="">Популярные</option>
                          <option value="">Цена по возрастанию</option>
                          <option value="">Цена по убыванию</option>
                        </select>
                        <!-- <div class="select select--closed">
                                            <div class="select__title">Новые<i class="themify  themify-angle-right"></i></div>
                                            <ul class="select__list">
                                                <li class="select__list-item">Item 1</li>
                                                <li class="select__list-item">Item 2</li>
                                                <li class="select__list-item">Item 3</li>
                                            </ul>
                                        </div> -->
                      </div>
                    </div>
                    <div class="sort__item sort__item--pagination">
                      <div class="sort__item-title">Показывать по</div>
                      <div class="sort__item-field">
                        <select name="select-pages" class="select">
                          <!-- <option value="" disabled>Показывать</option> -->
                          <option value="">12</option>
                          <option value="">24</option>
                          <option value="">48</option>
                        </select>
                        <!-- <div class="select select--closed">
                                            <div class="select__title">12<i class="themify  themify-angle-right"></i></div>
                                            <ul class="select__list">
                                                <li class="select__list-item">Item 1</li>
                                                <li class="select__list-item">Item 2</li>
                                                <li class="select__list-item">Item 3</li>
                                            </ul>
                                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="toolbar__view">
                  <div class="view">
                    <div class="view__item">
                      <div class="view__item-button-outer">
                        <a href="#" class="view__item-button button">
                          <i class="themify themify-layout-grid2"></i>
                        </a>
                      </div>
                    </div>
                    <div class="view__item">
                      <div class="view__item-button-outer">
                        <a href="#" class="view__item-button button">
                          <i class="themify themify-view-list"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row section-products">
            <div class="mv_12 section__title">
              <h2 class="h1">Products Grid</h2>
            </div>

            <div class="mv_12">
              <ProductsGrid v-bind:products="products"></ProductsGrid>
            </div>
          </div>

          <div class="row section-products" style="display: none">
            <div class="mv_12 section__title">
              <h2 class="h1">Products List</h2>
            </div>

            <div class="mv_12">
              <div class="row row-line top products-list">
                <div class="mv_12 mh_12 tb_12 ds_12 product-outer">
                  <div class="product">
                    <a href="product.html" class="product__image"
                      ><img src="uploads/products-grid/0185414_3.JPG" alt=""
                    /></a>

                    <div class="product__content">
                      <div class="product__title-outer">
                        <a href="product.html" class="product__title"
                          >Материнская плата ASUS M5A78L-M LX3</a
                        >
                      </div>
                      <div class="product__parameters">
                        <ul class="product__parameters-list">
                          <li>AMD 760G + SB710</li>
                          <li>2*DDR3</li>
                          <li>PCI-E16x</li>
                          <li>SVGA</li>
                        </ul>
                      </div>

                      <div class="product__rating--outer">
                        <div class="product__rating rating"></div>
                      </div>
                      <div class="product__price-outer">
                        <div class="product__price">
                          <span class="product__price-value">3 530</span>
                          <span class="product__price-currency">₽</span>
                        </div>
                      </div>
                      <div class="product__button-outer">
                        <a href="" class="product__button button button-buy"
                          ><span>В корзину</span></a
                        >
                      </div>
                    </div>

                    <div class="product__meta">
                      <div class="product__meta-inner">
                        <div class="product__code">
                          код: <span class="product__code-value">181350</span>
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
                        <div
                          class="product__availability product__availability"
                        >
                          наличие:
                          <span
                            class="product__availability-value product__availability-value--in-stock"
                            >в магазине</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mv_12 mh_12 tb_12 ds_12 product-outer">
                  <div class="product">
                    <a href="product.html" class="product__image"
                      ><img src="uploads/products-grid/0282409_4.jpg" alt=""
                    /></a>

                    <div class="product__content">
                      <div class="product__title-outer">
                        <a href="product.html" class="product__title"
                          >Материнская плата ASUS M5A78L-M LX3</a
                        >
                      </div>
                      <div class="product__parameters">
                        <ul class="product__parameters-list">
                          <li>AMD 760G + SB710</li>
                          <li>2*DDR3</li>
                          <li>PCI-E16x</li>
                          <li>SVGA</li>
                        </ul>
                      </div>

                      <div class="product__rating--outer">
                        <div class="product__rating rating"></div>
                      </div>
                      <div class="product__price-outer">
                        <div class="product__price">
                          <span class="product__price-value">3 530</span>
                          <span class="product__price-currency">₽</span>
                        </div>
                      </div>
                      <div class="product__button-outer">
                        <a href="" class="product__button button button-buy"
                          ><span>В корзину</span></a
                        >
                      </div>
                    </div>

                    <div class="product__meta">
                      <div class="product__meta-inner">
                        <div class="product__code">
                          код: <span class="product__code-value">181350</span>
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
                        <div
                          class="product__availability product__availability"
                        >
                          наличие:
                          <span
                            class="product__availability-value product__availability-value--in-stock"
                            >в магазине</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mv_12 mh_12 tb_12 ds_12 product-outer">
                  <div class="product">
                    <a href="product.html" class="product__image"
                      ><img src="uploads/products-grid/0647699_01.png" alt=""
                    /></a>

                    <div class="product__content">
                      <div class="product__title-outer">
                        <a href="product.html" class="product__title"
                          >Материнская плата ASUS M5A78L-M LX3</a
                        >
                      </div>
                      <div class="product__parameters">
                        <ul class="product__parameters-list">
                          <li>AMD 760G + SB710</li>
                          <li>2*DDR3</li>
                          <li>PCI-E16x</li>
                          <li>SVGA</li>
                        </ul>
                      </div>

                      <div class="product__rating--outer">
                        <div class="product__rating rating"></div>
                      </div>
                      <div class="product__price-outer">
                        <div class="product__price">
                          <span class="product__price-value">3 530</span>
                          <span class="product__price-currency">₽</span>
                        </div>
                      </div>
                      <div class="product__button-outer">
                        <a href="" class="product__button button button-buy"
                          ><span>В корзину</span></a
                        >
                      </div>
                    </div>

                    <div class="product__meta">
                      <div class="product__meta-inner">
                        <div class="product__code">
                          код: <span class="product__code-value">181350</span>
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
                        <div
                          class="product__availability product__availability"
                        >
                          наличие:
                          <span
                            class="product__availability-value product__availability-value--in-stock"
                            >в магазине</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row section-pagination" style="display: none">
            <div class="mv_12 section__block">
              <div class="pagination-outer">
                <ul class="pagination">
                  <li class="pagination__item pagination__item--active">
                    <span>1</span>
                  </li>
                  <li class="pagination__item"><a href="#">2</a></li>
                  <li class="pagination__item"><a href="#">3</a></li>
                  <li class="pagination__item"><a href="#">4</a></li>
                  <li class="pagination__item pagination__item--next">
                    <a href="#"></a>
                  </li>
                </ul>
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

export default {
  name: "Category",

  components: {
    CategoryBlock,
    CategorySubcategoriesList,
    ProductsGrid,
  },

  data() {
    return {
      category: {
        title: "PC",
        description:
          "<p>Персона́льный компью́тер, ПК (англ. personal computer, PC), ПЭВМ (персональная электронно-вычислительная машина) — однопользовательская (предназначенная для использования одним пользователем) ЭВМ, имеющая эксплуатационные характеристики бытового прибора и универсальные функциональные возможности. ПК может быть стационарным (чаще всего настольным) или портативным (лептоп, планшет).</p><br><p>Согласно ГОСТ 27201-87, ПК применяются как средства массовой автоматизации (в основном для создания на их основе автоматизированных рабочих мест) в социальной и производственных сферах деятельности в различных областях народного хозяйства и предназначенные для пользователей, не обладающих специальными знаниями в области вычислительной техники и программирования. </p>",
        image: "uploads/categories/comp.png",
      },

      products: {
        1: {
          id: "01910527",
          title: 'Монитор 23.8" DELL S2421HN',
          image: "uploads/productfull/DELL-S2421HN-black.jpg",
          diagonal: 23.8,
          brand: "dell",
          brandImage: "uploads/brands/dell.webp",
          availability: 1, // в магазине || ожидается || нет
          description:
            "Элегантный дизайн с тонкой рифленой текстурой на задней панели придает монитору Dell S2421HN неповторимый внешний вид. Он привносит гармоничное сочетание великолепного стиля и качества в любое пространство. <br>Благодаря трехсторонней сверхтонкой рамке вы можете наслаждаться превосходной четкостью изображения на 23,8-дюймовом мониторе с разрешением <b>Full HD</b> (1920 x 1080).",
          //   propery: 00000,
          price: 9490,
          priceSale: 7990,

          quantity: 9,

          specificationsShort: {
            diagonal: {
              title: "Диагональ",
              value: 23.8,
            },
            dimension: {
              title: "Разрешение экрана",
              // value: '1920x1080 Full HD',
              value: "1920x1080 ",
            },
            matrixType: {
              title: "Тип матрицы",
              value: "IPS",
            },
            backlight: {
              title: "Подсветка",
              value: "WLED",
            },
            responseTime: {
              title: "Время отклика",
              value: 4,
            },
          },

          variants: [
            {
              variantId: 119105271,
              variantColor: "black",
              variantColorValue: "#41b883",
              variantImage: "uploads/productfull/DELL-S2421HN-black.jpg",
            },
            {
              variantId: 119105272,
              variantColor: "silver",
              variantColorValue: "#41b883",
              variantImage: "uploads/productfull/DELL-S2421HN-silver.jpg",
            },
            {
              variantId: 119105271,
              variantColor: "white",
              variantColorValue: "#41b883",
              variantImage:
                "uploads/productfull/product_full_image_dell_08_image_1.jpg",
            },
          ],

          rating: 4.7,
          reviews: [{}, {}],
        },
        2: {
          id: "01910538",
          title: 'Монитор ASUS VG258QR 24.5"',
          diagonal: 24.5,
          brand: "ASUS",
          brandImage: "uploads/brands/asus.webp",
          availability: 2, // в магазине || ожидается || нет
          description:
            "Asus VG258QR – модель для офиса и дома. 24,5-дюймовый экран поддерживает разрешение 1920х1080 пикселей (стандарт Full HD) и отображает четкую, детализированную картинку, которая имеет реалистичные цвета. Время отклика матрицы составляет 165 Гц, за счет чего изображение не мерцает, и не создается большая нагрузка на зрение.<br>Широкоформатный Asus VG258QR поставляется на устойчивой пластиковой подставке, которую можно регулировать по наклону и высоте, а также вращать, переводя монитор в портретный режим. Модель оснащена акустической системой и внутренним блоком питания. В корпусе есть монтажные отверстия для крепления VESA.",
          //   propery: 00000,
          price: 23000,
          priceSale: 21990,

          quantity: 20,

          specificationsShort: {
            diagonal: {
              title: "Диагональ",
              value: 24.5,
            },
            dimension: {
              title: "Разрешение экрана",
              // value: '1920x1080 Full HD',
              value: "1920x1080 ",
            },
            matrixType: {
              title: "Тип матрицы",
              value: "TN",
            },
            backlight: {
              title: "Подсветка",
              value: "Flicker-Free",
            },
            responseTime: {
              title: "Время отклика",
              value: 1,
            },
          },

          variants: [
            {
              variantId: 219105271,
              variantColor: "black",
              variantColorValue: "#41b883",
              variantImage: "uploads/productfull/DELL-S2421HN-black.jpg",
            },
            {
              variantId: 219105272,
              variantColor: "silver",
              variantColorValue: "#41b883",
              variantImage: "uploads/productfull/DELL-S2421HN-silver.jpg",
            },
            {
              variantId: 219105271,
              variantColor: "white",
              variantColorValue: "#41b883",
              variantImage:
                "uploads/productfull/product_full_image_dell_08_image_1.jpg",
            },
          ],

          rating: 4.2,
          reviews: [{}, {}],
        },
      },

      subcategories: [
        {
          id: 11,
          title: "Компьютеры",
          image: "uploads/categories/comp.png",
        },
        {
          id: 12,
          title: "Ноутбуки",
          image: "uploads/categories/nout.png",
        },
        {
          id: 14,
          title: "Наушники",
          image: "uploads/categories/phone.png",
        },
        {
          id: 15,
          title: "Принтеры, Сканеры, МФУ",
          image: "uploads/categories/mfu.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
