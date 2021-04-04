import packageService from '@/service/package.service';

export default {
  namespaced: true,
  state: {
    baseUrl: 'https://cdn.jsdelivr.net',
    modalState: false,
    currPackage: null,
    versions: null,
    structure: null,
  },

  mutations: {
    setModalState(state, value) {
      state.modalState = value;
    },
    setPackageData(state, { currPackage, versions, structure }) {
      state.currPackage = currPackage;
      state.versions = versions;
      state.structure = structure;
    },
    setStructure(state, { structure }) {
      state.structure = structure;
    },
    resetState(state) {
      state.modalState = false;
      state.currPackage = null;
      state.versions = null;
      state.structure = null;
    },
  },

  actions: {
    async fetchPackage({ commit }, currPackage) {
      commit('setModalState', true);
      const { data: versionData } = await packageService.fetchVersions(
        currPackage.name
      );

      const { data: fileData } = await packageService.fetchVersionFiles(
        currPackage.name,
        currPackage.version
      );

      commit('setPackageData', {
        currPackage,
        versions: versionData.versions,
        structure: fileData,
      });
    },

    async changeVersion({ commit, state }, version) {
      const { data: fileData } = await packageService.fetchVersionFiles(
        state.currPackage.name,
        version
      );

      commit('setStructure', {
        structure: fileData,
      });
    },

    reset({ commit }) {
      commit('resetState');
    },
  },
};
