<template>
  <div>
    <div class="row">
      <div class="mv_12">
        <div class="">
          <h1 class="h1 page-title">
            {{ item["item-title"] }}
          </h1>
          <div class="page-date date">{{ item["item-date"] }}</div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="mv_12">
        <article class="content">
          <figure>
            <!-- <img src="uploads/news/news_item_image_4_fullsize.jpg" alt="" /> -->
            <img
              :src="'../uploads/news/' + item['item-image']"
              :alt="item['item-title']"
            />
            <figcaption>Подпись к изображению новости © 2019</figcaption>
          </figure>

          <p>
            {{ item["item-text-long"] }}
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewFull",

  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  //   components: {
  //       NewFullPage
  //   },
};
</script>

<style lang="scss" scoped></style>
