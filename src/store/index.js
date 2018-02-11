import Vue from 'vue';
import Vuex from 'vuex';
import clientSide from './modules/client-side';
import serverSide from './modules/server-side';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    clientSide,
    serverSide
  },
  strict: debug
});
