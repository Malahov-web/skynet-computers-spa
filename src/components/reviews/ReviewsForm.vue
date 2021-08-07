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
          <div class="row">
            <div class="mv_12 tb_6">
              <BaseTextarea
                name="text_advantages"
                elClass="textarea"
                placeholder=""
                v-model="item['textAdvantages']"
              >
                <template v-slot:before>
                  <div
                    class="reviews__item-title reviews__item-title--advantages"
                  >
                    <i class="themify themify-plus"></i>
                    Достоинства:
                  </div>
                </template>
              </BaseTextarea>
            </div>
            <div class="mv_12 tb_6">
              <BaseTextarea
                name="text_defects"
                elClass="textarea"
                placeholder=""
                v-model="item['textDefects']"
              >
                <template v-slot:before>
                  <div
                    class="reviews__item-title reviews__item-title--limitations"
                  >
                    <i class="themify themify-minus"></i>
                    Недостатки:
                  </div>
                </template>
              </BaseTextarea>
            </div>
          </div>

          <BaseTextarea
            elClass="textarea"
            :stateClass="$v.item.textGeneral.$error ? ' error ' : ''"
            name="text_general"
            placeholder=""
            v-model="item['textGeneral']"
            @blur="$v.item.textGeneral.$touch()"
          >
            <template v-slot:before>
              <div class="reviews__item-title">
                <i class="themify themify-comment-alt"></i>
                Общие впечатления:
              </div>
            </template>

            <template v-slot:after v-if="$v.item.textGeneral.$error">
              <p class="field-validation" v-if="!$v.item.textGeneral.required">
                <i>*</i>&nbsp;Это поле обязательно для заполнения
              </p>
              <p class="field-validation" v-if="!$v.item.textGeneral.minLength">
                <i>*</i>&nbsp;Минимальное длиина текста:
                {{ $v.item.textGeneral.$params.minLength.min }} символов
              </p>
              <p class="field-validation" v-if="!$v.item.textGeneral.noSpam">
                <i>*</i>&nbsp;Текст содержит слова похожие на спам
              </p>
            </template>
          </BaseTextarea>

          <!-- Inputs -->
          <BaseInput
            class="field-outer"
            elClass="field-text"
            :stateClass="validStatusClass('firstname')"
            :label="'Ваше Имя'"
            type="text"
            name="firstname"
            placeholder="Имя"
            v-model="item['firstname']"
            @blur="$v.item.firstname.$touch()"
          >
            <template v-slot:after v-if="$v.item.firstname.$error">
              <p class="field-validation" v-if="!$v.item.firstname.required">
                <i>*</i>&nbsp;Это поле обязательно для заполнения
              </p>
              <p class="field-validation" v-if="!$v.item.firstname.alpha">
                <i>*</i>&nbsp;Имя должно содержать только буквы
              </p>
            </template>
          </BaseInput>
          <!-- <p class="field-validation">
            <i>*</i>&nbsp;Это поле обязательно для заполнения
          </p> -->

          <BaseInput
            class="field-outer"
            elClass="field-text"
            :stateClass="validStatusClass('surname')"
            :label="'Ваша Фамилия'"
            type="text"
            name="surname"
            placeholder="Фамилия"
            v-model="item['surname']"
            @blur="$v.item.surname.$touch()"
          >
            <template v-slot:after v-if="$v.item.surname.$error">
              <p class="field-validation" v-if="!$v.item.surname.required">
                <i>*</i>&nbsp;Это поле обязательно для заполнения
              </p>
              <p class="field-validation" v-if="!$v.item.surname.alpha">
                <i>*</i>&nbsp;Имя должно содержать только буквы
              </p>
            </template>
          </BaseInput>

          <BaseInput
            class="field-outer"
            elClass="field-text"
            :stateClass="validStatusClass('email')"
            :label="'Email'"
            type="text"
            name="email"
            placeholder="E-mail"
            v-model="item['email']"
            @blur="$v.item.email.$touch()"
          >
            <template v-slot:after v-if="$v.item.email.$error">
              <p class="field-validation" v-if="!$v.item.email.required">
                <i>*</i>&nbsp;Это поле обязательно для заполнения
              </p>
              <p class="field-validation" v-if="!$v.item.email.email">
                <i>*</i>&nbsp;Введите корректный Email-адрес
              </p>
            </template>
          </BaseInput>

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
import { required, minLength, email, alpha } from "vuelidate/lib/validators";
import ValidationServices from "@/services/ValidationServices.js";

