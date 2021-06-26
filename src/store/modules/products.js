import ProductsServices from "@/services/ProductsServices.js";

export default {
    state: {
        products: {},
        productFull: {},
    },

    getters: {
        // getProductById: state => id => {
        //     return state.todos.find( todo => todo.id === id );
        // },
        getProducts: (state) => {
            // return state.todos.find( todo => todo.id === id );
            return state.products;
        },

        // getProductById: (state) => {
        //     return state;
        // },
        getProductFull: (state) => (productid) => {
            // console.log("productid");
            // console.log(productid); // +

            const products = state.products;
            for (const key in products) {
                let currentProduct = products[key];
                if (currentProduct["id"] != productid) {
                    continue;
                }
                // console.log("currentProduct");
                // console.log(currentProduct); //
                // commit("SET_PRODUCT_FULL", currentProduct);
                return currentProduct;
            }
        },
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },

        SET_PRODUCT_FULL(state, productFull) {
            state.productFull = productFull;
        },
    },
    actions: {
        fetchProducts({ commit }) {
            ProductsServices.getProducts().then((response) => {
                commit("SET_PRODUCTS", response.data);
                return response.data;
            });
        },

        // Не знаю как сделать  запрос из json-server'а - т.к.к там products в объекте , а не в массиве
        fetchProductById({ commit, state, dispatch }, productid) {
            // ProductsServices.getProductById(productid).then((response) => {
            //     commit("SET_PRODUCT_FULL", response.data);
            // });
            // if (state.products.length == 0) {
            // dispatch("fetchProducts");
            // }
            //
            const products = state.products;
            for (const key in products) {
                let currentProduct = products[key];
                if (currentProduct["id"] != productid) {
                    continue;
                }
                // console.log("currentProduct");
                // console.log(currentProduct); //
                commit("SET_PRODUCT_FULL", currentProduct);
            }

            // dispatch("fetchProducts").then((response) => {
            //     console.log("response");
            //     console.log(response);
            // });
        },
    },
};
