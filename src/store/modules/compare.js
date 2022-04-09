
export default {
    state: {

        compareModeActive: 2,

        productsCompareIds: [], // DEV: [1],

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


        ADD_TO_COMPARE(state, newProductId) {
            state.productsCompareIds.push(newProductId);
            // state.productsCompareIds.push(21910538);
        },
        REMOVE_FROM_COMPARE(state, removeProductId) {
            // state.productsCompareIds.push(newProductId);
            // state.productsCompareIds.push(21910538);

            let newProductsCompareIds = state.productsCompareIds.filter((item) => { return item !== removeProductId })
            state.productsCompareIds = newProductsCompareIds;
        },

    },
    actions: {

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

        addToCompare({ commit, state }, newProductId) {

            // if state.productsCompareIds
            // нету этого продукта
            let isInCompare = state.productsCompareIds.find((item) => item == newProductId)
            if (!isInCompare) {
                commit("ADD_TO_COMPARE", newProductId);
            }

        },


        removeFromCompare({ commit, state }, removeProductId) {

            // if state.productsCompareIds
            // нету этого продукта
            let isInCompare = state.productsCompareIds.find((item) => item == removeProductId)
            if (isInCompare) {
                commit("REMOVE_FROM_COMPARE", removeProductId);
            }

        },

    },
    // getters: {
    //     sumWithRootCount(state, getters, rootState) {
    //         return state.count + rootState.count
    //     }
    // },
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

        // getProductsCompare: ({ state, getters }) => {
        //     // const allProducts = state.products // ?
        //     // const allProducts = state.products_module.products // -
        //     // const allProducts = products_module.state.products // -

        //     // const allProducts = $store.getters.getProductsCompare; // -
        //     // const allProducts = getters.getProductsCompare;
        //     console.log('getters');
        //     console.log(getters);

        //     const productsCompareIds = state.productsCompareIds

        //     // let productsCompare = []

        //     // for (const key, product in allProducts) {
        //     // }
        //     // console.log('allProducts: ');
        //     // console.log(allProducts); +
        //     let productsCompare = productsCompareIds.map((id) => {
        //         return allProducts[id]
        //     });
        //     console.log('productsCompare: ');
        //     console.log(productsCompare);
        //     return productsCompare
        // },


        // getProductsCompare: (state) => (rootState) => {
        // getProductsCompare: (state) => {
        // getProductsCompare: (rootState) => {
        // getProductsCompare(state,  rootState) { // -
        getProductsCompare(state, getters, rootState) { // +


            const allProducts = rootState.products_module.products;
            const productsCompareIds = state.productsCompareIds; // -

            // console.log('rootState: ');
            // console.log(rootState);
            // console.log('state: ');
            // console.log(state);

            // console.log('productsCompareIds: ');
            // console.log(productsCompareIds);


            // for (const key, product in allProducts) {
            // }
            // console.log('allProducts: ');
            // console.log(allProducts); // +
            let productsCompare = productsCompareIds.map((id) => {
                return allProducts[id]
            });
            console.log('productsCompare: ');
            console.log(productsCompare);
            return productsCompare
        },




    },
};