import CategoriesServices from '@/services/CategoriesServices.js'


export default {
    state: {
        subcategories: {}
    },

    getters: {
        getSubcategories: state =>  {
            return state.subcategories
        },        
    },
    mutations: {
        SET_SUBCATEGORIES (state, subcategories) {
            state.subcategories = subcategories
        }
    },
    actions: {
        // updateValue({commit}, payload) {
        //     commit('updateValue', payload);
        // }

        // fetchProducts( { commit } ) {
        //     ProductsServices.getProducts()
        //     .then(response => {
        //         commit('SET_PRODUCTS', response.data)
        //     } )            

        // }

        fetchSubcategories( {commit} ) {
            CategoriesServices.getSubcategories()
            .then(response => {
                commit('SET_SUBCATEGORIES', response.data)
            } )            

        }
    }
};