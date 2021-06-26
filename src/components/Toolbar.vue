<template>
  <div class="toolbar">
    <div class="toolbar__sort sort">
      <div class="sort">
        <div class="sort__item">
          <div class="sort__item-title">Сортировать</div>
          <div class="sort__item-field">
            <BaseSelect
              :options="filter.sort"
              v-on:change-sort="updateSort"
            ></BaseSelect>
          </div>
        </div>

        <div class="sort__item sort__item--pagination">
          <div class="sort__item-title">Показывать по</div>
          <div class="sort__item-field">
            <BaseSelect
              :options="filter.show"
              v-on:change-sort="updateShow"
            ></BaseSelect>
          </div>
        </div>
      </div>
    </div>

    <div class="toolbar__view">
      <ViewSwitcher class="asd" @change-view="updateView"></ViewSwitcher>
    </div>
  </div>
</template>

<script>
import ViewSwitcher from "@/components/ViewSwitcher.vue";

export default {
  name: "Toolbar",
  components: {
    ViewSwitcher,
  },

  props: {
    filter: {
      type: Object,
      //   default:
    },
  },


  data() {
    return {
      toolbarFilter: this.filter, // Обновляются оба, т.к. здесь происходит передача по ссылке?
    };
  },

  methods: {
    updateSort(activeOption) {
      console.log("activeOption");
      console.log(activeOption);
      //   this.filter.state.sort = activeOption;
      this.toolbarFilter.state.sort = activeOption;
    },

    updateShow(activeOption) {
      console.log(activeOption);
      //   this.filter.state.show = activeOption;
      this.toolbarFilter.state.show = activeOption;
    },

    updateView(activeOption) {
      //   this.toolbarFilter.state.view = activeOption;
      this.toolbarFilter.state.view = activeOption;

      this.$emit("update-view", activeOption);
      //   alert(activeOption);
    },
  },
};
</script>

<style lang="scss" scoped></style>
