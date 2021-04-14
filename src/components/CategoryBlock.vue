<template>
  <div class="row section-category-text">
    <div class="mv_12">
      <div class="category-text" v-html="category.description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBlock",

  props: {
    category: {
      type: Object,
      //   default:
    },
  },
};
</script>

<style lang="scss" scoped></style>
