<template>
  <div _class="$attrs['field-class']" _v-if="$attrs['field-class']">
    <!-- Аттр-т class добавляется к кроневому эл-ту автоматически -->
    <label v-if="label"> {{ label }} </label>
    <input
      :class="$attrs.elClass || ''"
      :type="$attrs.type || 'text'"
      :name="$attrs.name || ''"
      :placeholder="$attrs.placeholder"
      @input="onInput"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",

  inheritAttrs: false,

  props: {
    label: {
      type: [String, Number],
      default: "",
    },
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

  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);

      //   console.log("Component - this: ");
      //   console.log(this);

      //   console.log("Component - this.$attrs: ");
      //   console.log(this.$attrs);
      //   console.log(JSON.stringify(this));
      //   this.demoObj = this;
      //   debugger;
    },
  },
};
</script>

<style lang="scss" scoped></style>
