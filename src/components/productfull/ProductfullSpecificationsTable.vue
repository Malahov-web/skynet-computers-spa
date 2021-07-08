<template>
  <div class="productfull__specifications">
    <table class="productfull__specifications-table">
      <tbody>
        <tr
          v-for="(item, key) in specifications"
          :key="item.title"
          :data-property="key"
        >
          <td>{{ item.title }}</td>
          <td>{{ item.value }}</td>
        </tr>

        <tr>
          <td>Страна производитель</td>
          <td>Китай</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductfullSpecificationsTable",

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
