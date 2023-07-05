<template>
  <div id="pagina">
    <NavBar/>
    <div class="d-flex justify-content-center">
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="publicaciones-lista">
              <div class="publicaciones-container">
                <div class="post-item card" v-if="publicacion">
                  <h2 class="card-title font-weight-bold text-light" id="titulo"> {{ publicacion.title }}</h2>
                  <p class="card-text text-muted font-weight-light"> {{ publicacion.body_text }}</p>
                  <img v-if="publicacion.img" :src="publicacion.img" alt="Imagen del post" class="card-img-top mw-100 mh-100">
                  <br>
                  <router-link :to="`/Perfil/${publicacion.userId}`" id="verPerfil" class="btn btn-primary">Ver perfil</router-link>
                </div>
              </div>
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
      publicacion: {},
      post_id: ''
    };
  },
  mounted() {
    this.post_id = this.$route.params.post_id;
    console.log(this.post_id);
    this.submitForm();
  },
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },
  methods: {
    async submitForm() {
      const url = `http://localhost:3000/getPost/${this.post_id}`;
      await axios.get(url)
        .then(response => {
          console.log(response.data.post);
          this.publicacion = response.data.post;
        })
        .catch(error => {
          console.error(error);
          this.errorMessage = 'Error al obtener la publicación';
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

#verPerfil{
  background-image: url('https://i.imgur.com/QdyXDv6.png');
}

#titulo{
  background-image: url('https://i.imgur.com/QdyXDv6.png');
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
