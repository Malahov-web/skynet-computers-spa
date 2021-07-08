import axios from "axios";

let payloadReviews = {
    token: "eNKUwoQO1PhRTL1_hHXhsQ",
    data: {
        name: "nameFirst",
        email: "internetEmail",
        phone: "phoneHome",

        _repeat: 10
    }
};


const axiosInstance = axios.create({
    baseURL: 'https://app.fakejson.com/q',
    timeout: 1000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },

    method: 'post', // default    'get'

    // v1 - Response Error: Missiing Token
    // data: {
    //     token: "eNKUwoQO1PhRTL1_hHXhsQ",
    //     data: {
    //         name: "nameFirst",
    //         email: "internetEmail",
    //         phone: "phoneHome",

    //         _repeat: 10
    //     }
    // }


    // v2 - 
    // token: "eNKUwoQO1PhRTL1_hHXhsQ",

    // data: {
    //     name: "nameFirst",
    //     email: "internetEmail",
    //     phone: "phoneHome",

    //     _repeat: 10
    // }


    // v3
    data: payloadReviews,

    // v4 - Data - JSON style
    // "data": {
    //     "token": "eNKUwoQO1PhRTL1_hHXhsQ",
    //     "data": {
    //         "name": "nameFirst",
    //         "email": "internetEmail",
    //         "phone": "phoneHome",

    //         "_repeat": 10
    //     }
    // },


});


export default {
    getReviews() {
        return axiosInstance.post();
    },
};




// RESPONSE - array item
// let item = {
//     "email": "jodie@hotmail.com",
//     "name": "Kennedi",
//     "phone": "639-082-7734"
// }