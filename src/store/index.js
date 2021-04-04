import Vue from 'vue';
import Vuex from 'vuex';
import packageModule from './package/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    package: packageModule,
  },

  state: {},
  mutations: {},
  actions: {},
});
