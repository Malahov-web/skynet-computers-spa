<template>
  <section class="section">
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="mv_12">
            <div class="">
              <h1 class="h1 page-title">Новости</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-news">
      <div class="container">
        <div class="news-outer">
          <News class="asd" :news="news"></News>
        </div>
      </div>

      <div class="container">
        <div class="row section-pagination">
          <div class="mv_12">
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
      </div>
    </section>
  </section>
</template>

<script>
import News from "@/components/news/News.vue";

export default {
  name: "NewsPage",
  components: {
    News,
  },

  created() {
    this.$store.dispatch("fetchNews");
  },

  computed: {
    news() {
      return this.$store.state.news;
    },

    //     userFullName() {
    //       return this.$store.state.user.name + ' ' + this.$store.state.user.surname
    //     },
  },
};
</script>

<style lang="scss" scoped></style>
