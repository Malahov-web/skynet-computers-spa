
export default {
    state: {
        compareModeActive: 2
    },
    getters: {


        getCompareModeActive: (state) => {
            return state.compareModeActive;
        },

    },
    mutations: {
        // updateValue(state, payload) {
        //     state.value = payload;
        // },
        SET_COMPARE_MODE(state, compareModeActive) {
            state.compareModeActive = compareModeActive;
        },
    },
    actions: {
        // updateValue({ commit }, payload) {
        //     commit('updateValue', payload);
        // },
        // fetchProducts({ commit }) {
        //     // ProductsServices.getProducts().then((response) => {
        //     return ProductsServices.getProducts().then((response) => {
        //         commit("SET_PRODUCTS", response.data);
        //         return response.data;
        //     });
        // },

        setCompareMode({ commit }, value) {
            // ProductsServices.getProducts().then((response) => {
            // alert(); // +
            commit("SET_COMPARE_MODE", value);
        },
    }
};