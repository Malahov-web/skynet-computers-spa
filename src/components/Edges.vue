<template>
  <div class="row-flex _row-line middle edges">
    <div
      class="mv_12 tb_6 ds_3"
      v-for="item in edges"
      :key="item['item-title']"
    >
      <div class="edges__item">
        <div class="edges__item-icon">
          <i
            class="themify _themify-gift"
            :class="'themify-' + item['item-icon']"
          ></i>
        </div>
        <div class="edges__item-text">{{ item["item-title"] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from '@/components/axios.vue';
import axios from "axios";

export default {
  name: "Edges",

  data() {
    return {
      //   key: value,
      edges: [],
    };
  },
  // getEdges
  //   created()  {
  //     axios.get('http://localhost:3000/edges') // Call out to this URL
  //       .then(response =>
  //         console.log(response.data);  // When the response returns, log it to the console
  //       })
  //       .catch(error =>
  //         console.log(error);  // If an error is returned log it to the console
  //       })
  //   },

  created() {
    axios
      .get("http://localhost:3000/edges") // Does a get request
      .then((response) => {
        console.log(response.data); // For now, logs out the response
        this.edges = response.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response); // Logs out the error
      });
  },
};
</script>

<style lang="scss" scoped></style>
