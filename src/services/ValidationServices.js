const spamWords = ["viagra", "XXX", "supersale", "free investment"]

export default {

    // spamWordsArray: ["viagra", "XXX", "supersale", "free investment"],

    noSpam: (str) => {

        // const keywords = ["viagra", "XXX"];
        // const keywords = ValidationServices.spamWordsArray;
        const keywords = spamWords;
        // console.log('keywords');
        // console.log(spamWords); // +

        let hasKeywords = keywords.reduce((accumulator, item) => {
            // Если есть вхождение добавить 1
            return accumulator + str.toLowerCase().includes(item.toLowerCase());
        }, 0);

        if (hasKeywords) {
            return false;
        }
        return true;
    }
}