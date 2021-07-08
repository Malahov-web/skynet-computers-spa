import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


// import BaseButtonBuy from '@/components/BaseButtonBuy.vue';
// import BaseSelect from '@/components/BaseSelect.vue';
// import BaseRating from "@/components/BaseRating.vue";
import BaseTabs from "@/components/base/BaseTabs.vue";

// Vue.component( 'BaseButtonBuy', BaseButtonBuy);
// Vue.component( 'BaseSelect', BaseSelect);
// Vue.component( 'BaseRating', BaseRating);
Vue.component('BaseTabs', BaseTabs);


// Automatic Global registration
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
    // Относительный путь до каталога компонентов
    './components',
    // [
    //     './components',
    //     './components/base'

    // ],

    // Обрабатывать или нет подкаталоги
    false,
    // Регулярное выражение для определения файлов базовых компонентов
    /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
    // Получение конфигурации компонента
    const componentConfig = requireComponent(fileName)

    // Получение имени компонента в PascalCase
    const componentName = upperFirst(
        camelCase(
            // Получаем имя файла независимо от глубины вложенности
            fileName
                .split('/')
                .pop()
                .replace(/\.\w+$/, '')
        )
    )

    // Глобальная регистрация компонента
    Vue.component(
        componentName,
        // Поиск опций компонента в `.default`, который будет существовать,
        // если компонент экспортирован с помощью `export default`,
        // иначе будет использован корневой уровень модуля.
        componentConfig.default || componentConfig
    )
})


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");



// // Automatic Global registration
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

// const requireComponent = require.context(
//     './components',     // Относительный путь до каталога компонентов
//     false, // Обрабатывать или нет подкаталоги
//     /Base[A-Z]\w+\.(vue|js)$/ // Регулярное выражение для определения файлов базовых компонентов
// )

// requireComponent.keys().forEach(fileName => {
//     // Получение конфигурации компонента
//     const componentConfig = requireComponent(fileName)

//     // Получение имени компонента в PascalCase
//     const componentName = upperFirst(
//         camelCase(
//             // Получаем имя файла независимо от глубины вложенности
//             fileName.split('/').pop().replace(/\.\w+$/, '')
//         )
//     )

//     // Глобальная регистрация компонента
//     Vue.component( componentName, componentConfig.default || componentConfig )
// })
