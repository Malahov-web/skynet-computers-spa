<template>
  <div class="row news news--grid">
    <div class="mv_12 tb_6 ds_4" v-for="item in news" :key="item.title">
      <NewsItem class="asd" :item="item"></NewsItem>
    </div>
  </div>
</template>

<script>
import NewsItem from "@/components/news/NewsItem.vue";
// import NewsItem from "@/components/NewsItem.vue";

export default {
  name: "News",
  components: {
    NewsItem,
  },
  props: {
    news: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
