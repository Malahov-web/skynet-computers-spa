<template>
  <div class="view">
    <!-- Это ViewSwitcher -->
    <div
      class="view__item"
      v-for="(tab, index) in tabs"
      :key="tab.name + index"
      @click="changeView(index)"
    >
      <div class="view__item-button-outer">
        <a _href="#" class="view__item-button button">
          <i
            _class="themify themify-layout-grid2"
            :class="'themify ' + tab.icon"
          >
          </i>
        </a>
      </div>
    </div>

    <!-- <div class="view__item">
      <div class="view__item-button-outer">
        <a href="#" class="view__item-button button">
          <i class="themify themify-view-list"></i>
        </a>
      </div>
    </div> -->
  </div>
</template>

<script>
// import Name from '@/components/Name.vue';

export default {
  name: "ViewSwitcher",
  // components: {
  //     Name
  // },

  data() {
    return {
      activeTab: "ProductsGrid",

      tabs: [
        {
          name: "ProductsGrid",
          icon: "themify-layout-grid2", // grid2 || list
        },
        {
          name: "ProductsList",
          icon: "themify-view-list",
        },
      ],

      //   ["ProductsGrid", "ProductsList"],
    };
  },

  methods: {
    changeView(index) {
      this.activeTab = index;
      //   alert(this.activeTab);

      //   this.$emit("change-view", this.activeTab);
      this.$emit("change-view", this.tabs[index]["name"]);
    },
  },
};
</script>

<style lang="scss" scoped></style>
