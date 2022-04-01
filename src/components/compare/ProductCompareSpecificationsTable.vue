<template>
  <div>
    <div v-if="compareModeActive == 0">
      <div class="compare__specifications-title g-subtitle h4">.</div>

      <table class="compare__specifications-table">
        <tr v-for="(item, key2) in specsGroup" :key="key2">
          <!-- <td>Производитель</td> -->
          <!-- Вывести класс, если isDifference(key2) -->
          <td v-bind:class="{ hover: isDifference(key2) }">
            {{ item.value }}
          </td>
        </tr>
      </table>
    </div>

    <div v-if="compareModeActive == 2">
      <div class="compare__specifications-title g-subtitle h4">.</div>

      <table class="compare__specifications-table">
        <tr
          v-for="(item, key2) in specsGroup"
          :key="key2"
          v-if="isDifference(key2)"
        >
          <!-- <td>Производитель</td> -->
          <!-- Вывести класс, если isDifference(key2) -->
          <td>
            {{ item.value }}
          </td>
        </tr>
      </table>
    </div>

    <div v-if="compareModeActive == 1">
      <div class="compare__specifications-title g-subtitle h4">.</div>

      <table class="compare__specifications-table">
        <tr
          v-for="(item, key2) in specsGroup"
          :key="key2"
          v-if="isGeneral(key2)"
        >
          <!-- <td>Производитель</td> -->
          <!-- Вывести класс, если isDifference(key2) -->
          <td>
            {{ item.value }}
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
    specsGroup: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    compareModeActive() {
      return this.$store.getters.getCompareModeActive;
    },
    specificationsProcutsCompareDifference() {
      return this.$store.getters.getSpecificationsProcutsCompareDifference;
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

    isGeneral(fieldName) {
      // "specsGroup.brand.group"
      return this.specsGroup[fieldName].group == 0 ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
