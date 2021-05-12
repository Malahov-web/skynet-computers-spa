<template>
  <ul class="pagination">
    <template v-if="page_current != 1">
      <li class="pagination__item pagination__item--prev">
        <router-link
          active-class=" "
          :to="{ name: 'NewsPage', query: { _page: page_current - 1 } }"
          rel="prev"
        ></router-link>
      </li>
    </template>

    <li
      class="pagination__item"
      v-for="item in pagesTotal"
      :key="item"
      :class="{ 'pagination__item--active': page_current == item }"
    >
      <!-- <a href="#"> {{ item }} </a> -->
      <router-link
        :class="palceholder"
        active-class=" "
        :to="{ name: 'NewsPage', query: { _page: item } }"
        >{{ item }}</router-link
      >
    </li>

    <template v-if="page_current != pagesTotal">
      <li class="pagination__item pagination__item--next">
        <router-link
          active-class=" "
          :to="{ name: 'NewsPage', query: { _page: page_current + 1 } }"
          rel="prev"
        ></router-link>
      </li>
    </template>
  </ul>

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
</template>

<script>
export default {
  name: "BasePagination",

  props: {
    per_page: {
      type: Number,
      default: 1,
    },
    // pages_total: {
    //   type: Number,
    //   default: 1,
    // },
    posts_total: {
      type: Number,
      default: 1,
    },

    page_current: {
      type: Number,
      default: 1,
    },
  },

  created() {
    console.log("pages_total");
    console.log(this.pages_total);
  },

  data() {
    return {
      p: "value",
    };
  },

  computed: {
    pagesTotal() {
      //   return this.posts_total / this.per_page;
      return Math.ceil(this.posts_total / this.per_page);

      //   return this.data
    },
  },
};
</script>

<style lang="scss" scoped></style>
