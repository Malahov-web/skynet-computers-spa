<template>
  <div class="reviews__form" id="reviews__form" __style="display: none">
    <div class="reviews__form-header">
      <div class="reviews__form-title g-subtitle h4">Оставить отзыв</div>
    </div>
    <div class="reviews__form-content">
      <form class="reviews__form-form form--reviews">
        <div class="field-outer reviews__form-vote">
          <div class="reviews__rating-average-title">Ваша оценка:</div>
          <div class="reviews__rating-average-rating">
            <BaseSetRating class="asd" @set-rating="setRating"></BaseSetRating>
            <!-- <div class="rating" data-value="4">
              <ul>
                <li class="off"><span></span></li>
                <li class="off"><span></span></li>
                <li class="off"><span></span></li>
                <li class="off"><span></span></li>
                <li class="off"><span></span></li>
              </ul>
            </div> -->
          </div>
        </div>

        <template class="asd" v-if="1" __style="display: none">
          <!-- Textareas -->
          <div class="field-outer">
            <div class="row">
              <div class="mv_12 tb_6">
                <!-- <label>Ваш комментарий</label> -->
                <div
                  class="reviews__item-title reviews__item-title--advantages"
                >
                  <i class="themify themify-plus"></i>
                  Достоинства:
                </div>
                <textarea
                  name="text_advantages"
                  class="textarea"
                  v-model="item['textAdvantages']"
                ></textarea>
              </div>
              <div class="mv_12 tb_6">
                <div
                  class="reviews__item-title reviews__item-title--limitations"
                >
                  <i class="themify themify-minus"></i>
                  Недостатки:
                </div>
                <textarea
                  name="text_defects"
                  class="textarea"
                  v-model="item['textDefects']"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- <div class="field-outer">
            <div class="reviews__item-title">
              <i class="themify themify-comment-alt"></i>
              Общие впечатления:
            </div>
            <textarea
              name="text_general"
              class="textarea"
              v-model="item['textGeneral']"
            >
            </textarea>
          </div> -->

          <BaseTextarea
            name="text_general"
            elClass="textarea"
            placeholder=""
            v-model="item['textGeneral']"
          >
            <template v-slot:before>
              <div class="reviews__item-title">
                <i class="themify themify-comment-alt"></i>
                Общие впечатления:
              </div>
            </template>
          </BaseTextarea>

          <!-- Inputs -->
          <div class="field-outer">
            <label>Ваше Имя</label>
            <input
              name="firstname"
              type="text"
              class="field-text"
              placeholder="Имя"
              v-model="item['firstname']"
            />
          </div>

          <BaseInput
            _field-class="field-outer"
            _class="'field-text'"
            elClass="field-text"
            :label="'Title'"
            type="фыв"
            placeholder="Имя"
            class="field-text"
          ></BaseInput>

          <div class="field-outer">
            <label>Ваша Фамилия</label>
            <input
              name="surname"
              type="text"
              class="field-text"
              placeholder="Фамилия"
              v-model="item['surname']"
            />
          </div>

          <div class="field-outer">
            <label>Email</label>
            <input
              name="email"
              type="text"
              class="field-text"
              placeholder="E-mail"
              v-model="item['email']"
            />
          </div>

          <div class="field-outer">
            <a
              href="#"
              class="button button-send"
              @click.prevent="createReviewsItem"
              ><span>Отправить</span></a
            >
          </div>
        </template>
      </form>
    </div>
  </div>
</template>

<script>
// @click.prevent>
export default {
  name: "ReviewsForm",
  // :productId="productId"
  props: {
    productId: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      item: {},
      //   hasSent: 1,
      //   addedSuccessfull: 1,
      //   createdNewsItemID: 0,
    };
  },

  methods: {
    generateID() {
      return Math.floor(Math.random() * 10000000);
    },

    createReviewsItem() {
      let id = this.generateID();
      this.item.id = id;
      this.item.productId = this.productId;

      //   this.$store.dispatch("addNewsItem", this.item);
      this.$store.dispatch("addReviewsItem", this.item);

      // .then(() => {
      //   this.hasSent = 1;
      //   this.addedSuccessfull = 1;

      //   this.$router.push({
      //     // name: "Category",

      //     name: "NewFullPage",
      //     params: { newid: this.item.id },
      //   });

      //   // this.event = this.resetTaskObject()
      //   this.item = {};
      // })
      // .catch(() => {
      //   this.hasSent = 1;
      //   this.addedSuccessfull = 0;
      //   console.log("NewAdd: There was a problem creating your new.");
      // });
    },

    setRating(value) {
      this.item.rating = value;
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "styles_skynet_computers"; //
// @import "./src/assets/src/scss/_styles_skynet_computers.scss"; //
// @import "./src/assets/src/scss/styles_skynet_computers"; //
// @import "./src/assets/src/scss/vars"; //
// @import "./src/assets/src/scss/mixins"; //
// @import "./src/assets/src/scss/mixins"; //

// C:\HTML 2\Vue.js\projects\skynet-computers-app\src\assets\src\scss\_styles_skynet_computers.scss
// C:\HTML 2\Vue.js\projects\skynet-computers-app\src\components\reviews\ReviewsForm.vue

// src\assets\src\scss\_styles_skynet_computers.scss
// src\components\reviews\ReviewsForm.vue

// @import "vars";
// @import "mixins";
// @import "base"; // base,
</style>
