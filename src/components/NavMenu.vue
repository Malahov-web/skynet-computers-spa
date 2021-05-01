<template>
  <div class="menu-main-outer section">
    <div class="container js-mobile_menu-outer">
      <div class="menu-main-trigger js-mobile_menu__title"></div>

      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link :to="{ name: 'Category' }">Category</router-link> |
        <router-link :to="{ name: 'ProductPage' }">Product</router-link>
      </div> -->

      <ul
        id="nav"
        class="menu-main megamenu js-mobile_menu js-dropdown_list"
        data-js="menu-responsive"
        data-animation-temp="400"
      >
        <li class="menu-main__item _menu-main__item--active">
          <!-- <a href="#" class="menu-main__link">Notebooks</a> -->
          <router-link to="/" exact>Home</router-link>
        </li>

        <li class="menu-main__item">
          <!-- <a href="#" class="menu-main__link">PC</a> -->
          <router-link :to="{ name: 'Category' }">Category</router-link>
        </li>

        <li class="menu-main__item">
          <!-- <a href="#" class="menu-main__link">PC</a> -->
          <router-link :to="{ name: 'ProductPage' }">Product</router-link>
        </li>

        <li class="menu-main__item">
          <router-link :to="{ name: 'NewsPage' }">News</router-link>
        </li>

        <div class="dropdown" style="">
          <ul class="dropdown__list js-dropdown_list" style=""></ul>
        </div>
      </ul>

      <!-- <ul
        class="menu-main megamenu js-mobile_menu js-dropdown_list"
        data-js="menu-responsive"
        data-animation-temp="400"
      >
        <li class="menu-main__item">
          <a href="#" class="menu-main__link">Notebooks</a>
        </li>
        <li class="menu-main__item menu-main__item--active">
          <a href="#" class="menu-main__link">PC</a>
        </li>
        <li class="menu-main__item">
          <a href="#" class="menu-main__link">Tablets &amp; Phones</a>
        </li>
        <li class="menu-main__item">
          <a href="#" class="menu-main__link">Peripherals</a>
        </li>
        <li class="menu-main__item">
          <a href="#" class="menu-main__link">Motherboards</a>
        </li>
        <li class="menu-main__item">
          <a href="#" class="menu-main__link">Video</a>
        </li>
        <li class="menu-main__item">
          <a href="#" class="menu-main__link">HDD</a>
        </li>
        <li class="menu-main__item">
          <a href="#" class="menu-main__link">Cables</a>
        </li>
        <div class="dropdown" style="">
          <ul class="dropdown__list js-dropdown_list" style=""></ul>
        </div>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
};
</script>

<style lang="scss" scoped></style>
