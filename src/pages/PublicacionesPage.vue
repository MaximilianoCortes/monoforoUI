<template> 
  <div id="pagina">
    
    <NavBar/>
    <div class="d-flex justify-content-center">
    <div id="container">
      <div class="botones">
        <div class="botones-inner">
          <router-link to="/CrearPublicacion"><button id="publicar" type="submit" class="btn btn-block mb-3">Publicar</button></router-link>
          <button id="filtro" class="btn">Actualizar</button>
          <button id="filtro" class="btn">Destacado</button>
          <button id="filtro" class="btn">Nuevo</button>
        </div>
      </div>
      <div class="publicaciones-lista">
        <div class="publicaciones-container">
          <PublicacionComponent
            v-for="publicacion in publicaciones"
            :key="publicacion._id"
            :publicacion="publicacion"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import PublicacionComponent from '../components/PublicacionComponent.vue'
import axios from 'axios'
export default {
  name: 'PublicacionesPage',
  components: {
    NavBar,
    PublicacionComponent,
  },
  data() {
    return {
      publicaciones: []
    };
  },
  mounted(){
    this.submitForm()
  },
//PONER PARA QUE EL TOKEN FUNCIONE BIEEN
  created() {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

},
  methods:{
    submitForm() {
      const url = `http://localhost:3000/all_posts`;
      axios.get(url)
        .then(response => {
          console.log(response.data);
          this.publicaciones=response.data
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
  height: calc(100vh -100vh);
}

.publicaciones-container {
  height: fit-content;
  margin-left: 20px;
  margin-right: 20px;
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
