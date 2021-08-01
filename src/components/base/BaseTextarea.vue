<template>
  <div class="field-outer">
    <slot name="before"></slot>
    <textarea
      :name="$attrs.name || ''"
      :class="$attrs.elClass || ''"
      :placeholder="$attrs.placeholder"
      @input="onInput"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "BaseTextarea",

  methods: {
    onInput(event) {
      //   this.$emit("input", event.target.value);
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
