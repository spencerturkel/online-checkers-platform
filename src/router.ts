import Vue from 'vue';
import Router from 'vue-router';

import Home from './Home.vue';
import UserGuard from './UserGuard.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/find',
      component: UserGuard,
      props: {
        component: () =>
          import(/* webpackChunkName: "app.find" */ './Find.vue'),
      },
    },
    {
      path: '/room',
      component: UserGuard,
      props: {
        component: () =>
          import(/* webpackChunkName: "app.room" */ './room/Room.vue'),
      },
    },
    {
      path: '/join/:token',
      component: () => import(/* webpackChunkName: "app.join" */ './Join.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: UserGuard,
      props: {
        component: () =>
          import(/* webpackChunkName: "app.account" */ './user-account/Account.vue'),
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
