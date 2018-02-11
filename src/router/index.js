import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import ClientSide from '@/components/ClientSide';
import ServerSide from '@/components/ServerSide';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/client-side',
      name: 'ClientSide',
      component: ClientSide
    },
    {
      path: '/server-side',
      name: 'ServerSide',
      component: ServerSide
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});
