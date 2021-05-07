<template>
  <div class="reviews comments">
    <div class="reviews__header" style="display: none">
      <div class="row-flex middle">
        <div class="reviews-left">
          <div class="reviews__counter">
            <span class="reviews__counter-value">3</span>
            <span class="reviews__counter-text">комментария</span>
          </div>
        </div>
        <div class="reviews-right">
          <a href="#reviews__form" class="button button-buy button--long"
            ><span>Оставить комментарий </span>
          </a>
        </div>
      </div>
    </div>

    <div class="reviews__content">
      <div class="reviews__list" style="display: none">
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
                  <i class="themify themify-comment-alt"></i> Заголовок
                  комментария:
                </div>
                <p class="reviews__item-text">
                  В достоинствах описал, но еще добавлю, что мне достался
                  моноблок без SSD - диска, который я установлю дополнительно в
                  официальном сервис-центре с сохранением гарантии.
                </p>
              </div>
              <div class="reviews__item-content">
                <div
                  class="reviews__item-title comments__item-title __reviews__item-title--advantages"
                >
                  <a href="#" class="comments__item-link-answer"
                    ><i class="themify themify-comments"></i> Ответить:</a
                  >
                  <time class="reviews__item-date" datetime="2019-04-18"
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
                <div class="reviews__item-author">Александр Иванов</div>
                <!-- <time class="reviews__item-date" datetime="2019-04-18">18.04.2019</time> -->
              </div>
              <div class="reviews-right">
                <div class="reviews__item-content">
                  <div class="reviews__item-title">
                    <i class="themify themify-comment-alt"></i> Ответный
                    комментарий:
                  </div>
                  <p class="reviews__item-text">
                    В достоинствах описал, но еще добавлю, что мне достался
                    моноблок без SSD - диска, который я установлю дополнительно
                    в официальном сервис-центре с сохранением гарантии.
                  </p>
                </div>
                <div class="reviews__item-content">
                  <div
                    class="reviews__item-title comments__item-title __reviews__item-title--advantages"
                  >
                    <a href="#" class="comments__item-link-answer"
                      ><i class="themify themify-comments"></i> Ответить:</a
                    >
                    <time class="reviews__item-date" datetime="2019-04-18"
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
                  <i class="themify themify-comment-alt"></i> Заголовок
                  комментария:
                </div>
                <p class="reviews__item-text">
                  Немецкое качество и лаконичность - основные преимущества
                  модели. Покупка более чем удачная)
                </p>
              </div>
              <div class="reviews__item-content">
                <div
                  class="reviews__item-title comments__item-title __reviews__item-title--advantages"
                >
                  <a href="#" class="comments__item-link-answer"
                    ><i class="themify themify-comments"></i> Ответить:</a
                  >
                  <time class="reviews__item-date" datetime="2019-04-18"
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
        <div class="reviews__form-title g-subtitle h4">Добавить новость</div>
      </div>
      <div class="reviews__form-content">
        <form class="reviews__form-form form--reviews">
          <div class="field-outer">
            <label>Заголовок новости</label>
            <input
              type="text"
              class="field-text"
              placeholder=""
              v-model="item['item-title']"
            />
          </div>

          <div class="field-outer">
            <label>Текст новости</label>
            <textarea
              name=""
              class="textarea"
              v-model="item['item-text']"
            ></textarea>
          </div>

          <div class="field-outer">
            <label>Добавить изображение</label>
            <!-- <input type="text" class="field-text" placeholder="E-mail" /> -->
            <input
              type="file"
              id="input"
              multiple
              _v-model="item['item-image']"
            />
          </div>

          <div class="field-outer">
            <label>Ваше Имя</label>
            <input
              type="text"
              class="field-text"
              placeholder="Автор"
              v-model="item['item-author']"
            />
          </div>
          <div class="field-outer">
            <label>Email</label>
            <input
              type="text"
              class="field-text"
              placeholder="E-mail"
              v-model="item['item-author-email']"
            />
          </div>

          <div class="field-outer">
            <a href="#" class="button button-send" @click="createNewsItem"
              ><span>Отправить</span></a
            >
          </div>
        </form>
      </div>
    </div>

    <div class="reviews__header" v-if="hasSent">
      <div class="row-flex middle">
        <div class="_reviews-left mv_12 _tb_6">
          <div class="reviews__counter">
            <span class="reviews__counter-text" v-if="addedSuccessfull"
              >Запись добавлена успешно</span
            >
            <span class="reviews__counter-text" v-else
              >Ошибка! Запись добавить не удалось</span
            >
          </div>
        </div>
        <div class="_reviews-right mv_12 _tb_6" v-if="addedSuccessfull">
          <span>Перейти на страницу новой</span>

          <a _href="#reviews__form" class="button button-buy button--long"
            ><span>Перейти на страницу новой</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewAdd",

  data() {
    return {
      item: {},
      // this.item.id
      hasSent: 1,
      addedSuccessfull: 1,
      createdNewsItemID: 0,
    };
  },

  methods: {
    name() {},

    generateID() {
      // let id = Math.floor(Math.random() * 10000000)
      return Math.floor(Math.random() * 10000000);
    },

    // setCreatedNewsItemID(id) {
    //   this.createdNewsItemID = id;
    // },

    // goToNewPage() {
    //   this.$router.push({
    //     name: "NewFullPage",
    //     params: { newid: this.createdNewsItemID },
    //   });
    // },

    createNewsItem() {
      let id = this.generateID();
      this.item.id = id;

      this.$store
        .dispatch("addNewsItem", this.item)

        .then(() => {
          this.hasSent = 1;
          this.addedSuccessfull = 1;
          //   this.setCreatedNewsItemID(this.item.id);
          //   this.createdNewsItemID = this.item.id;

          this.$router.push({
            // name: "Category",

            name: "NewFullPage",
            // params: { newid: this.item.id },
            params: { newid: 1 },
          });

          // this.event = this.resetTaskObject()
          this.item = {};
        })
        .catch(() => {
          this.hasSent = 1;
          this.addedSuccessfull = 0;
          console.log("There was a problem creating your new.");
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
