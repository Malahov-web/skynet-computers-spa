<template>
  <div id="app">
    <NavMenu class="asd"></NavMenu>
    <Notifications class="asd"></Notifications>

    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import Notifications from "@/components/notifications/Notifications.vue";

export default {
  components: {
    // Category: Category,
    // Product: Product,
    NavMenu: NavMenu,
    Notifications: Notifications,
  },
};
</script>

<style lang="scss">
// @import "assets/src/scss/_lesson_2"; // +

// @import "assets/scss/style";
@import "assets/src/scss/style";

#app {
  //   font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

a.menu-main__item--active {
  background-color: $accent_dark;
}

.products-list .product__parameters-list li {
  position: relative;

  &::before {
    z-index: 200;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50% 100%);
    width: auto;
    height: auto;
    padding: 0.5em 1em;
    border: 1px solid $accent;
    border-radius: 0;
    background-color: #fff;
    background-color: $grey_super_light;
    font-size: 90%;
    // content: "(title)"=
    content: attr(title);
    white-space: nowrap;
  }
  &:hover:before {
    display: block;
  }
}

.pagination__item--active {
  a {
    background-color: $accent_dark;
    &:hover {
      cursor: default;
      background-color: $accent_dark;
    }
  }
}

.notifications__item {
  &.status-success {
    border-color: $success_color;
    .product__remove {
      &:hover {
        color: $success_color;
      }
    }
  }
  &.status-error {
    border-color: $error_color;
    .product__remove {
      &:hover {
        color: $error_color;
      }
    }
  }

  .product__remove {
    // color: $text;
    color: $grey_super_dark;
  }
}

//
.menu-main-outer {
  margin-top: 20px !important;
}
// Nprogress

/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  //   background: rgb(34, 221, 81);
  background: $accent !important;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 10px;
}

// compare
.product-outer .compare__specifications-title {
  opacity: 0;
}
</style>
