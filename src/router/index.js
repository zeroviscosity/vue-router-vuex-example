import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import ParkingClientSide from '@/components/ParkingClientSide';
import ParkingServerSide from '@/components/ParkingServerSide';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Green P Parking Locations in Toronto',
      component: Home
    },
    {
      path: '/client-side',
      name: 'Green P Parking Locations in Toronto: Client-side Processing',
      component: ParkingClientSide
    },
    {
      path: '/server-side',
      name: 'Green P Parking Locations in Toronto: Server-side Processing',
      component: ParkingServerSide
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});
