import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Category from "@/views/Category.vue";
import ProductPage from "@/views/ProductPage.vue";
import NewsPage from "@/views/NewsPage.vue";
import NewFullPage from "@/views/NewFullPage.vue";

Vue.use(VueRouter);

const routes = [
    //   {
    //     path: "/",
    //     name: "Home",
    //     component: Home,
    //   },
    //   {
    //     // path: "/category",
    //     path: "/",
    //     name: "Category",
    //     component: Category,
    //   },
    //   {
    //     path: "/product",
    //     name: "Product",
    //     component: Product,
    //   },

    //   {
    //     path: "/about",
    //     name: "About",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ "../views/About.vue"),
    //   },

    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/category",
        name: "Category",
        component: Category,
    },
    // {
    //     path: "/product",
    //     name: "ProductPage",
    //     component: ProductPage,
    // },

    {
        path: "/product/:productid",
        name: "ProductPage",
        component: ProductPage,
        props: true,
    },

    {
        path: "/news",
        name: "NewsPage",
        component: NewsPage,
    },
    {
        path: "/news/:newid",
        name: "NewFullPage",
        component: NewFullPage,
        props: true,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: "menu-main__item--active",
});

export default router;
