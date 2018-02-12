import api from '@/api/server-side';
import { SET_SERVER_DATA } from '@/store/mutation-types';

export default {
  namespaced: true,

  // Initial state
  state: {
    lots: []
  },

  // Getters
  getters: {
    lots: state => state.lots
  },

  // Actions
  actions: {
    getLots: ({ commit, rootState }) => {
      const query = rootState.route && rootState.route.query ?
        rootState.route.query : {};

      api.getLots(query)
        .then((lots) => {
          commit(SET_SERVER_DATA, lots);
        });
    }
  },

  // Mutations
  mutations: {
    [SET_SERVER_DATA](state, lots) {
      state.lots = lots;
    }
  }
};

