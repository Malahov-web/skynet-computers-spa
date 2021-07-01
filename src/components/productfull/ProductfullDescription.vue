<template>
  <div class="productfull__description">
    <div class="productfull__description-title g-subtitle h4">Описание:</div>
    <div class="productfull__description-text">
      Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда
      приемлемые модификации, например, юмористические вставки или слова,
      которые даже отдалённо не напоминают латынь.
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductfullDescription.vue",

  props: {
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
