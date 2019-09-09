import Vue from 'vue';
import Vuex from 'vuex';

import fetchResolve from './plugins/fetchResolve';

import starships from './store/starships';
import errors from './store/errors';


Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [fetchResolve],
  modules: {
    starships,
    errors,
  },
  state: {
    BASE_URI: new URL('https://swapi.co/api/'),
  },
  mutations: {
    DATA_RECEIVED() {},
  },
  actions: {

  },
});
