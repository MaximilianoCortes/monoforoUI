<template>
  <div>
    <NavBar />

    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-6">
          <div class="text-center">
            <button @click="loadReportedPosts" class="btn btn-primary">Cargar publicaciones reportadas</button>
          </div>
          <PostsReportadosComponent :reportedPosts="reportedPosts" :isLoading="isLoadingPosts"
            @delete-post="deletePost" @dismiss-report="dismissReport" />
        </div>
        <div class="col-lg-6">
          <div class="text-center">
            <button @click="loadReportedUsers" class="btn btn-primary">Cargar usuarios reportados</button>
          </div>
          <UsuariosReportadosComponent :reportedUsers="reportedUsers" :isLoading="isLoadingUsers"
            @ban-user="banUser" @dismiss-report="dismissReport" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import PostsReportadosComponent from '../components/PostsReportadosComponent.vue';
import UsuariosReportadosComponent from '../components/UsuariosReportadosComponent.vue';
import axios from 'axios';
export default {
  name: 'ReportesPage',
  components: {
    NavBar,
    PostsReportadosComponent,
    UsuariosReportadosComponent
  }, 
  data() {
    return {
      reportedPosts: [],
      reportedUsers: [],
      isLoadingPosts: false,
      isLoadingUsers: false
    };
  },
  created() {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

},
  methods: {
    loadReportedPosts() {
      this.isLoadingPosts = true;

      // Simulación de carga de datos
      setTimeout(() => {
        this.reportedPosts = [
          { id: 1, title: 'Publicación 1', reportReason: 'Contenido inapropiado' },
          { id: 2, title: 'Publicación 2', reportReason: 'Spam' },
          { id: 3, title: 'Publicación 3', reportReason: 'Comportamiento ofensivo' }
        ];
        this.isLoadingPosts = false;
      }, 2000);
    },
    loadReportedUsers() {
      this.isLoadingUsers = true;

      // Simulación de carga de datos
      setTimeout(() => {
        this.reportedUsers = [
          { id: 1, name: 'Usuario 1', reportReason: 'Comportamiento inapropiado' },
          { id: 2, name: 'Usuario 2', reportReason: 'Acoso' },
          { id: 3, name: 'Usuario 3', reportReason: 'Incumplimiento de normas' }
        ];
        this.isLoadingUsers = false;
      }, 2000);
    },
    deletePost(postId) {
      // Lógica para eliminar la publicación con el ID proporcionado
      console.log('Eliminar publicación con ID:', postId);
    },
    dismissReport(reportId) {
      // Lógica para descartar el reporte con el ID proporcionado
      console.log('Descartar reporte con ID:', reportId);
    },
    banUser(userId) {
      // Lógica para banear al usuario con el ID proporcionado
      console.log('Banear usuario con ID:', userId);
    }
  }
};
</script>

  