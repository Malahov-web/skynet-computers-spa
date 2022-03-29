<template>
  <div class="compare__specifications">
    <ProductCompareSpecificationsTable
      class="asd"
      v-for="(group, key) in specificationsValuesByGroups"
      :key="key"
      :group="group"
      :specificationsProcutsCompareDifference="
        specificationsProcutsCompareDifference
      "
    >
    </ProductCompareSpecificationsTable>
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
