import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import draggable from 'vuedraggable';

import App from './App.vue';
import router from './router';
import { User } from './user';

Vue.component('draggable', draggable);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.prototype.$http = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://api-onlinecheckersplatform.us-east-2.elasticbeanstalk.com'
      : 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  validateStatus: () => true,
});
Vue.prototype.$production = process.env.NODE_ENV === 'production';

declare module 'vue/types/vue' {
  interface Vue {
    $http: typeof axios;
    $production: boolean;
  }
}

new Vue({
  data: {
    user: null as null | User,
  },
  router,
  render: h => h(App),
}).$mount('#app');
