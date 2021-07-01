<template>
  <div class="productfull__specifications">
    <div class="productfull__specifications g-subtitle h4">Характеристики:</div>

    <ul class="productfull__specifications-list">
      <li
        class="productfull__specifications-list-item"
        v-for="item in specifications"
      >
        <div class="productfull__specifications-list-item-name">
          <span>{{ item["title"] }} </span>
        </div>
        <div class="productfull__specifications-list-item-value">
          {{ item["value"] }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductfullSpecifications",

  props: {
    specifications: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
