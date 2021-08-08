<template>
  <div class="field-outer" :class="$attrs['stateClass']">
    <slot name="before"></slot>
    <label v-if="label"> {{ label }} </label>
    <textarea
      :name="$attrs.name || ''"
      old__class="$attrs.elClass || ''"
      :class="elClass"
      :placeholder="$attrs.placeholder"
      @input="onInput"
      v-on="listeners"
    ></textarea>

    <slot name="after"></slot>
  </div>
</template>

<script>
import { formFieldsMixin } from "@/mixins/formFieldsMixins.js";

export default {
  name: "BaseTextarea",

  mixins: [formFieldsMixin],

  //   inheritAttrs: false,

  //   props: {
  //     label: {
  //       type: [String, Number],
  //       default: "",
  //     },
  //   },

  //   methods: {
  //     onInput(event) {
  //       this.$emit("input", event.target.value);
  //     },
  //   },

  //   computed: {
  //     elClass() {
  //       let className = this.$attrs.elClass;

  //       if (this.$attrs["stateClass"]) {
  //         className += " " + this.$attrs["stateClass"];
  //         // className += " mystr";
  //       }
  //       //   $attrs["stateClass"];
  //       //   return this.data
  //       return className;
  //     },

  //     listeners() {
  //       return {
  //         ...this.$listeners,
  //         input: this.updateValue,
  //       };
  //     },
  //   },
};
</script>

<style lang="scss" scoped></style>
