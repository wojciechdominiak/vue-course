import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: {
    increament(state) {
      state.counter++;
    },
    increase(state, val) {
      console.log(state);
      state.counter = state.counter + val.value;
    },
  },
  actions: {
    increament(context) {
      setTimeout(function () {
        context.commit('increament');
      }, 2000);
    },
    increase(context, val) {
      setTimeout(function () {
        context.commit('increase', val);
      }, 2000);
      console.log(context);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizeCounter(_state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    },
  },
};

const store = createStore({
  modules: {
    counter: counterModule,
  },
  state() {
    return {
      isLoged: false,
    };
  },
  mutations: {
    logToggle(state) {
      state.isLoged = !state.isLoged;
    },
  },
  actions: {
    logToggle(context) {
      context.commit('logToggle');
    },
  },
  getters: {
    isLoged(state) {
      return state.isLoged;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
