import Vue from "vue";
import Vuex from "vuex";
// import src/services.js/NewsServices.js
// import TaskService from '@/services/TaskService.js'
import NewsServices from '@/services/NewsServices.js'

import products from "@/store/modules/products.js";
import categories from "@/store/modules/categories.js";

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    // products_modules: products
    products_module: products,
    // products: products // v3
    categories: categories
  }   , 
  
  state: {
      news: [],
      newFull: {},
      paginationPostsTotal: 1,
  },
  mutations: {
    SET_NEWS(state, news) {
        state.news = news
    },
      
    SET_NEW_FULL(state, newFull) {
        state.newFull = newFull
    },
    
    ADD_NEWS_ITEM(state, newItem) {
        // state
        state.news.push(newItem)
    },
    SET_PAGINATION_POSTS_TOTAL(state, postsTotal) {
        state.paginationPostsTotal = postsTotal;
    }
  },
  actions: {

    fetchNews( { commit } ) {
        NewsServices.getNews()
        .then(response => {
            commit('SET_NEWS', response.data)
        } )
    },

    fetchNewsWithPagination( { commit }, { perPage, pageNumber } ) {
        NewsServices.getNewsWithPagination(perPage, pageNumber)
        .then(response => {

            console.log('Totals posts are: ' )
            console.log(response.headers)

            commit('SET_PAGINATION_POSTS_TOTAL', response.headers["x-total-count"])
            commit('SET_NEWS', response.data)
            
        } )
    },
    

    fetchNewsItem( { commit }, id ) {
        NewsServices.getNewsItemById(id)
        .then(response => {
            commit('SET_NEW_FULL', response.data)
        } )
    },


    // addTask({ commit}, task  ) {
    //     // this.$store.commit('INCREMENT_COUNT', this.incrementBy)        

    //     // ДЗапустим мутаицю, когда с сервера придет ответ ОК
    //     return  TaskService.postTask(task).then( ()=> {
    //         commit('ADD_TASK', task) 
    //     } )
    //     // TaskService.postTask(task);
    //     // commit('ADD_TASK', task)        
    // }

    addNewsItem( { commit }, item  ) {
        return NewsServices.postNewsItem(item)
        .then( () => {
            commit('ADD_NEWS_ITEM', item) 
        } )
        
    },

    
    
    
    // fetchEvents({ commit }) {
    //     EventService.getEvents()
    //       .then(response => {
    //         commit('SET_EVENTS', response.data)
    //       })
    //       .catch(error => {
    //         console.log('There was an error:', error.response)
    //       })
    //   }



  },
});
