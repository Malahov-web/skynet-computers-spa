<template>
  <div class="product__parameters">
    <ul class="product__parameters-list">
      <li
        v-for="item in productParameters"
        :key="item.title"
        :title="item.title"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductParameters",
  props: {
    productParameters: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
