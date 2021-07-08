// module.exports = {
//     root: true,
//     env: {
//         node: true,
//     },
//     extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
//     parserOptions: {
//         parser: "babel-eslint",
//     },
//     rules: {
//         "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//         "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
//     },
// };


module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto",

                // "tabWidth": 4,
                // "disableLanguages": ["js"] // don't work?
            },
            // "disableLanguages": ["js"]
        ],
        // "disableLanguages": ["js"],  // перестает гореть красным в модулях

        // tabWidth: 4, //перестает работать автоформат,  перестает гореть красным в модулях
        // tabWidth: 2,

        // "disableLanguages": 1,  //
    },
};
