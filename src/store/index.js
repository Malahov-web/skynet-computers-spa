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
    },
    
    ADD_NEWS_ITEM(state, newItem) {
        // state
        state.news.push(newItem)
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
  modules: {},
});
