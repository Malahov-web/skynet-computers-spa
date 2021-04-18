<template>
  <div class="product__price-outer">
    <div class="product__price">
      <span class="product__price-value">{{ actualPrice }}</span
      >&nbsp;
      <span class="product__price-currency">₽</span>
    </div>
  </div>
</template>

<script>
// import { lodash } from 'lodash';
import chunk from "lodash/chunk";

export default {
  name: "ProductPrice",

  props: {
    price: {
      type: Number,
      default: 0,
    },
    priceSale: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    actualPrice() {
      if (this.priceSale) {
        return this.priceSale;
        // return this.formattedPrice(this.priceSale);
      }
      return this.price;
      //   console.log("this.price");
      //   console.log(this.price);
      //   alert(this.price);
      //   return this.formattedPrice(this.price);
    },

    // formattedPrice() {

    // }
  },

  methods: {
    formattedPrice(price) {
      console.log("price");
      console.log(price);

      let priceString = price.toString();
      console.log("priceString");
      console.log(priceString);
      let symbols = priceString.split("");
      console.log("symbols");
      console.log(symbols);
      //   chunk
      let newPriceArray = chunk(symbols, 3);
      console.log("newPriceArray");
      console.log(newPriceArray);

      return newPriceArray.join(" ");
    },
    // to test:  {{ myPrice() }}
    myPrice() {
      return "This is myPrice()";
    },
  },
};
</script>

<style lang="scss" scoped></style>
