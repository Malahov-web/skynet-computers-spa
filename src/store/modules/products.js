import ProductsServices from "@/services/ProductsServices.js";

export default {
    state: {
        products: {},
        productFull: {},

        productsCompareIds: [1, 21910538], // [ ] // [1, 01910538]

        specificationsGroups: {
            0: {
                name: "general",
                title: "Основные"
            },
            1: {
                name: "display",
                title: "Экран"
            },
        },

        specifications: {
            "brand": {
                description: "Компания производитель"
            },
            "producingСountry": {
                description: "Страна производства"
            },
            "operatingSystem": {
                description: "Операционная система, установленная на ноутбуке. Некоторые ноутбуки продаются без операционной системы. Новая операционная система Windows 10 пришла на смену предыдущей версии Windows 8. Среди новых возможностей ОС выделяются создание нескольких рабочих столов, голосовой помощник и новый веб-браузер. "
            },
            "ram": {
                description: "Оперативная память (или ОЗУ) используется для хранения программ и данных. Для хранения информации в ОЗУ необходимо питание, при выключении ноутбука вся информация из оперативной памяти стирается. "
            },
            "rom": {
                description: "HDD (hard disk drive) — накопитель, в котором информация записывается на вращающиеся магнитные пластины. \nSSD (solid-state drive) — твердотельный накопитель, построенный на микросхемах памяти. Не имеет подвижных частей.\neMMC (embedded Multimedia Memory Card) — накопитель, построенный на микросхемах энергонезависимой памяти eMMC. В микросхеме eMMC контроллер совмещен с флэш-памятью.\nSSD Cache — наличие дополнительной высокоскоростной памяти на SSD-накопителе, которая используется для ускорения работы основного накопителя.\nOptane — архитектура энергонезависимой памяти, предложенная компанией Intel. Обладает высокой скоростью записи и используется для ускорения работы основного накопителя\nSSHD (Solid-State Hard Drive) накопитель может сохранять данные как на магнитные пластины, так и на встроенную флэш-память. В первую очередь информация записывается на флэш-память, а после ее заполнения переписывается на магнитный носитель. Такие накопители также называются гибридными."
            },

            "diagonal": {
                description: "Ультракомпактные модели имеют экран диагональю 10–11 дюймов. Для комфортной работы с компьютером можно посоветовать модели с экраном в 13-15 дюймов. Если вы планируете использовать ноутбук как замену настольному компьютеру, то стоит обратить внимание на модели с экраном от 16 дюймов)."
            },
            "dimension": {
                "title": "Разрешение экрана",
                description: "Чем выше разрешение экрана (больше число пикселов), тем более детальное изображение можно получить на экране, открыть сразу несколько документов, редактировать большое изображение. "
            },
            "matrixType": {
                description: "Нет информации об этой характеристике."
            },
            "backlight": {
                description: "Использование в ЖК-дисплее ноутбука светодиодной (LED) подсветки вместо обычных флуоресцентных ламп с холодным катодом (CCFL). "
            },
            "responseTime": {
                description: "Чемы меньше время отклика тем больше дисплей подойдет для программ с динамично меняющейся картинкой, таких как игры"
            }
        }

    },

    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },

        SET_PRODUCT_FULL(state, productFull) {
            state.productFull = productFull;
        },
    },
    actions: {
        fetchProducts({ commit }) {
            // ProductsServices.getProducts().then((response) => {
            return ProductsServices.getProducts().then((response) => {
                commit("SET_PRODUCTS", response.data);
                return response.data;
            });
        },

        // Не знаю как сделать  запрос из json-server'а - т.к.к там products в объекте , а не в массиве
        fetchProductById({ commit, state, dispatch }, productid) {
            // ProductsServices.getProductById(productid).then((response) => {
            //     commit("SET_PRODUCT_FULL", response.data);
            // });
            // if (state.products.length == 0) {
            // dispatch("fetchProducts");
            // }
            //
            const products = state.products;
            for (const key in products) {
                let currentProduct = products[key];
                if (currentProduct["id"] != productid) {
                    continue;
                }
                // console.log("currentProduct");
                // console.log(currentProduct); //
                commit("SET_PRODUCT_FULL", currentProduct);
            }

            // dispatch("fetchProducts").then((response) => {
            //     console.log("response");
            //     console.log(response);
            // });
        },
    },

    getters: {
        // getProductById: state => id => {
        //     return state.todos.find( todo => todo.id === id );
        // },
        getProducts: (state) => {
            // return state.todos.find( todo => todo.id === id );
            return state.products;
        },

        getProductFull: (state) => (productid) => {
            // console.log("productid");
            // console.log(productid); // +

            const products = state.products;
            for (const key in products) {
                let currentProduct = products[key];
                if (currentProduct["id"] != productid) {
                    continue;
                }
                // console.log("currentProduct");
                // console.log(currentProduct); //
                // commit("SET_PRODUCT_FULL", currentProduct);
                return currentProduct;
            }
        },

        getProductsCompare: (state) => {
            const allProducts = state.products
            const productsCompareIds = state.productsCompareIds

            // let productsCompare = []

            // for (const key, product in allProducts) {
            // }
            // console.log('allProducts: ');
            // console.log(allProducts); +
            let productsCompare = productsCompareIds.map((id) => {
                return allProducts[id]
            });
            console.log('productsCompare: ');
            console.log(productsCompare);
            return productsCompare
        }
    },
};
