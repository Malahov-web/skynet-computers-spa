<template>
  <ul class="pagination">
    <li class="pagination__item pagination__item--active">
      <span>1</span>
    </li>
    <li class="pagination__item"><a href="#">2</a></li>
    <li class="pagination__item"><a href="#">3</a></li>
    <li class="pagination__item"><a href="#">4</a></li>
    <li class="pagination__item pagination__item--next">
      <a href="#"></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BasePagination",
};
</script>

<style lang="scss" scoped></style>
