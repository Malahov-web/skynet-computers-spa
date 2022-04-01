<template>
  <div>
    <CompareSpecificationsTable
      class="asd"
      v-for="(specsGroup, key) in specificationsByGroups"
      :key="'group-' + key"
      :specsGroup="specsGroup"
      :specsGroupInfo="specificationsGroups[key]"
    ></CompareSpecificationsTable>
  </div>
</template>

<script>
// import groupBy from "lodash/groupBy";
import ProductsServices from "@/services/ProductsServices.js";
import CompareSpecificationsTable from "@/components/compare/CompareSpecificationsTable.vue";

export default {
  name: "CompareSpecifications",

  components: {
    CompareSpecificationsTable,
  },

  props: {
    specificationsProcutsCompareActive: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  computed: {
    specifications() {
      return this.$store.state.products_module.specifications;
    },

    specificationsGroups() {
      return this.$store.state.products_module.specificationsGroups;
    },

    specificationsByGroups() {
      return this.groupProperties();
    },
  },

  methods: {
    // name() {},

    groupProperties() {
      let specs = this.specifications; // +

      // [ 'diagonal', 'prop2', 'brand']
      //
      let groupedSpecs;
      //   let groupedSpecs = this.groupByField(specs); // my custom methodgroupByField() is for Arrays
      //   groupedSpecs = groupBy(specs, "group"); // - Lodash method for Arrays, возвращает эл-ты сгруппированые в массивы, у нас теряется имя-ключ
      groupedSpecs = ProductsServices.groupObjectByField(specs, "group");
      return groupedSpecs;
    },
  },
};
</script>

<style lang="scss" scoped></style>
