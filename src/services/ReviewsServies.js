import axios from "axios";

let payloadReviews = {
    token: "eNKUwoQO1PhRTL1_hHXhsQ",
    data: {
        firstname: "nameFirst",
        surname: "nameFirst",
        email: "internetEmail",
        phone: "phoneHome",
        city: "addressCity",
        rating: "numberInt|1,5",
        date: "date",
        // text: "naughtyFalsey",
        textAdvantages: "stringWords|7,20",
        textDefects: "stringWords|7,20",
        textGeneral: "stringWords|7,27",
        productId: "numberInt|1,3",

        _repeat: 10
    }
};

// axios({
//     method: "post",
//     url: "https://app.fakejson.com/q",
//     data: payload
// }).then(function (resp) {
//     // Do something with fake data
//     // console.log()
// });


// // Reviews Servies
const axiosInstance = axios.create({
    // method: "post",

    // baseURL: "http://localhost:3001",
    // baseURL: "https://app.fakejson.com/q",

    url: "https://app.fakejson.com/q",
    data: payloadReviews,
    timeout: 1000,
    // withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});


// export default {
//     getReviews() {
//         // return axiosInstance.post(); // -
//         // return axiosInstance.get(); // -
//         // return axiosInstance.post(payloadReviews);

//         return axiosInstance.post(
//             "https://app.fakejson.com/q",
//             payloadReviews
//         ); // -        
//     },
// };





export default {

    // + Сам запрос работает
    getReviews() {

        return axios({
            method: "post",
            url: "https://app.fakejson.com/q",
            data: payloadReviews
        }).then(function (resp) {
            // Do something with fake data
            console.log('resp');
            console.log(resp);
            return resp;
        });
    },
};


// export default {
//     getReviews() {
//         return axiosInstance.post(); // -


//     },
// };
