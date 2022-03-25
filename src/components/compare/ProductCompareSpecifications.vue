<template>
  <div class="compare__specifications">
    <ProductCompareSpecificationsTable
      class="asd"
      v-for="(group, key) in specificationsValuesByGroups"
      :key="key"
      :compareModeActive="compareModeActive"
      :group="group"
      :specificationsProcutsCompareDifference="
        specificationsProcutsCompareDifference
      "
    >
    </ProductCompareSpecificationsTable>

    <div
      style="display: none"
      v-if="compareModeActive == 0"
      class=""
      v-for="(group, key) in specificationsValuesByGroups"
      :key="key"
    >
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

    <div
      style="display: none"
      v-if="compareModeActive == 2"
      class=""
      v-for="(group, key) in specificationsValuesByGroups"
      :key="key"
    >
      <div class="compare__specifications-title g-subtitle h4">.</div>

      <table class="compare__specifications-table">
        <tr
          v-for="(value, key2) in group"
          :key="key2"
          v-if="isDifference(key2)"
        >
          <!-- <td>Производитель</td> -->
          <!-- Вывести класс, если isDifference(key2) -->
          <td v-bind:class="{ __hover: isDifference(key2) }">
            {{ value }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import ProductCompareSpecificationsTable from "@/components/compare/ProductCompareSpecificationsTable.vue";

export default {
  name: "ProductCompareSpecifications",

  components: {
    ProductCompareSpecificationsTable,
  },
  props: {
    specificationsFull: {
      type: Object,
      default: () => {
        return {};
      },
    },

    // specificationsValuesByGroups: {
    //   type: Object,
    //   default: () => {
    //     return {};
    //   },
    // },

    specificationsByGroups: {
      type: Object,
      default: () => {
        return {};
      },
    },

    specificationsProcutsCompareDifference: {
      type: Array,
      default: () => {
        return [];
      },
    },

    compareModeActive: {
      type: Number,
      defalut: 0,
    },
  },

  computed: {
    specificationsValuesByGroups() {
      return this.setSpecificationsValuesByGroups();
    },
  },

  methods: {
    setSpecificationsValuesByGroups() {
      // проходимся по свойтвам
      // для каждого - берем по ключу такое же из другого объекта

      let specificationsByGroups = this.specificationsByGroups;
      let specificationsFull = this.specificationsFull;
      let specificationsValuesByGroups = {};

      for (const key in specificationsByGroups) {
        //   if (Object.hasOwnProperty.call(object, key)) {
        //       const element = object[key];
        //   }
        console.log("specificationsByGroups");
        specificationsValuesByGroups[key] = {};

        let field = specificationsByGroups[key];
        for (const fieldName in field) {
          fieldName;
          //   specificationsValuesByGroups[key][fieldName] = "asd"; // +

          specificationsValuesByGroups[key][fieldName] =
            specificationsFull[fieldName].value;

          //   specificationsValuesByGroups[key][
          //     fieldName
          //   ] = this.specificationsFull[fieldName];
        }
      }

      return specificationsValuesByGroups;
    },

    isDifference(fieldName) {
      // isDifference;
      // Если есть в массиве specificationsProcutsCompareDifference
      // if (condition) {

      // }

      let hasInArray = this.specificationsProcutsCompareDifference.find(
        (item) => item == fieldName
      );

      return hasInArray;
    },
  },
};
</script>

<style lang="scss" scoped>
/*
    <div class="compare__specifications-title g-subtitle h4">.</div>
    <table class="compare__specifications-table">
      <tr>
        <!-- <td>Производитель</td> -->
        <td>23.8"</td>
      </tr>
      <tr>
        <!-- <td>Страна производитель</td> -->
        <td class="hover">1920x1080</td>
      </tr>
    </table>
    */
</style>
