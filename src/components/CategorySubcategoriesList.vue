<template>
  <div class="row categories">
    <div
      class="mv_12 tb_6 ds_4"
      v-for="(item, index) in subcategories"
      v-bind:key="item.id"
    >
      <CategorySubcategoriesListItem
        v-bind:item="item"
        v-bind:index="index"
      ></CategorySubcategoriesListItem>
    </div>
  </div>
</template>

<script>
// export default {};
// import Name from '@/components/Name.vue';
import CategorySubcategoriesListItem from "@/components/CategorySubcategoriesListItem.vue";

export default {
  name: "CategorySubcategoriesList",
  components: {
    CategorySubcategoriesListItem,
  },
  props: {
    subcategories: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
