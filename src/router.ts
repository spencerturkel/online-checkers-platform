import Vue from 'vue';
import Router from 'vue-router';

import Home from './Home.vue';
import Room from './room/Room.vue';
import Account from './user-account/Account.vue';
import UserGuard from './UserGuard.vue';
import Board from './views/Board.vue';
import Game from './views/Game.vue';
import Lose from './views/Lose.vue';
import Waiting from './views/Waiting.vue';
import Win from './views/Win.vue';

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
      path: '/room',
      component: UserGuard,
      props: {
        component: Room,
      },
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
      component: UserGuard,
      props: {
        component: Account,
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
