import Vue from 'vue';
import Router from 'vue-router';

import AccountPage from './views/AccountPage.vue';
import Board from './views/Board.vue';
import Game from './views/Game.vue';
import Home from './views/Home.vue';
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
      component: () =>
        import(/* webpackChunkName: "app.room" */ /* webpackPrefetch: true */
        './room/Room.vue'),
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
      component: AccountPage,
    },
  ],
});
