<template>
  <div
    _class="select"
    __class="{ select--closed: state }"
    _v-bind:class="{ disabled: !state }"
    v-bind:class="{ 'select select--closed': !state, select: state }"
  >
    <div class="select__title" @click="changeSelectState">
      <span>
        {{ selectOptions[activeOption].title }}
      </span>

      <!-- <span v-if="0 != state">
        {{ selectOptions[activeOption].title }}
      </span>
      <span v-else>Choose item</span> -->

      <i class="themify themify-angle-right"></i>
    </div>

    <ul class="select__list" v-show="1 == state">
      <li
        class="select__list-item"
        v-for="(item, index) in selectOptions"
        :key="item.value"
        @click="setSelectActiveOption(item, index)"
      >
        {{ item.title }}
      </li>

      <!-- <li class="select__list-item">Item 1</li>
      <li class="select__list-item hover">Item 2</li>
      <li class="select__list-item">Item 3</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",

  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  data() {
    return {
      state: 0, // 0 || 1

      //   activeOption: "",
      activeOption: 0,

      selectOptions: this.options,
    };
  },
  // computed: {
  //     activeOption() {

  //     }
  // },

  methods: {
    changeSelectState() {
      this.state = !this.state;
    },

    setSelectActiveOption(option, index) {
      // 1. Set active state
      //   this.activeOption = option.value;
      this.activeOption = index;
      console.log("Click on option");
      console.log(option);

      // 2. Close Select
      this.changeSelectState();

      //   this.setSelectTitle() {

      //   }

      // 3. Transferred data up
      this.$emit("change-sort", this.activeOption);
      //   this.$emit("change-sort", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  &__list {
    z-index: 300;
    position: absolute;
    width: 100%;
    width: calc(100% + 2px);
    left: -1px;
    background-color: #fcfcfc;
    border: 1px solid #41b883;
    border-width: 0px 1px 1px 1px;
  }
}
</style>
