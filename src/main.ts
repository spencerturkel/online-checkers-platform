import axios from 'axios';
import Vue from 'vue';

import App from './App.vue';
import router from './router';

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

declare module 'vue/types/vue' {
  interface Vue {
    $http: typeof axios;
  }
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
