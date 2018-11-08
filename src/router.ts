import Vue from 'vue';
import Router, { NavigationGuard } from 'vue-router';

import Home from './Home.vue';
import { httpClient } from './main';
import Account from './user-account/Account.vue';
import Board from './views/Board.vue';
import Game from './views/Game.vue';
import Lose from './views/Lose.vue';
import Waiting from './views/Waiting.vue';
import Win from './views/Win.vue';

Vue.use(Router);

const authGuard: NavigationGuard = async (to, from, next) => {
  if ((await httpClient.head('/user')).status === 403) {
    next('/');
  } else {
    next();
  }
};

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/room',
      component: () =>
        import(/* webpackChunkName: "app.room" */ /* webpackPrefetch: true */
        './room/Room.vue'),
      beforeEnter: authGuard,
    },
    {
      path: '/join/:token',
      component: () => import(/* webpackChunkName: "app.join" */ './Join.vue'),
    },
    {
      path: '/game',
      name: 'game-screen',
      component: Game,
    },
    {
      path: '/waiting',
      name: 'waiting',
      component: Waiting,
    },
    {
      path: '/win',
      name: 'win-screen',
      component: Win,
    },
    {
      path: '/lose',
      name: 'lose-screen',
      component: Lose,
    },
    {
      path: '/board',
      name: 'boardSpace',
      component: Board,
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      beforeEnter: authGuard,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
