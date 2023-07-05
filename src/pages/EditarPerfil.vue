<template>
  <NavBar></NavBar>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="description" class="form-label">Descripción</label>
        <textarea
          class="form-control"
          id="description"
          v-model="description"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Foto de Perfil (URL)</label>
        <input type="text" class="form-control" id="image" v-model="image" />
      </div>
      <div class="mb-3">
        <label for="coverImage" class="form-label">Foto de Portada (URL)</label>
        <input
          type="text"
          class="form-control"
          id="coverImage"
          v-model="banner"
        />
      </div>
      <button type="submit" class="btn btn-secondary">Guardar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
export default {
  data() {
    return {
      description: "",
      image: "",
      banner: "",
    };
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },
  components: {
    NavBar,
  },
  methods: {
    submitForm() {
        const url = `http://localhost:3000/edit_profile`;

        const UpdateData = {
        description: this.description,
        picture: this.image,
        banner: this.banner
      };

      axios.put(url,UpdateData)
        .then(response => {
          console.log(response.data);
          this.publicaciones=response.data

          this.$router.push(`/Perfil`)
        })
        .catch(error => {
          console.error(error);
          this.errorMessage = 'Error en el inicio de sesión. Por favor, verifica tu correo y contraseña.';
        });
    },
  },
};
</script>
