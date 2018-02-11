import Vue from 'vue';
import Vuex from 'vuex';
import parking from './modules/parking';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    parking
  },
  strict: debug
});
