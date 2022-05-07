import { createStore } from 'vuex';

import rootMutatuions from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters';
import counterModule from './counter/index.js';

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoged: false,
    };
  },
  mutations: rootMutatuions,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
