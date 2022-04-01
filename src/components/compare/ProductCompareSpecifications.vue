<template>
  <div class="compare__specifications">
    <ProductCompareSpecificationsTable
      class="asd"
      v-for="(specsGroup, key) in specificationsValuesByGroups"
      :key="key"
      :specsGroup="specsGroup"
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

    specificationsByGroups: {
      type: Object,
      default: () => {
        return {};
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
        console.log("specificationsByGroups");
        specificationsValuesByGroups[key] = {};

        let field = specificationsByGroups[key];
        for (const fieldName in field) {
          fieldName;
          // v0.
          //   specificationsValuesByGroups[key][fieldName] = "asd"; // +

          // v1.
          //   specificationsValuesByGroups[key][fieldName] =
          //     specificationsFull[fieldName].value; // +  копирем только значение value

          // v2.
          specificationsValuesByGroups[key][
            fieldName
          ] = this.specificationsFull[fieldName]; // + копируем весь объект спеки
        }
      }

      return specificationsValuesByGroups;
    },
  },
};
</script>

<style lang="scss" scoped></style>
