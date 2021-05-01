import Vue from "vue";
import Vuex from "vuex";
// import src/services.js/NewsServices.js
// import TaskService from '@/services/TaskService.js'
import NewsServices from '@/services/NewsServices.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      news: [],
      newFull: {}
  },
  mutations: {
    SET_NEWS(state, news) {
        state.news = news
      },
      
      SET_NEW_FULL(state, newFull) {
        state.newFull = newFull
      }        
  },
  actions: {

    fetchNews( { commit } ) {
        NewsServices.getNews()
        .then(response => {
            commit('SET_NEWS', response.data)
        } )
    },

    fetchNewsItem( { commit }, id ) {
        NewsServices.getNewsItemById(id)
        .then(response => {
            commit('SET_NEW_FULL', response.data)
        } )
    }    

    
    
    
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
  modules: {},
});
