import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseButtonBuy from '@/components/BaseButtonBuy.vue';
import BaseSelect from '@/components/BaseSelect.vue';

Vue.component( 'BaseButtonBuy', BaseButtonBuy);
Vue.component( 'BaseSelect', BaseSelect);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
