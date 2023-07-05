<template>
  <div>
    <NavBar />

    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-6">
          <div class="text-center">
          </div>
          <PostsReportadosComponent :reportedPosts="reportedPosts"
            @delete-post="deletePost" @dismiss-report="dismissReport" />
        </div>
        <div class="col-lg-6">
          <div class="text-center">
          </div>
          <UsuariosReportadosComponent :reportedUsers="reportedUsers"
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
    };
  },
  created() {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

},
mounted(){
this.showReportedPost()
this.showResponsibleUsers()
},
  methods: {

    showReportedPost(){

      const url = `http://localhost:3000/reported_posts`;
      axios.get(url)
        .then(response => {
          console.log(response.data);
          this.reportedPosts=response.data
        })
        .catch(error => {
          console.error(error);

        });

    },
    showResponsibleUsers(){
      const url = `http://localhost:3000/reported_users`;
      axios.get(url)
        .then(response => {
          this.reportedUsers=response.data
          console.log(response.data);
        
        })
        .catch(error => {
          console.error(error);

        });

    },

    deletePost(postId) {
      const url = `http://localhost:3000/${postId}`;
      axios.delete(url)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
          console.error(error);
        });
      console.log('Eliminar publicación con ID:', postId);
      location.reload();
    },
    dismissReport(reportId) {
      const url = `http://localhost:3000/dismiss_report/${reportId}`;
      axios.delete(url)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
          console.error(error);
        });
      console.log('Descartar reporte con ID:', reportId);
      location.reload();
    },
    banUser(user_id) {
      const url = `http://localhost:3000/ban/${user_id}`;
      axios.post(url)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
          console.error(error);
          this.errorMessage = 'Error en el inicio de sesión. Por favor, verifica tu correo y contraseña.';
        });
      console.log('Banear usuario con ID:', user_id);
      location.reload();
    }
  }
};
</script>

  