import ReviewsServices from "@/services/ReviewsServies.js";

export const namespaced = true;

export default {
    state: {
        reviews: []
    },
    mutations: {
        SET_REVIEWS(state, reviews) {
            state.reviews = reviews;
        },
    },
    actions: {

        fetchReviews({ commit }) {
            console.log('action fetchReviews'); // +
            ReviewsServices.getReviews().then((response) => {
                commit("SET_REVIEWS", response.data);
                console.log("Reviews has been fetched:", response); // <--- here
            })
                .catch(function (error) {
                    console.log(error);
                });


            // .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });  

        },
    },

    getters: {
        getReviews: (state) => {
            return state.reviews;
        },
        getProductReviews: (state) => (id) => {
            return state.reviews.filter(
                (item) => { item.productId == id })
        }


    }
};