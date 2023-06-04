import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '../pages/LandingPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';

const routes = [

    {
      name: 'LandingPage',
      path: '/',
      component: LandingPage,
      props: true,
    },
    {
      name: 'RegisterPage',
      path: '/Register',
      component: RegisterPage,
      props:true
    },
    {
      name: 'LoginPage',
      path: '/Login',
      component: LoginPage,
      props:true
    },
    
  ];

const router = createRouter({
    routes,
    history: createWebHistory(),
  });

export default router;