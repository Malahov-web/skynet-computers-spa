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
              <BasePagination
                class="asd"
                :per_page="perPage"
                :posts_total="postsTotal"
                :page_current="pageNumber"
              ></BasePagination>

              <!-- <ul class="pagination">
                <li class="pagination__item pagination__item--active">
                  <span>1</span>
                </li>
                <li class="pagination__item"><a href="#">2</a></li>
                <li class="pagination__item"><a href="#">3</a></li>
                <li class="pagination__item"><a href="#">4</a></li>
                <li class="pagination__item pagination__item--next">
                  <a href="#"></a>
                </li>
              </ul> -->
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
    };
  },

  created() {
    // this.$store.dispatch("fetchNews");

    this.$store.dispatch("fetchNewsWithPagination", {
      perPage: this.perPage,
      pageNumber: this.pageNumber,
      //   pageNumber: 2,
    });
  },

  computed: {
    // v1 HardCoding / Static
    // // v2 Computed Var
    // news() {
    //   return this.$store.state.news.news; //
    // },
    // // v3
    // mapState({
    //   userName: state => state.user.name,
    //   categories: state => state.categories
    // })

    // // v6
    // someProp() {
    //   // ...
    // },
    // ...mapState(["user", "categories"]),

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
