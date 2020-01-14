import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import AroundMe from '@/components/AroundMe';
import MyAddresses from '@/components/MyAddresses';
import AddAddress from '@/components/AddAddress';
import Lignes from '@/components/Lignes';
import DisplayVideo from '@/components/DisplayVideo';
import TestModernizr from '@/components/TestModernizr';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/aroundme',
      name: 'Aroundme',
      component: AroundMe,
    },
    {
      path: '/myaddresses',
      name: 'MyAddresses',
      component: MyAddresses,
    },
    {
      path: '/addaddress',
      name: 'AddAddress',
      component: AddAddress,
    },
    {
      path: '/lignes',
      name: 'Lignes',
      component: Lignes,
    },
    {
      path: '/video',
      name: 'DisplayVideo',
      component: DisplayVideo,
    },
    {
      path: '/modernizr',
      name: 'TestModernizr',
      component: TestModernizr,
    },
    {
      path: '/offline',
      name: 'offline',
    },
  ],
});
