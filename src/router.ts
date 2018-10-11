import Vue from 'vue';
import Router from 'vue-router';

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
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
  ],
});
