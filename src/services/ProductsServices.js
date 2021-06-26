import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 1000,
    // withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getProducts() {
        return axiosInstance.get("/products");
    },

    // getNewsItemById(newid) {
    //     return axiosInstance.get('/news/' + newid);
    // },

    getProductById(productid) {
        return axiosInstance.get("/products/" + productid);
    },
};
