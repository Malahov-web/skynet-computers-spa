<template>
  <div _class="$attrs['field-class']" _v-if="$attrs['field-class']">
    <!-- Аттр-т class добавляется к кроневому эл-ту автоматически -->
    <label v-if="label"> {{ label }} </label>
    <input
      __class="$attrs.elClass || ''"
      :class="elClass"
      :type="$attrs.type || 'text'"
      :name="$attrs.name || ''"
      :placeholder="$attrs.placeholder"
      @input="onInput"
      :value="value"
      __v-on="$listeners"
      v-on="listeners"
    />
    <slot name="after"></slot>
  </div>
</template>

<script>
import { formFieldsMixin } from "@/mixins/formFieldsMixins.js";

export default {
  name: "BaseInput",

  mixins: [formFieldsMixin],

  //   inheritAttrs: false,

  props: {
    // label: {
    //   type: [String, Number],
    //   default: "",
    // },
    value: {
      type: [String, Number],
      default: "",
    },
  },

  data() {
    return {
      // $attrs.class
      //   elClass: this.$attrs.class, // undefined
      attrs: this.$attrs,

      demoObj: {},
    };
  },

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
  //       }
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
