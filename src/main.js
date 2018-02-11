// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import App from './App';
import router from './router';
import store from './store';

import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: '#4CAF50',
    accent: '#B9F6CA'
  }
});

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
