import api from '@/api/client-side';
import { SET_CLIENT_DATA } from '@/store/mutation-types';

export default {
  namespaced: true,

  // Initial state
  state: {
    lots: []
  },

  // Getters
  getters: {
    lots: (state, getters, rootState) => {
      const query = rootState.route && rootState.route.query ?
        rootState.route.query : {};

      const address = query.address ?
        query.address.toLowerCase() : '';
      const category = query.category ?
        query.category.toLowerCase() : '';
      const maxRate = query.maxRate ?
        parseFloat(query.maxRate) : Infinity;

      return state.lots.filter(lot => (
        lot.address.toLowerCase().includes(address) &&
          lot.carpark_type.includes(category) &&
          lot.rate_half_hour <= maxRate &&
          lot.rate_half_hour
      ));
    },
    query: (state, getters, rootState) => rootState.route.query
  },

  // Actions
  actions: {
    getLots: ({ commit }) => (
      api.getLots()
        .then((resp) => {
          commit(SET_CLIENT_DATA, resp);
        })
    )
  },

  // Mutations
  mutations: {
    [SET_CLIENT_DATA](state, { data }) {
      state.lots = data.carparks;
    }
  }
};

