<template>
  <div _class="$attrs['field-class']" _v-if="$attrs['field-class']">
    <!-- <label>Ваше Имя</label> -->
    <label v-if="label"> {{ label }} </label>
    <input
      __class="$attrs.class"
      _class="$attrs['placeholder']"
      ___class="$attrs.myneattr"
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
    onInput() {
      console.log("Component - this: ");
      console.log(this);

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
