import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '../pages/LandingPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import PublicacionesPage from '../pages/PublicacionesPage.vue';
import ReportesPage from '../pages/ReportesPage.vue';
import CrearPublicacionPage from '../pages/CrearPublicacionPage.vue';
import PerfilPage from '../pages/PerfilPage.vue';
import EditarPerfil from '../pages/EditarPerfil.vue';
import ViewReportePosts from '../pages/ViewReportePosts.vue';
import perfilPageByPubli from '../pages/PerfilPageByPubli.vue';
import RevisarPost from '../pages/RevisarPOST.vue'

const routes = [

    {
      name: 'LandingPage',
      path: '/',
      component: LandingPage,
      props: true,
    },
    {
      name: 'UpdateProfile',
      path: '/update',
      component: EditarPerfil,
      props: true,
    },{
      name: 'MakeReportsPage',
      path: '/report/:post_id',
      component: ViewReportePosts,
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
    {
      name: 'PublicacionesPage',
      path: '/Publicaciones',
      component: PublicacionesPage,
      props:true
    },
    {
      name: 'RevisarPost',
      path: '/Revisar/:post_id',
      component: RevisarPost,
      props:true
    },
    {
      name: 'ReportesPage',
      path: '/Reportes',
      component: ReportesPage,
      props:true
    },
    {
      name: 'CrearPublicacionPage',
      path: '/CrearPublicacion',
      component: CrearPublicacionPage,
      props:true
    },
    {
      name: 'PerfilPage',
      path: '/Perfil',
      component: PerfilPage,
      props:true
    },
    {
      name: 'PerfilPageByPubli',
      path: '/Perfil/:userId',
      component: perfilPageByPubli,
      props:true
    },
    
    
  ];

const router = createRouter({
    routes,
    history: createWebHistory(),
  });

export default router;