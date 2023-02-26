import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = 'https://63ee0ec0388920150dd83e3c.mockapi.io/';

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
