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

    isPropertyDifference(property, productsArray) {
        // let isPropertyNotEqual;
        // let propertyValue;
        // let propertyValue = productSpecsObj[0][property]['value'];

        for (let i = 1; i < productsArray.length; i++) {

            let propertyValueCurrent = productsArray[i]['specificationsFull'][property]['value']
            let propertyValuePrev = productsArray[i - 1]['specificationsFull'][property]['value']

            if (propertyValueCurrent != propertyValuePrev) {
                return true
            }
        }

        return false
    }
};
