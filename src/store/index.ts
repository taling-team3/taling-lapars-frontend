import { createStore } from 'vuex';

export default createStore({
  state: {
    idToken: '',
    name: '',
  },
  getters: {
    isAuthenticated: (state) => !!state.idToken,
    getName: (state) => state.name,
  },
  mutations: {
    setIdToken: (state, idToken) => {
      state.idToken = idToken;
    },
    setName: (state, name) => {
      state.name = name;
    },
  },
  actions: {
    setIdToken: async ({ commit }, idToken) => {
      commit('setIdToken', idToken);
    },
    setName: async ({ commit }, name) => {
      commit('setName', name);
    },
  },
  modules: {
  },
});
