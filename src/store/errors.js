export default {
  state: {
    message: '',
  },
  mutations: {
    SET_ERROR(state, payload) {
      state.message = payload;
    },
    REMOVE_ERROR(state) {
      state.message = '';
    },
  },
};
