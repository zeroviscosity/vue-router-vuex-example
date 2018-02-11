import parking from '@/api/parking';
import { SET_PARKING_DATA } from '@/store/mutation-types';

export default {
  namespaced: true,

  // Initial state
  state: {
    locations: []
  },

  // Getters
  getters: {
    locations: (state, getters, rootState) => {
      const query = rootState.route && rootState.route.query ?
        rootState.route.query : {};

      const address = query.address ?
        query.address.toLowerCase() : '';
      const category = query.category ?
        query.category.toLowerCase() : '';
      const maxRate = query.maxRate ?
        parseFloat(query.maxRate) : Infinity;

      return state.locations.filter((loc) => {
        if (!loc.address.toLowerCase().includes(address)) {
          return false;
        }
        if (!loc.carpark_type.includes(category)) {
          return false;
        }
        if (loc.rate_half_hour > maxRate) {
          return false;
        }
        // Exclude locations missing rates
        return !!loc.rate_half_hour;
      });
    },
    query: (state, getters, rootState) => rootState.route.query
  },

  // Actions
  actions: {
    getData: ({ commit }) => (
      parking.getData()
        .then((resp) => {
          commit(SET_PARKING_DATA, resp);
        })
    )
  },

  // Mutations
  mutations: {
    [SET_PARKING_DATA](state, { data }) {
      state.locations = data.carparks;
    }
  }
};

