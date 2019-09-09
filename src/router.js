import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/starship',
      name: 'starship',
      component: () => import('./views/Starship.vue'),
      beforeEnter: (to, from, next) => {
        if (to.query.url) {
          store.dispatch('GET_STARSHIP_ITEM', { url: to.query.url });
          next();
        }
        next();
      },
    },
  ],
});

export default router;
