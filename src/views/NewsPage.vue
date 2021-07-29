<template>
  <section class="section">
    <span class="preloader" :class="preloaderClass"
      ><span>Loading..</span></span
    >
    <!-- <Preloader class="asd" :class_?="_?"></Preloader> -->

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
              <BasePagination
                class="asd"
                :per_page="perPage"
                :posts_total="postsTotal"
                :page_current="pageNumber"
              ></BasePagination>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import News from "@/components/news/News.vue";
import BasePagination from "@/components/BasePagination.vue";
//
// import { mapState } from "vuex";

export default {
  name: "NewsPage",
  components: {
    News,
    BasePagination,
  },

  data() {
    return {
      perPage: 3,
      //   pagesTotal: 4,

      preloaderClass: "",
    };
  },

  created() {
    // this.$store.dispatch("fetchNews");

    this.$store
      .dispatch("fetchNewsWithPagination", {
        perPage: this.perPage,
        pageNumber: this.pageNumber,
        //   pageNumber: 2,
      })
      .then(() => {
        this.hidePreloader();
      });
  },

  computed: {
    // v7
    // use getter

    news() {
      //   return this.$store.state.news;
      return this.$store.state.news.news; // refact: module news.js
      //   return "";
    },

    pageNumber() {
      //   return parseInt(this.$route.query.page);
      return parseInt(this.$route.query._page) || 1;
    },

    postsTotal() {
      //   return parseInt(this.$store.state.paginationPostsTotal);
      return parseInt(this.$store.state.news.paginationPostsTotal); // refact: module news.js
    },
  },

  methods: {
    hidePreloader() {
      this.preloaderClass = "hidden";
    },
  },

  // v3
  // v4
  // v5
  // v3 -
  //   computed:
  //     mapState({
  //       userName: state => state.user.name,
  //       categories: state => state.categories
  //     })
  //   },
  // v4  -
  //   computed:
  //     mapState({
  //       user: 'user',
  //       categories: 'categories'
  //     })
  //   },
  // v5 -
  //   computed:
  //     mapState( [ 'user', 'categories' ] )
  //   },
};
</script>

<style lang="scss" scoped></style>
