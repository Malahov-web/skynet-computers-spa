<template>
  <div class="compare__specifications-group">
    <div class="" v-if="compareModeActive == 0">
      <div class="compare__specifications-title g-subtitle h4">
        {{ specsGroupInfo.title }}:
      </div>
      <table class="compare__specifications-table">
        <tr v-for="(item, key) in specsGroup" :key="key">
          <td>
            {{ item.title || key }}

            <span
              class="tooltip-button"
              title="Нажмите чтобы увидеть подсказку"
              @click="toggleTooltip(key)"
              @close-tooltip="toggleTooltip('')"
            >
              <i class="themify themify-plus _themify-help"></i>
              <BaseTooltip
                class="asd"
                :name="key"
                :text="item.description"
                :activeTooltip="activeTooltip"
              ></BaseTooltip>
            </span>
          </td>
        </tr>
      </table>
    </div>

    <div class="" v-if="compareModeActive == 2">
      <div class="compare__specifications-title g-subtitle h4">
        {{ specsGroupInfo.title }}:
      </div>
      <table class="compare__specifications-table">
        <tr
          v-for="(item, key) in specsGroup"
          :key="key"
          v-if="isDifference(key)"
        >
          <td>
            {{ item.title || key }}

            <span
              class="tooltip-button"
              title="Нажмите чтобы увидеть подсказку"
              @click="toggleTooltip(key)"
              @close-tooltip="toggleTooltip('')"
            >
              <i class="themify themify-plus _themify-help"></i>
              <BaseTooltip
                class="asd"
                :name="key"
                :text="item.description"
                :activeTooltip="activeTooltip"
              ></BaseTooltip>
            </span>
          </td>
        </tr>
      </table>
    </div>

    <div class="" v-if="compareModeActive == 1">
      <div class="compare__specifications-title g-subtitle h4">
        {{ specsGroupInfo.title }}:
      </div>
      <table class="compare__specifications-table">
        <tr v-for="(item, key) in specsGroup" :key="key" v-if="isGeneral(key)">
          <td>
            {{ item.title || key }}

            <span
              class="tooltip-button"
              title="Нажмите чтобы увидеть подсказку"
              @click="toggleTooltip(key)"
              @close-tooltip="toggleTooltip('')"
            >
              <i class="themify themify-plus _themify-help"></i>
              <BaseTooltip
                class="asd"
                :name="key"
                :text="item.description"
                :activeTooltip="activeTooltip"
              ></BaseTooltip>
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompareSpecificationsTable",

  props: {
    specsGroup: {
      type: Object,
      default: () => {},
    },
    specsGroupInfo: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      activeTooltip: "",
    };
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
    // showTooltip(name) {
    //   this.activeTooltip = name;
    // },

    toggleTooltip(name) {
      // close
      if (this.activeTooltip == name) {
        this.activeTooltip = "";
        return;
      }
      // open
      this.activeTooltip = name;
    },

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
