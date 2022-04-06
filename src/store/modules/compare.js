
export default {
    state: {

        compareModeActive: 2,

        specificationsProcutsCompareDifference: [],
        specificationsProcutsCompareAll: [],
        specificationsProcutsCompareGeneral: []
    },

    mutations: {
        // updateValue(state, payload) {
        //     state.value = payload;
        // },
        SET_COMPARE_MODE(state, compareModeActive) {
            state.compareModeActive = compareModeActive;
        },

        SET_SPECIFICATIONS_PROCUTS_COMPARE_DIFFERENCE(state, specificationsProcutsCompareDifference) {
            state.specificationsProcutsCompareDifference = specificationsProcutsCompareDifference;
        },
        SET_SPECIFICATIONS_PROCUTS_COMPARE_ALL(state, specificationsProcutsCompareAll) {
            state.specificationsProcutsCompareAll = specificationsProcutsCompareAll;
        },

        ADD_TO_COMPARE() {

        },
        // ADD_TO_COMPARE() {

        // },        

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

        setSpecificationsProcutsCompareDifference({ commit }, value) {
            commit("SET_SPECIFICATIONS_PROCUTS_COMPARE_DIFFERENCE", value);
        },
        setSpecificationsProcutsCompareAll({ commit }, value) {
            commit("SET_SPECIFICATIONS_PROCUTS_COMPARE_ALL", value);
        },

    },

    getters: {



        getCompareModeActive: (state) => {
            return state.compareModeActive;
        },

        getSpecificationsProcutsCompareDifference: (state) => {
            return state.specificationsProcutsCompareDifference;
        },
        getSpecificationsProcutsCompareAll: (state) => {
            return state.specificationsProcutsCompareAll;
        },




    },
};