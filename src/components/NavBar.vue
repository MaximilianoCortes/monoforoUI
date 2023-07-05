<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" :style="{ backgroundImage: backgroundImage }">
    <div class="container-fluid">
      <router-link to="/publicaciones" class="navbar-brand" href="#">
        <img src="https://i.imgur.com/FzPdkDV.png" alt="Logo" width="80" height="80" class="d-inline-block align-top" style="margin: 5px;">
      </router-link>

      <div class="input-group flex-grow-1" style="width: 60%; margin-right: 20px;">
        <input type="text" class="form-control" placeholder="Buscar">
        <button class="btn btn-outline-secondary" type="button">
          <i class="bi bi-search">Buscar</i>
        </button>
      </div>

      <div class="dropdown">
        <button class="btn btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          <img :src="User.img" alt="Perfil" width="30" height="30" class="rounded-circle">
          {{ User.username }}
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
          <li><router-link to="/Perfil" class="dropdown-item">Perfil de usuario</router-link></li>
          <li><router-link to="/Reportes" class="dropdown-item">Panel de control</router-link></li>
          <li><router-link to="/CrearPublicacion" class="dropdown-item">Configuración</router-link></li>
          <li><a href="#" class="dropdown-item" @click="logout">Cerrar sesión</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      User: {
        id: "1",
        name: "Usuario",
        email: "email@gmail.com",
        img: "https://i.imgur.com/OpfvTcj.png"
      },
      backgroundImage: "url('https://i.imgur.com/QdyXDv6.png')",
    };
  },
  methods: {
    logout() {
      // Eliminar el token del localStorage
      localStorage.removeItem('token');

      // Redireccionar a la página principal
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.btn {
  background-image: url('https://i.imgur.com/p9Gd68n.png');
}
</style>
