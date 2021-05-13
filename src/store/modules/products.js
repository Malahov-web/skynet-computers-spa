import ProductsServices from '@/services/ProductsServices.js'

export default {
    state: {
        products: {}

    },
    getters: {

        // getProductById: state => id => {
        //     return state.todos.find( todo => todo.id === id );
        // },
        getProducts: state =>  {
            // return state.todos.find( todo => todo.id === id );
            return state.products
        },        
    },
    mutations: {

        SET_PRODUCTS(state, products) {
            state.products = products
        }
    },
    actions: {

        fetchProducts( { commit } ) {
            ProductsServices.getProducts()
            .then(response => {
                commit('SET_PRODUCTS', response.data)
            } )            

        }
    }
};




