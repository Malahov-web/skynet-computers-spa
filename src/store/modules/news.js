import NewsServices from '@/services/NewsServices.js'

export default {
    state: {
        news: [],
        newFull: {},
        paginationPostsTotal: 1,
    },
    getters: {
        value: state => {
            return state.value;
        }
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
                console.log('News has been fetched:', response) // <--- here
            } )
        },
       
        fetchNewsWithPagination( { commit, dispatch }, { perPage, pageNumber } ) {
            NewsServices.getNewsWithPagination(perPage, pageNumber)
            .then(response => {
    
                console.log('Totals posts are: ' )
                console.log(response.headers)
    
                commit('SET_PAGINATION_POSTS_TOTAL', response.headers["x-total-count"])
                commit('SET_NEWS', response.data)

                const notification = {
                    type: "success",
                    object: "News have been successfully loaded",
                }
                dispatch('notifications/add', notification, { root: true } );                
                
            } )
            .catch(error => {
                // console.log('module news.js: There was an error: ' + error.message) // <--- here
                const notification = {
                    type: "error",
                    object: "There was a problem fetching data: " + error.message,
                }
                dispatch('notifications/add', notification, { root: true } );
            })
        },
    
        fetchNewsItem( { commit, dispatch }, id ) {
            NewsServices.getNewsItemById(id)
            .then(response => {
                commit('SET_NEW_FULL', response.data)

                const notification = {
                    type: "success",
                    object: "News item has been successfully loaded",
                }
                dispatch('notifications/add', notification, { root: true } );                  
            } )
            .catch(error => {
                const notification = {
                    type: "error",
                    object: "There was a problem fetching data: " + error.message,
                }
                dispatch('notifications/add', notification, { root: true } );
            })
        },
    
        addNewsItem( { commit }, item  ) {
            return NewsServices.postNewsItem(item)
            .then( () => {
                commit('ADD_NEWS_ITEM', item) 
            } )
            
        },
    
    }
};