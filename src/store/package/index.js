import packageService from '@/service/package.service';
import singleModule from './single';

export default {
  namespaced: true,
  modules: {
    single: singleModule,
  },

  state: {
    total: null,
    packageList: null,
    notFound: false,
    query: null,
    page: 1,
  },
  mutations: {
    setPackageList(state, { list, total, query, page }) {
      state.notFound = false;
      state.packageList = list;
      state.total = total;
      state.query = query;
      state.page = page;
    },

    setNotFound(state, query) {
      state.packageList = null;
      state.total = null;
      state.notFound = true;
      state.query = query;
    },
  },
  actions: {
    async findPackages({ commit, state }, { query, page }) {
      const currentPage = page || state.page;

      const { data } = await packageService.findPackages({
        query,
        page: currentPage,
      });

      if (data.results.length > 0) {
        return commit('setPackageList', {
          list: data.results,
          total: data.total,
          query,
          page: currentPage,
        });
      }

      commit('setNotFound', { query });
    },

    paginate({ state, dispatch }, page) {
      const { query } = state;
      return dispatch('findPackages', {
        query,
        page,
      });
    },
  },
};
