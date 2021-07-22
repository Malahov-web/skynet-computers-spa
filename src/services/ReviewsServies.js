import axios from "axios";

import chunk from "lodash.chunk";
import upperFirst from "lodash.upperfirst";

// v2 from json-server

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
    getReviews() {
        return axiosInstance.get("/reviews");
    },

    // formatReviewTextToHumanReadable(text) {

    // }
    formatReviewTextToHumanReadable(text) {
        let textCharsArray = text.split(" ");
        let textPhrasesArray = chunk(textCharsArray, 7);

        let formattedText = "";

        for (const phrase of textPhrasesArray) {
            // Делаем первую букву в предложении заглавной
            // v lodash
            let firstWord = upperFirst(phrase[0]);
            phrase[0] = firstWord;

            // Добавляем точку и пробел в конце фразы
            let lastWordIndex = phrase.length - 1;
            phrase[lastWordIndex] += ". ";

            // Добавить форматированную строку к новому тексту
            formattedText += phrase.join(" ");
            // debugger;
        }

        //   return textPhrasesArray;
        return formattedText.trim();
    },

    postReviewsItem(item) {
        return axiosInstance.post('/reviews', item)
    }
};




//  v1 from fakejson.com

// let payloadReviews = {
//     token: "eNKUwoQO1PhRTL1_hHXhsQ",
//     data: {
//         firstname: "nameFirst",
//         surname: "nameFirst",
//         email: "internetEmail",
//         phone: "phoneHome",
//         city: "addressCity",
//         rating: "numberInt|1,5",
//         date: "date",
//         // text: "naughtyFalsey",
//         textAdvantages: "stringWords|7,20",
//         textDefects: "stringWords|7,20",
//         textGeneral: "stringWords|7,27",
//         productId: "numberInt|1,3",

//         _repeat: 10
//     }
// };


// // // Reviews Servies
// const axiosInstance = axios.create({
//     // method: "post",

//     // baseURL: "http://localhost:3001",
//     // baseURL: "https://app.fakejson.com/q",

//     url: "https://app.fakejson.com/q",
//     data: payloadReviews,
//     timeout: 1000,
//     // withCredentials: false, // This is the default
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//     },
// });



// export default {

//     // + Сам запрос работает
//     getReviews() {

//         return axios({
//             method: "post",
//             url: "https://app.fakejson.com/q",
//             data: payloadReviews
//         }).then(function (resp) {
//             // Do something with fake data
//             console.log('resp');
//             console.log(resp);
//             return resp;
//         });
//     },
// };

