<template>
  <div class="productfull-gallery gallery">
    <carousel
      :smartSpeed="1000"
      :autoplayTimeout="3000"
      :loop="true"
      :items="3"
      :nav="true"
      :dots="false"
    >
      <a
        :href="'#slide-' + index"
        class="productfull-gallery__item url"
        v-for="(item, index) in images"
        :key="imagesPathsArray[index]"
      >
        <img :src="imagesPathsArray[index]" />
      </a>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "ProductfullGallery",

  components: {
    carousel,
  },

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

<style lang="scss" scoped></style>
