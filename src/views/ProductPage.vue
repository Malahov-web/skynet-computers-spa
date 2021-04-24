<template>
  <div>Product Full page, ID: {{ productid }}</div>
</template>

<script>
// import Name from '@/components/Name.vue';

export default {
  name: "ProductPage",
  // components: {
  //     Name
  // },

  props: {
    productid: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
