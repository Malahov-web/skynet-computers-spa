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
      </div>

      <main class="main main--sidebar--left">
        <NewFull class="asd" :item="newsItemFull"></NewFull>

        <div class="row" style="display: none">
          <div class="mv_12 section__title">
            <div class="">
              <h2 class="h2">Комментарии</h2>
            </div>
          </div>
        </div>

        <div class="row" style="display: none">
          <div class="mv_12 comments-outer">
            <div class="reviews comments">
              <div class="reviews__header">
                <div class="row-flex middle">
                  <div class="reviews-left">
                    <div class="reviews__counter">
                      <span class="reviews__counter-value">3</span>
                      <span class="reviews__counter-text">комментария</span>
                    </div>
                  </div>

                  <div class="reviews-right">
                    <!-- <div class="reviews__button"> -->
                    <a
                      href="#reviews__form"
                      class="button button-buy button--long"
                      ><span>Оставить комментарий </span>
                    </a>
                    <!-- </div> -->
                  </div>
                </div>
              </div>

              <div class="reviews__content">
                <div class="reviews__list">
                  <div class="reviews__item">
                    <div class="row">
                      <div class="reviews-left reviews__item-header">
                        <div class="reviews__item-rating">
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
                        <div class="reviews__item-author">Александр Иванов</div>
                        <!-- <time class="reviews__item-date" datetime="2019-04-18">18.04.2019</time> -->
                      </div>
                      <div class="reviews-right">
                        <div class="reviews__item-content">
                          <div class="reviews__item-title">
                            <i class="themify themify-comment-alt"></i>
                            Заголовок комментария:
                          </div>
                          <p class="reviews__item-text">
                            В достоинствах описал, но еще добавлю, что мне
                            достался моноблок без SSD - диска, который я
                            установлю дополнительно в официальном сервис-центре
                            с сохранением гарантии.
                          </p>
                        </div>
                        <div class="reviews__item-content">
                          <div
                            class="reviews__item-title comments__item-title __reviews__item-title--advantages"
                          >
                            <a href="#" class="comments__item-link-answer"
                              ><i class="themify themify-comments"></i>
                              Ответить:</a
                            >
                            <time
                              class="reviews__item-date"
                              datetime="2019-04-18"
                              >2 часа назад (18.05.2019)</time
                            >
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="reviews__item comments__item--answer">
                      <div class="row">
                        <div class="reviews-left reviews__item-header">
                          <div class="reviews__item-rating">
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
                          <div class="reviews__item-author">
                            Александр Иванов
                          </div>
                          <!-- <time class="reviews__item-date" datetime="2019-04-18">18.04.2019</time> -->
                        </div>
                        <div class="reviews-right">
                          <div class="reviews__item-content">
                            <div class="reviews__item-title">
                              <i class="themify themify-comment-alt"></i>
                              Ответный комментарий:
                            </div>
                            <p class="reviews__item-text">
                              В достоинствах описал, но еще добавлю, что мне
                              достался моноблок без SSD - диска, который я
                              установлю дополнительно в официальном
                              сервис-центре с сохранением гарантии.
                            </p>
                          </div>
                          <div class="reviews__item-content">
                            <div
                              class="reviews__item-title comments__item-title __reviews__item-title--advantages"
                            >
                              <a href="#" class="comments__item-link-answer"
                                ><i class="themify themify-comments"></i>
                                Ответить:</a
                              >
                              <time
                                class="reviews__item-date"
                                datetime="2019-04-18"
                                >2 часа назад (18.05.2019)</time
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="reviews__item">
                    <div class="row">
                      <div class="reviews-left reviews__item-header">
                        <div class="reviews__item-rating">
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
                        <div class="reviews__item-author">Алевтина</div>
                        <!-- <time class="reviews__item-date" datetime="2019-04-18">17.04.2018</time> -->
                      </div>
                      <div class="reviews-right">
                        <div class="reviews__item-content">
                          <div class="reviews__item-title">
                            <i class="themify themify-comment-alt"></i>
                            Заголовок комментария:
                          </div>
                          <p class="reviews__item-text">
                            Немецкое качество и лаконичность - основные
                            преимущества модели. Покупка более чем удачная)
                          </p>
                        </div>
                        <div class="reviews__item-content">
                          <div
                            class="reviews__item-title comments__item-title __reviews__item-title--advantages"
                          >
                            <a href="#" class="comments__item-link-answer"
                              ><i class="themify themify-comments"></i>
                              Ответить:</a
                            >
                            <time
                              class="reviews__item-date"
                              datetime="2019-04-18"
                              >17.05.2019</time
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="reviews__form" id="reviews__form">
                <div class="reviews__form-header">
                  <div class="reviews__form-title g-subtitle h4">
                    Оставить отзыв
                  </div>
                </div>
                <div class="reviews__form-content">
                  <form class="reviews__form-form form--reviews">
                    <!-- <div class="field-outer reviews__form-vote">
                                        <div class="reviews__rating-average-title">
                                            Ваша оценка:
                                        </div>
                                        <div class="reviews__rating-average-rating">
                                            <div class="rating" data-value="4">
                                               <ul>
                                                   <li class="off"><span></span></li>
                                                   <li class="off"><span></span></li>
                                                   <li class="off"><span></span></li>
                                                   <li class="off"><span></span></li>
                                                   <li class="off"><span></span></li>
                                               </ul>
                                           </div>
                                        </div>                                                
                                    </div> -->
                    <div class="field-outer">
                      <label>Ваш комментарий</label>
                      <textarea name="" class="textarea"></textarea>
                    </div>
                    <div class="field-outer">
                      <label>Ваше Имя</label>
                      <input
                        type="text"
                        class="field-text"
                        placeholder="E-mail"
                      />
                    </div>
                    <div class="field-outer">
                      <label>Email</label>
                      <input
                        type="text"
                        class="field-text"
                        placeholder="Пароль"
                      />
                    </div>

                    <div class="field-outer">
                      <a href="#" class="button button-send"
                        ><span>Отправить</span></a
                      >
                    </div>
                  </form>
                </div>
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
                  <select name="select-brand" class="select">
                    <!-- <option value="" disabled>Выберите пункт</option> -->
                    <option value="">Не выбрано</option>
                    <option value="">ASUS</option>
                    <option value="">Gigabyte</option>
                    <option value="">MSI</option>
                  </select>
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
              <!-- <div class="filter__item">
                            <div class="filter__item-title">Цена</div>
                            <div class="filter__item-field">
                                <div class="range">
                                    <div class="range__inputs">
                                        <div class="range__inputs-left lefted">
                                            <input type="text" class="field-text" placeholder="500">
                                        </div>
                                        <div class="range__inputs-right righted">
                                            <input type="text" class="field-text" placeholder="95000">
                                        </div>
                                    </div>
                                    <div class="range__scale">
                                        <div class="range__handle range__handle--min">
                                            <div class="hexagon"></div>
                                        </div>
                                        <div class="range__handle range__handle--max">
                                            <div class="hexagon"></div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div> -->
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
import NewFull from "@/components/news/NewFull.vue";
// src\components\news\NewFull.vue

export default {
  name: "NewFullPage",
  components: {
    NewFull,
  },
  //   props: ['id'],
  props: ["newid"],

  created() {
    this.$store.dispatch("fetchNewsItem", this.newid);
  },

  computed: {
    newsItemFull() {
      return this.$store.state.newFull;
    },
  },
};
</script>

<style lang="scss" scoped></style>
