import axios, { AxiosResponse } from 'axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import { guestUser } from './user';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const httpClient = axios.create({
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

declare module 'axios' {
  // tslint:disable-next-line:no-any
  interface AxiosResponse<T = any> {
    isError: boolean;
    isSuccess: boolean;
  }
}

httpClient.interceptors.response.use(
  response => {
    response.isSuccess = response.status >= 200 && response.status < 300;
    response.isError = response.status >= 400;
    return response;
  },
  rejection => Promise.reject(rejection),
);

Vue.prototype.$http = httpClient;
Vue.prototype.$production = process.env.NODE_ENV === 'production';

declare module 'vue/types/vue' {
  interface Vue {
    $http: typeof axios;
    $production: boolean;
  }
}

new Vue({
  data: {
    user: guestUser,
  },
  router,
  render: h => h(App),
}).$mount('#app');
