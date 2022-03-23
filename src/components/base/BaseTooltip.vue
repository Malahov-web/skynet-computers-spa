<template>
  <div class="tooltip" v-if="isActive" @click="close">
    <a href="#" class="tooltip__remove">
      <i class="themify themify-close"></i>
    </a>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "BaseTooltip",

  props: {
    text: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    activeTooltip: {
      type: String,
      default: "",
    },
  },

  computed: {
    isActive() {
      return this.name == this.activeTooltip ? true : false;
    },
  },

  methods: {
    close() {
      //   this.$emit("input", event.target.value);
      this.$emit("close-tooltip");
    },
  },
};
</script>

<style lang="scss" scoped></style>
