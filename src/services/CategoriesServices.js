import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    // timeout: 1000,
    timeout: 1500,
    // withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getSubcategories() {
        return axiosInstance.get("/subcategories");
    },
};