// const noSpam = function (str, spamWordsArray) {
// const noSpam = function (str) {
//   //   str = "";
//   //   const keywords = ["viagra", "XXX"];

//   //   let hasKeywords = keywords.reduce((accumulator, item) => {
//   //     // Если есть вхождение добавить 1
//   //     return accumulator + str.toLowerCase().includes(item.toLowerCase());
//   //   }, 0);
//   console.log("noSpam this: ");
//   console.log(str);

//   //   if (hasKeywords) {
//   //     return false;
//   //   }

//   return true;
// };

// + v1 Doc - arrow func
// const mustBeCool = (value) => value.indexOf("cool") >= 0;

// + v2 function style
// const mustBeCool = function (value) {
//   return value.indexOf("cool") >= 0;
// };

// +v3 With with normal return
// const mustBeCool = function (value) {
//   let hasCool = value.indexOf("cool") >= 0;

//   if (hasCool) {
//     return true;
//   }
//   return false;
// };

// + v4
// const mustBeCool = function (value) {
//   //   let hasCool = value.indexOf("cool") >= 0;

//   const keywords = ["viagra", "XXX"];
//   const str = value;

//   let hasKeywords = keywords.reduce((accumulator, item) => {
//     // Если есть вхождение добавить 1
//     return accumulator + str.toLowerCase().includes(item.toLowerCase());
//   }, 0);

//   if (hasKeywords) {
//     return false;
//   }
//   return true;
// };

// + v5 Prod
// const noSpam = function (str) {
//   //   let hasCool = value.indexOf("cool") >= 0;

//   //   const keywords = ["viagra", "XXX"];
//   const keywords = ValidationServices.spamWordsArray;
//   //   const str = value;

//   let hasKeywords = keywords.reduce((accumulator, item) => {
//     // Если есть вхождение добавить 1
//     return accumulator + str.toLowerCase().includes(item.toLowerCase());
//   }, 0);

//   if (hasKeywords) {
//     return false;
//   }
//   return true;
// };

// v6
// const noSpam = ValidationServices.noSpam;

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

  validations: {
    // name: '',
    // email: {
    //   required,
    //   email
    // }
    item: {
      rating: { required },
      textAdvantages: { required },
      textDefects: { required },
      textGeneral: {
        required,
        minLength: minLength(50),
        // noSpam: noSpam(this), // -
        // noSpam: noSpam(this.item.textGeneral), // -
        // noSpam: noSpam("stop sint mine XXX "), // +
        // noSpam: this.noSpam("stop sint mine XXX "), // -
        // mustBeCool: mustBeCool,
        // noSpam: noSpam, // +
        // параметры здесь передавать не нужно, значение поля будет в 1-м параметре ф-и само)
        noSpam: ValidationServices.noSpam,
      },
      firstname: { required, alpha },
      surname: { required, alpha },
      email: { required, email },
    },
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

    validStatusClass(name) {
      let statusClass = "";
      //  $v.item.surname.$error ? ' error ' : ''
      //   ? " error " : "";

      if (this.$v.item[name].$error) {
        statusClass = " error ";
      }
      if (!this.$v.item[name].$error && !this.$v.item[name].$invalid) {
        statusClass = " valid ";
      }

      return statusClass;
    },

    // noSpam(str) {
    //   //   str = "";
    //   //   const keywords = ["viagra", "XXX"];

    //   //   let hasKeywords = keywords.reduce((accumulator, item) => {
    //   //     // Если есть вхождение добавить 1
    //   //     return accumulator + str.toLowerCase().includes(item.toLowerCase());
    //   //   }, 0);
    //   console.log("noSpam this: ");
    //   console.log(str);

    //   //   if (hasKeywords) {
    //   //     return false;
    //   //   }

    //   return true;
    // },
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
