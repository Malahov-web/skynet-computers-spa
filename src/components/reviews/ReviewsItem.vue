<template>
  <div class="reviews__item">
    <div class="row">
      <div class="reviews-left reviews__item-header">
        <div class="reviews__item-rating">
          <BaseRating :rating="item.rating" __rating="3.7"></BaseRating>
        </div>

        <div class="reviews__item-author">
          {{ fullName }}
        </div>

        <!-- <time class="reviews__item-date" datetime="2019-04-18">18.04.2019</time> -->
        <time class="reviews__item-date" datetime="2019-04-18"
          >{{ formattedDate }}
        </time>
      </div>

      <div class="reviews-right">
        <div class="reviews__item-content">
          <div class="reviews__item-title reviews__item-title--advantages">
            <i class="themify themify-plus"></i>
            Достоинства:
          </div>
          <p class="reviews__item-text">
            {{ textAdvantages }}
          </p>
        </div>
        <div class="reviews__item-content">
          <div class="reviews__item-title reviews__item-title--limitations">
            <i class="themify themify-minus"></i>
            Недостатки:
          </div>
          <p class="reviews__item-text">
            {{ textDefects }}
          </p>
        </div>
        <div class="reviews__item-content">
          <div class="reviews__item-title">
            <i class="themify themify-comment-alt"></i>
            Общие впечатления:
          </div>
          <p class="reviews__item-text">
            {{ textGeneral }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ReviewsServices from "@/services/ReviewsServies.js";
// import BaseRating from '@/components/base/BaseRating.vue'; // Global

export default {
  name: "ReviewsItem",

  components: {
    // BaseRating
  },

  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  computed: {
    date() {
      //   return this.data

      return this.date;
    },

    fullName() {
      //   return this.item.firstname + ' ' + this.item.surname;
      return `${this.item.firstname}  ${this.item.surname}`;
    },

    //
    textAdvantages() {
      //   return this.formatReviewTextToHumanReadable(this.item.textAdvantages);
      return ReviewsServices.formatReviewTextToHumanReadable(
        this.item.textAdvantages
      );
    },
    textDefects() {
      return ReviewsServices.formatReviewTextToHumanReadable(
        this.item.textDefects
      );
    },
    textGeneral() {
      return ReviewsServices.formatReviewTextToHumanReadable(
        this.item.textGeneral
      );
    },

    formattedDate() {
      let date = this.item.date;
      //   let dateDate = new Date(date);
      //   let dateDate = new Date(2016, 0, 2); // 2 Jan 2016
      return moment(date).format("DD.MM.YYYY");
    },
  },

  methods: {
    // formatReviewTextToHumanReadable(text) {
    //   let textCharsArray = text.split(" ");
    //   let textPhrasesArray = chunk(textCharsArray, 7);
    //   let formattedText = "";
    //   for (const phrase of textPhrasesArray) {
    //     // Делаем первую букву в предложении заглавной
    //     // v lodash
    //     let firstWord = upperFirst(phrase[0]);
    //     phrase[0] = firstWord;
    //     // Добавляем точку и пробел в конце фразы
    //     let lastWordIndex = phrase.length - 1;
    //     phrase[lastWordIndex] += ". ";
    //     // Добавить форматированную строку к новому тексту
    //     formattedText += phrase.join(" ");
    //     debugger;
    //   }
    //   //   return textPhrasesArray;
    //   return formattedText.trim();
    // },
  },
};
</script>

<style lang="scss" scoped></style>
