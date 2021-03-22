const product = {

    id: 01910527,
    title: 'Монитор 23.8" DELL S2421HN',
    diagonal: 23.8,
    brand: 'dell',
    brandImage: 'uploads/brands/dell.webp',
    availability: 1, // в магазине || ожидается || нет
    // description: 'Элегантный дизайн с тонкой рифленой текстурой на задней панели придает монитору Dell S2421HN неповторимый внешний вид. Он привносит гармоничное сочетание великолепного стиля и качества в любое пространство. Благодаря трехсторонней сверхтонкой рамке вы можете наслаждаться превосходной четкостью изображения на 23,8-дюймовом мониторе с разрешением Full HD (1920 x 1080).<br> Два встроенных порта HDMI обеспечивают постоянное подключение устройств и позволяют легко переключаться между потоковой передачей и играми на консоли. Функция Dell Easy Arrange помогает упорядочить приложения, электронные письма и окна на одном экране. Технология AMD FreeSync с частотой обновления до 75 Гц обеспечивает визуальные эффекты без разрывов ',
    description: 'Элегантный дизайн с тонкой рифленой текстурой на задней панели придает монитору Dell S2421HN неповторимый внешний вид. Он привносит гармоничное сочетание великолепного стиля и качества в любое пространство. <br>Благодаря трехсторонней сверхтонкой рамке вы можете наслаждаться превосходной четкостью изображения на 23,8-дюймовом мониторе с разрешением <b>Full HD</b> (1920 x 1080).',
    // description: '',
    propery: 00000,
    price: 9490, 
    priceSale: 7990, 
    
    quantity: 9,

    // specificationsShort: {
    //     diagonal: 23.8,    
    //     dimension: '1920x1080 Full HD',
    //     matrixType: 'IPS',
    //     backlight : 'WLED',
    //     responseTime : 4,
    // },

    specificationsShort: {
        diagonal:  { 
            title: 'Диагональ',
            value: 23.8,     
        },
        dimension:  { 
            title: 'Разрешение экрана',
            // value: '1920x1080 Full HD', 
            value: '1920x1080 ', 
        },
        matrixType:  { 
            title: 'Тип матрицы',
            value: 'IPS', 
        },
        backlight : { 
            title: 'Подсветка',
            value:  'WLED', 
        },
        responseTime : { 
            title: 'Время отклика',
            value:  4, 
        }
    },    
    
    variants: [
        {
            variantId: 019105271,
            variantColor: 'black',
            variantColorValue: '#41b883',
            variantImage: 'uploads/productfull/DELL-S2421HN-black.jpg'
        },
        {
            variantId: 019105272,
            variantColor: 'silver',
            variantColorValue: '#41b883',
            variantImage: 'uploads/productfull/DELL-S2421HN-silver.jpg'
        },
        {
            variantId: 019105271,
            variantColor: 'white',
            variantColorValue: '#41b883',
            variantImage: 'uploads/productfull/product_full_image_dell_08_image_1.jpg'
        }    
    ],
    // reviews: [],
    // reviews: [ '123'],
    // reviews: [1, '123'],

    rating: 4.3,
    reviews: [
        {

        },
        {

        }
    ]
}


let app = new Vue({
    el: '#app',
    data: {
        product: product,

        activeVariant: 1,

        cart: 0,
        availability: true,
        ratingMax: 5,

        textTemplates: {
            descriptionHasNo: 'Описание товара отсутствует.'


        }

    },

    computed: {

        renderRating: function () {
        
            let template = '';
            for (let index = 1; index < this.ratingMax + 1; index++) {
                // const element = array[index];
                // console.log('index: ' + index); // +

                // if ( index < this.product.rating ) {
                //     template += `<li class="on"><span></span></li>`;
                // }
                // else {
                //     template += `<li class="off"><span></span></li>`;
                // }

                if ( index <= this.product.rating ) {
                    template += `<li class="on"><span></span></li>`;
                    continue;
                }
                template += `<li class="off"><span></span></li>`;
                
                
            }

            return template;
            // return 'Text return'; // +
        }

    }

//     methods: {

//         renderRating: function (rating) {
            
//             let template = '';
//             for (let index = 1; index < this.ratingMax; index++) {
//                 // const element = array[index];
// console.log('index: ' + index);

//                 // if
//                 template += `<p>index</p>`;
                
//             }

//             return template;
//         }

//     }

})