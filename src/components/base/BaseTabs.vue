<template>
  <div class="tabs js-tabs">
    <ul class="tabs__controls js-tabs__controls">
      <li
        class="tabs__controls-button"
        v-for="item in tabs"
        :key="item.name"
        @click="changeActiveTab(item.name)"
        :class="{ active: activeTab == item.name }"
      >
        <a href="#" @click.prevent>
          {{ item.title }}
        </a>
      </li>

      <!-- <li class="tabs__controls-button active" data-target="#description">
        <a href="#">Описание</a>
      </li>      
      <li class="tabs__controls-button" data-target="#specs">
        <a href="#">Характеристики</a>
      </li>
      <li class="tabs__controls-button" data-target="#reviews">
        <a href="#">Отзывы</a>
      </li> -->
    </ul>
    <div class="tabs__content js-tabs__content">
      <div
        class="tabs__content-slot tabs__content-item"
        v-for="slotname in slotsNames"
        :id="slotname"
        :key="slotname"
        v-show="activeTab == slotname"
      >
        <slot :name="slotname"></slot>
      </div>

      <!-- <slot :name="slotName" v-for="slotName in slots" :key="slotName"></slot> -->
    </div>

    <!-- <slot name="description"></slot> -->
  </div>

  <!-- <div class="tabs js-tabs">
    <ul class="tabs__controls js-tabs__controls">
      <li class="tabs__controls-button active" data-target="#description">
        <a href="#">Описание</a>
      </li>
      <li class="tabs__controls-button" data-target="#specs">
        <a href="#">Характеристики</a>
      </li>
      <li class="tabs__controls-button" data-target="#reviews">
        <a href="#">Отзывы</a>
      </li>
      <li class="tabs__controls-button" data-target="#delivery">
        <a href="#">Доставка и оплата</a>
      </li>
    </ul>
    <div class="tabs__content js-tabs__content">
      <div class="tabs__content-item js-tabs__content-item" id="descr"></div>

      <div class="tabs__content-item js-tabs__content-item" id="specs"></div>

      <div class="tabs__content-item js-tabs__content-item" id="reviews"></div>

      <div class="tabs__content-item js-tabs__content-item" id="delivery"></div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "BaseTabs",

  props: {
    tabs: {
      type: Array,
      default: () => {
        return [];
      },
    },
    initialActiveTab: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      //   activeTab: "",
      activeTab: this.initialActiveTab,
    };
  },

  //   data() {
  //     return {
  //       tabs: [
  //         {
  //           name: "description",
  //           title: "Описание",
  //           content: "description",
  //         },
  //         {
  //           name: "specs",
  //           title: "Характеристики",
  //           content: "description",
  //         },
  //         {
  //           name: "reviews",
  //           title: "Отзывы",
  //           content: "description",
  //         },
  //       ],
  //     };
  //   },

  computed: {
    currentTabs() {
      return this.tabs;
    },

    slotsNames() {
      //   return ["one", "two", "three"];
      //   return "123";

      let slotsNames = [];

      //   this.tabs.forEach(element => {
      this.tabs.forEach(function (item) {
        slotsNames.push(item.name);
      });

      return slotsNames;
    },
  },

  methods: {
    changeActiveTab(activeTabName) {
      //   return "";

      this.activeTab = activeTabName;
    },
  },
};
</script>

<style lang="scss" scoped>
// :data-target="item"
// v:for="item in tabs"
// :key="item"
// @click="changeActiveTab"
</style>
