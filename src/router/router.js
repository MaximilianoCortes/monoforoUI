import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
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
import RevisionP from '../pages/RevisarPOST.vue'

const routes = [

    {
      name: 'LandingPage',
      path: '/',
      component: LandingPage,
      props: true,
      meta: {autenticacion : false}
    },
    {
      name: 'UpdateProfile',
      path: '/update',
      component: EditarPerfil,
      props: true,
      meta: {autenticacion : true}
    },{
      name: 'MakeReportsPage',
      path: '/report/:post_id',
      component: ViewReportePosts,
      props: true,
      meta: {autenticacion : true}
    },
    {
      name: 'RegisterPage',
      path: '/Register',
      component: RegisterPage,
      props:true,
      meta: {autenticacion : false}
    },
    {
      name: 'LoginPage',
      path: '/Login',
      component: LoginPage,
      props:true,
      meta: {autenticacion : false}
    },
    {
      name: 'PublicacionesPage',
      path: '/Publicaciones',
      component: PublicacionesPage,
      props:true,
      meta: {autenticacion : true}
    },
    {
      name: 'RevisarPost',
      path: '/Revisar/:post_id',
      component: RevisionP,
      props:true,
      meta: {autenticacion : true}
    },
    {
      name: 'ReportesPage',
      path: '/Reportes',
      component: ReportesPage,
      props:true,
      meta: {autenticacion : true}
    },
    {
      name: 'CrearPublicacionPage',
      path: '/CrearPublicacion',
      component: CrearPublicacionPage,
      props:true,
      meta: {autenticacion : true}
    },
    {
      name: 'PerfilPage',
      path: '/Perfil',
      component: PerfilPage,
      props:true,
      meta: {autenticacion : true}
    },
    {
      name: 'PerfilPageByPubli',
      path: '/Perfil/:userId',
      component: perfilPageByPubli,
      props:true,
      meta: {autenticacion : true}
    },
    
    
  ];

const router = createRouter({
    routes,
    history: createWebHistory(),
  });

  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.autenticacion);
    const currentUser = localStorage.getItem('token');

    if (requiresAuth && !currentUser) {
        // Si la ruta requiere autenticación y no hay token, redirige a la página de inicio de sesión
        next('/login');
    } else if (!requiresAuth && currentUser) {
        // Si la ruta no requiere autenticación y hay un token, redirige a '/publicaciones'
        next('/publicaciones');
    } else if (requiresAuth && currentUser) {
        // Si la ruta requiere autenticación y hay un token, añade el token a los encabezados comunes y permite el acceso
        setAuthToken();
        next();
    } else {
        // En todos los demás casos, simplemente permite el acceso
        next();
    }
});

function setAuthToken() {
    const token = localStorage.getItem('token');

    if (token) {
        // Aplica el token a cada solicitud si está logeado
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // Elimina el encabezado de autorización
        delete axios.defaults.headers.common['Authorization'];
    }
}



  
export default router;