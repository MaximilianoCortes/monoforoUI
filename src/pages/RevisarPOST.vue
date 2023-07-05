<template>
  <div id="pagina">
    <NavBar/>
    <div class="d-flex justify-content-center">
      <div id="container">
        <div class="publicaciones-lista">
          <div class="publicaciones-container">
            <div class="post-item">
              <h2>{{ publicacion.title }}</h2>
              <p>{{ publicacion.body_text }}</p>
              <img :src="publicacion.img" alt="Imagen del post">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import NavBar from '../components/NavBar.vue'
import axios from 'axios'

export default {
  name: 'RevisionP',
  components: {
    NavBar,
  },
  data() {
    return {
      publicacion: [],
      post_id: ''
    };
  },
  mounted() {
    this.post_id = this.$route.params.post_id;
    this.submitForm();
  },
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },
  methods: {
    submitForm() {
      const url = `http://localhost:3000/getPost`;
      const postData = {
        post_id: this.post_id
      }
      axios.get(url, postData)
        .then(response => {
          console.log(response.data);
          this.publicacion = response.data;
        })
        .catch(error => {
          console.error(error);
          this.errorMessage = 'Error en el inicio de sesión. Por favor, verifica tu correo y contraseña.';
        });
    },

  }
};
</script>

<style scoped>
#publicar{
  background-image: url('https://i.imgur.com/p9Gd68n.png');
  width: 100%;
  height: 200px;
  margin-bottom: 50px;
}
#filtro{
  background-image: url('https://i.imgur.com/p9Gd68n.png');
  width: 100%;
  height: 100px;
}
#container {
  background-image: url('https://i.imgur.com/p9Gd68n.png');
  display: flex;
  justify-content: space-around; 
  width: 100%;
  height: 88.1vh;
  overflow: hidden; 
}

.publicaciones-lista {
  width: 85%;
  overflow-y: scroll; 
  height: calc(100vh - 100vh);
}

.publicaciones-container {
  height: fit-content;
  margin-left: 20px;
  margin-right: 20px;
}

.post-item {
  margin-bottom: 20px;
}

.botones {
  width: 15%;
  background-image: url('https://i.imgur.com/qWuUWKH.png');
  background-size: cover;
  background-position: center;
  padding: 10px;
}

.botones-inner {
  display: flex;
  flex-direction: column;
  gap: 15px; 
}
</style>
