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
        ADD_REVIEWS_ITEM(state, reviewsItem) {
            // state
            state.reviews.push(reviewsItem);
        },
    },
    getters: {
        getReviews: (state) => {
            return state.reviews;
        },
        // getProductReviews: (state) => (id) => {
        getProductReviews: (state) => ({ id }) => {
            // return state.reviews.filter(
            //     (item) => { item.productId == id })

            return state.reviews.filter(item => item.productId == parseInt(id));
        }
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


        addReviewsItem({ commit, dispatch }, item) {
            // addReviewsItem({ commit, }, item) {
            return ReviewsServices.postReviewsItem(item)
                .then(() => {
                    commit("ADD_REVIEWS_ITEM", item);
                    const notification = {
                        type: "success",
                        object: "Your review has been successfully added",
                    };
                    dispatch("notifications/add", notification, { root: true });
                })
                .catch((error) => {
                    console.log(error.response.data);
                    const notification = {
                        type: "error",
                        object: "Your review was not added, reason: " + error.message,
                    };
                    dispatch("notifications/add", notification, { root: true });
                });
        },

    },

};