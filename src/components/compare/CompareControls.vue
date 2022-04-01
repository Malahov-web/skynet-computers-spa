<template>
  <div class="compare__tabs tabs">
    <ul class="tabs__controls js-tabs__controls">
      <li
        class="tabs__controls-button"
        :data-target="mode['name']"
        v-for="(mode, key) in compareModes"
        :key="mode['name'] + key"
        @click.prevent="setCompareMode(key)"
        :class="{ active: key == compareModeActive }"
      >
        <a href="#">{{ mode["title"] }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CompareControls",

  //   props: {
  //     //   propName: {
  //     //       type: Number,
  //     //       default:
  //     //   },
  //   },

  data() {
    return {
      //   compareModeActive: 0,
      compareModes: {
        0: {
          name: "all",
          title: "Все параметры",
        },
        1: {
          name: "general",
          title: "Основные",
        },
        2: {
          name: "difference",
          title: "Различия",
        },
      },
    };
  },

  computed: {
    compareModeActive() {
      return this.$store.getters.getCompareModeActive;
    },
  },

  methods: {
    setCompareMode(key) {
      // v1. local comp
      //   this.compareModeActive = key;

      // v2. store
      //   this.$store.dispatch("setCompareMode", key);

      // v3. store + local comp (when tabs in own comp)
      this.compareModeActive = key;
      this.$store.dispatch("setCompareMode", key);
    },
  },
};
</script>

<style lang="scss" scoped></style>
