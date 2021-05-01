<template>
  <div class="news__item">
    <div class="news__item-image-outer">
      <div class="news__item-image">
        <img
          :src="'uploads/news/' + item['item-image']"
          :alt="item['item-title']"
        />
      </div>
    </div>
    <div class="news__item-content">
      <h3 class="news__item-title-outer">
        <a href="news__item.html" class="news__item-title">
          {{ item["item-title"] }}
        </a>
      </h3>
      <div class="news__item-text">
        {{ item["item-text"] }}
      </div>
    </div>
    <div class="news__item-footer">
      <div class="news__item-link-outer">
        <!-- <a href="news__item.html" class="news__item-link"
          >подробнее<i class="themify themify-angle-right"></i
        ></a> -->

        <router-link
          class="news__item-link"
          :to="{ name: 'NewFullPage', params: { newid: item.id } }"
          >подробнее</router-link
        >
      </div>
      <time class="news__item-date" :datetime="item['item-datetime']">{{
        item["item-date"]
      }}</time>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsItem",

  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
