import api from '@/api/client-side';
import { SET_CLIENT_DATA } from '@/store/mutation-types';
import filterLots from '@/util/filter-lots';

export default {
  namespaced: true,

  // Initial state
  state: {
    lots: []
  },

  // Getters
  getters: {
    lots: (state, getters, rootState, rootGetters) => (
      filterLots(state.lots, rootGetters.query)
    )
  },

  // Actions
  actions: {
    getLots: ({ commit }) => (
      api.getLots()
        .then((lots) => {
          commit(SET_CLIENT_DATA, lots);
        })
    )
  },

  // Mutations
  mutations: {
    [SET_CLIENT_DATA](state, lots) {
      state.lots = lots;
    }
  }
};

