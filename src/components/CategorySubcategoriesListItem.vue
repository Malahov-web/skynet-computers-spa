<template>
  <div
    __class="categories__item categories__item-"
    __v-bind:class="itemClass + index * 2"
    v-bind:class="itemColorClass(index)"
  >
    <div class="categories__item-title-outer h3">
      <a href="#" class="categories__item-title">{{ item.title }}</a>
    </div>
    <div class="categories__item-link-outer">
      <a href="#" class="categories__item-link"
        >смотреть все<i class="themify themify-angle-right"></i
      ></a>
    </div>
    <div class="categories__item-image">
      <img _src="" alt="" v-bind:src="item.image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySubcategoriesListItem",
  props: {
    index: Number,
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      itemClass: "categories__item categories__item-",
    };
  },
  methods: {
    itemColorClass(index) {
      //   return parseInt(index) + 1;

      if (index > 12) {
        index = index - 12;
      }

      index *= 2;

      if (0 == index) {
        index = 1;
      }
      return "categories__item categories__item-" + index;
    },
  },
};
</script>

<style lang="scss" scoped></style>
