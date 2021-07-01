<template>
  <carousel
    __data-hash="'slide-' + index"
    :smartSpeed="1000"
    :autoplayTimeout="3000"
    :loop="true"
    :items="1"
    :nav="false"
    :dots="false"
  >
    <img
      :data-hash="'slide-' + index"
      :src="imagesPathsArray[index]"
      v-for="(item, index) in images"
      :key="imagesPathsArray[index]"
    />
  </carousel>
</template>

<script>
import carousel from "vue-owl-carousel";

// export default {
//     components: { carousel },
// }

export default {
  name: "ProductfullSlider",

  components: { carousel },

  props: {
    images: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  computed: {
    imagesPathsArray() {
      let imagesPathsArray = [];

      //   this.images.forEach((item, i, arr) => {
      //   });

      //   this.images.forEach(function (item, index, array) {
      this.images.forEach(function (item) {
        // ... делать что-то с item
        // alert(item.image);
        console.log(item.image);
        imagesPathsArray.push("/" + item.image);
      });

      return imagesPathsArray;
    },
  },
};
</script>

<style lang="scss" scoped>
//     <!-- <img src="https://placeimg.com/200/200/any?4" /> -->

body .owl-carousel .owl-item img {
  max-width: 90%;
  margin: 0 auto;
}
</style>
