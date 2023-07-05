<template>
    <NavBar></NavBar>
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="description" class="form-label">Descripción</label>
          <textarea class="form-control" id="description" v-model="profile.description"></textarea>
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Foto de Perfil</label>
          <input type="file" class="form-control" id="image" @change="onImageChange">
        </div>
        <div class="mb-3">
          <label for="coverImage" class="form-label">Foto de Portada</label>
          <input type="file" class="form-control" id="coverImage" @change="onCoverImageChange">
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
      </form>
    </div>
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue'
  export default {
    data() {
      return {
        profile: {
          description: '',
          image: null,
          coverImage: null,
        }
      }
    },
    components: {
      NavBar
    },
    methods: {
      onImageChange(e) {
        this.profile.image = e.target.files[0];
      },
      onCoverImageChange(e) {
        this.profile.coverImage = e.target.files[0];
      },
      submitForm() {
        // Aquí va la lógica para enviar la información al servidor
      }
    }
  }
  </script>
  