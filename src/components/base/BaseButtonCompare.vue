<template>
  <div @click="addToCompare">
    <i class="themify themify-bar-chart"></i>
    <span class="" v-if="!isInCompare">Сравнение</span>
    <span class="" v-else>Удалить из сравнения</span>
  </div>
</template>

<script>
export default {
  name: "BaseButtonCompare",

  props: {
    productId: {
      type: Number,
      default: 0,
    },

    isInCompare: {
      type: Boolean,
      default: false,
    },
  },

  computed: {},

  methods: {
    addToCompare() {
      //   this.$store.dispatch("fetchReviews", this.newid);
      //   alert();

      if (this.isInCompare) {
        // удалить
        this.$store.dispatch("removeFromCompare", this.productId);
        return;
      }
      // добавить
      this.$store.dispatch("addToCompare", this.productId);
    },
  },
};
</script>

<style lang="scss" scoped></style>
