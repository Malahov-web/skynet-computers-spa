import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    // withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
  });

  export default {
    getNews() {
        // return apiClient.get('/events')
        return axiosInstance.get('/news');
    },

    getNewsWithPagination(perPage, pageNumber) {
        // return axiosInstance.get('/news');
        // return axiosInstance.get('/news'+ '?_page=' + 1 + '&_limit=' + 3);
        return axiosInstance.get('/news'  + '?_page=' + pageNumber + '&_limit=' + perPage);
        // return axiosInstance.get('/tasks' + '?page=' + pageNumber + '&_limit=' + perPage);
    },
// ?_page=7&_limit=20

    getNewsItemById(newid) {
        return axiosInstance.get('/news/' + newid);
    },

    postNewsItem(item) {
        return axiosInstance.post('/news', item)
    }     
  };


//   axios
//   .get("http://localhost:3000/edges") // Does a get request
//   .then((response) => {
//     console.log(response.data); // For now, logs out the response
//     this.edges = response.data;
//   })
//   .catch((error) => {
//     console.log("There was an error:", error.response); // Logs out the error
//   });  