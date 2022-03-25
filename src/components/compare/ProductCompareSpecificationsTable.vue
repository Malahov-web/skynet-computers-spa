<template>
  <div>
    <div v-if="compareModeActive == 0">
      <div class="compare__specifications-title g-subtitle h4">.</div>

      <table class="compare__specifications-table">
        <tr v-for="(value, key2) in group" :key="key2">
          <!-- <td>Производитель</td> -->
          <!-- Вывести класс, если isDifference(key2) -->
          <td v-bind:class="{ hover: isDifference(key2) }">
            {{ value }}
          </td>
        </tr>
      </table>
    </div>

    <div v-if="compareModeActive == 2">
      <div class="compare__specifications-title g-subtitle h4">.</div>

      <table class="compare__specifications-table">
        <tr
          v-for="(value, key2) in group"
          :key="key2"
          v-if="isDifference(key2)"
        >
          <!-- <td>Производитель</td> -->
          <!-- Вывести класс, если isDifference(key2) -->
          <td>
            {{ value }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCompareSpecificationsTable",

  props: {
    compareModeActive: {
      type: Number,
      defalut: 0,
    },

    group: {
      type: Object,
      default: () => {},
    },

    specificationsProcutsCompareDifference: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  methods: {
    isDifference(fieldName) {
      // isDifference;
      // Если есть в массиве specificationsProcutsCompareDifference

      let hasInArray = this.specificationsProcutsCompareDifference.find(
        (item) => item == fieldName
      );

      return hasInArray;
    },
  },
};
</script>

<style lang="scss" scoped></style>
