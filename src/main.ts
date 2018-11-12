import axios, { AxiosResponse } from 'axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';

import App from './App.vue';
import router from './router';
import { User } from './user';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

export const httpClient = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://api-onlinecheckersplatform.us-east-2.elasticbeanstalk.com'
      : 'http://localhost:5000',
  withCredentials: true, // send cookies across domains
  headers: {
    'X-Requested-With': 'XMLHttpRequest', // protects CSRF
  },
  validateStatus: () => true, // handle HTTP errors manually instead of with exceptions
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

declare module 'vue/types/vue' {
  interface Vue {
    $http: typeof axios;
    $production: boolean;
    $user: User | null;
  }
}

Vue.prototype.$http = httpClient;
Vue.prototype.$production = process.env.NODE_ENV === 'production';

/**
 * Defining user as a property on the Vue prototype,
 * while keeping the actual data on the root Vue instance.
 * This allows changes to be reflected in the view with Vue's normal reactivity
 * system, while also providing a convenient syntax for accessing the user.
 */
Object.defineProperty(Vue.prototype, '$user', {
  get(this: Vue) {
    return this.$root.$data.user;
  },
  set(this: Vue, value: User) {
    this.$root.$data.user = value;
  },
});

new Vue({
  data: {
    user: null,
  },
  router,
  render: h => h(App),
}).$mount('#app');
