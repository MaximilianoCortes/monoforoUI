<template>
    <div class="card" v-if="publicacion" :style="{ width: '100%', backgroundImage: backgroundColor }">
      <div class="card-header">
        <div class="dropdown" >
            <button class="btn btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" :style="{ backgroundColor: backgroundColorBoton, color: 'white' }">
  <img :src="publicacion.usuario.imagen" alt="Perfil" width="30" height="30" class="rounded-circle">
  {{ publicacion.usuario.nombre }}
</button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li><router-link to="/Perfil" class="dropdown-item" >Ver perfil</router-link></li>
            <li><router-link to="/Reportes" class="dropdown-item">Reportar</router-link></li>
          </ul>
        </div>
        <h4 class="card-title">{{ publicacion.titulo }}</h4>
      </div>
      <div class="card-body">
        <p>{{ publicacion.cuerpo.texto }}</p>
        <img v-if="publicacion.cuerpo.imagen" :src="publicacion.cuerpo.imagen" alt="Imagen de la publicación">
      </div>
      <div class="card-footer">
        <button @click="updateLikes(1)" class="btn text-white">
            <i class="bi bi-hand-thumbs-up-fill"></i>
        </button>

        <div class="text-white">Likes: {{ likes }}</div>

        <button @click="updateLikes(-1)" class="btn text-white">
            <i class="bi bi-hand-thumbs-down-fill"></i>
        </button>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PublicacionComponent',
    props: {
      publicacion: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        likes: this.publicacion.likes,
        backgroundColor: "url('https://i.imgur.com/qWuUWKH.png')",
        backgroundColorBoton: "url('https://i.imgur.com/p9Gd68n.png')",
      };
    },
    methods: {
      updateLikes(value) {
        this.likes += value;
      }
    }
  };
</script>

<style scoped>
.card {
  width: fit-content;
  margin-top: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  color: white;
}

.card-title {
  margin-left: 10px;
  margin-top: 5px;
}
.card-body {
  background-color: white;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  color: white;
}
</style>
  