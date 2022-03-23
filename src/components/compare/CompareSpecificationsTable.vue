<template>
  <div>
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
  },
};
</script>

<style lang="scss" scoped></style>
