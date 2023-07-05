<template>
  <NavBar/>

  <form @submit.prevent="submitForm">
    <div class="container" style="width: 60%;"><br>
      <h2 style="text-align:center;">Crear Publicación</h2>
      <div class="mb-3">
        <br><input type="text" class="form-control" id="exampleFormControlInput1" v-model="title" placeholder="Titulo" required>
      </div>
      <div class="mb-3">
        <textarea class="form-control" id="exampleFormControlTextarea1" v-model="body_text" placeholder="Cuerpo de texto (opcional)" rows="5"></textarea>
      </div>
      <div class="d-flex justify-content-between">
        <div class="mb-3" style="width: 35%;">
          <input class="form-control" type="text" id="formText" v-model="img" placeholder="Url de imagen :p">
        </div>
        <div style="width: 35%;">
          <button type="submit" class="btn btn-secondary btn-block" style="width: 100%;">Publicar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'CrearPublicacionPage',
  data() {
    return {
      title: '',
      body_text: '',
      img: '',
      errorMessage: ''
    }
  },
  created() {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

},
  components: {
    NavBar
  },
  methods: {
    submitForm() {
      // Verificar si se han completado todos los campos obligatorios
      if (!this.title) {
        this.errorMessage = 'Por favor, complete todos los campos obligatorios.';
        return;
      }

      const url = `http://localhost:3000/new_post`;

      const postData = {
        title: this.title,
        body_text: this.body_text,
        img: this.img
      };

      axios.post(url, postData)
        .then(response => {
          console.log(response.data);
          // Aquí puedes realizar la redirección a la siguiente pestaña
          this.$router.push('/Publicaciones');
        })
        .catch(error => {
          console.error(error);
          this.errorMessage = 'Ha ocurrido un error al crear la publicación. Por favor, inténtalo de nuevo más tarde.';
        });
    },
  }
};
</script>

