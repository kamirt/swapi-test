import Vue from 'vue';

export default {
  state: {
    previous: null,
    next: null,
    count: 0,
    results: [],
    item: {},
  },
  actions: {
    async GET_STARSHIPS({ commit, state, rootState }, payload) {
      commit('SET_STARSHIPS', {
        previous: null, next: null, count: state.count, results: [],
      })
      const url = new URL('starships/', rootState.BASE_URI);
      Object.keys(payload)
        .forEach(key => url.searchParams.append(key, payload[key]))
      const response = await fetch(url);
      commit({
        type: 'DATA_RECEIVED',
        response,
        furtherCommit: 'SET_STARSHIPS',
        errorCommit: 'SET_ERROR',
      });
    },
    async GET_STARSHIP_ITEM({ commit }, payload) {
      const response = await fetch(payload.url);
      commit({
        type: 'DATA_RECEIVED',
        response,
        furtherCommit: 'SET_STARSHIP_ITEM',
        errorCommit: 'SET_ERROR',
      });
    },
  },
  mutations: {
    SET_STARSHIPS(state, payload) {
      Vue.set(state, 'previous', payload.previous);
      Vue.set(state, 'next', payload.next);
      Vue.set(state, 'count', payload.count);
      Vue.set(state, 'results', [...payload.results]);
    },
    SET_STARSHIP_ITEM(state, payload) {
      Vue.set(state, 'item', payload);
    },
  },
};
