<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    :style="{ backgroundImage: backgroundImage }"
  >
    <div class="container-fluid">
      <router-link to="/publicaciones" class="navbar-brand" href="#">
        <img
          src="https://i.imgur.com/FzPdkDV.png"
          alt="Logo"
          width="80"
          height="80"
          class="d-inline-block align-top"
          style="margin: 5px"
        />
      </router-link>

      <div
        class="input-group flex-grow-1"
        style="width: 60%; margin-right: 20px"
      >
        <input type="text" class="form-control" placeholder="Buscar" />
        <button class="btn btn-outline-secondary" type="button">
          <i class="bi bi-search">Buscar</i>
        </button>
      </div>

      <div class="dropdown">
        <button
          class="btn btn-lg dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            :src="profile.picture || `https://th.bing.com/th/id/R.3d35762841538ffb1b3304618409d725?rik=kF7EZRj9RpU5kw&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2011%2f08%2f77853-msn-user-avatar.png&ehk=bBN9nR%2bWYDtj0HQRvGozm%2fzocYi9dXPUv7WgbXfOD%2fk%3d&risl=&pid=ImgRaw&r=0`"
            alt="Perfil"
            width="30"
            height="30"
            class="rounded-circle"
          />
          {{ user.name }}
        </button>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownMenuButton"
        >
          <li>
            <a class="dropdown-item" type="button" @click="navigateToUserProfile">
              Perfil de usuario
            </a>
          </li>
          <li>
            <router-link v-if="user.roles && user.roles.includes('Admin')" to="/Reportes" class="dropdown-item"
              >Panel de control</router-link
            >
          </li>
          <li>
            <a href="#" class="dropdown-item" @click="logout">Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "NavBar",
  data() {
    return {
      user: [],
      profile: [],
      backgroundImage: "url('https://i.imgur.com/QdyXDv6.png')",
    };
  },
  mounted() {
    this.getCurrentUser();
  },
  methods: {
    logout() {
      // Eliminar el token del localStorage
      localStorage.clear();

      // Redireccionar a la página principal
    },
    getCurrentUser() {
      axios
        .get("http://localhost:3000/current")
        .then((response) => {
          this.user = response.data;
          console.log(response.data);
          this.getCurrentProfile();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCurrentProfile() {
      axios
        .get(`http://localhost:3000/profile/${this.user._id}`)
        .then((response) => {
          this.profile = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    navigateToUserProfile() {
      this.$router.push(`/Perfil/${this.user._id}`).then(() => location.reload());
    },
  },
};
</script>

<style scoped>
.btn {
  background-image: url("https://i.imgur.com/p9Gd68n.png");
}
</style>
