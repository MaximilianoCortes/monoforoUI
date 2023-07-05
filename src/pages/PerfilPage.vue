<template>
  <NavBar></NavBar>
  <div class="container">
    <div class="row">
      <div class="col">
        <img :src="profile.image" alt="Foto de perfil" class="img-fluid" />
        <img
          :src="profile.coverImage"
          alt="Foto de portada"
          class="img-fluid"
        />
      </div>
      <div class="col">
        <h2>{{ profile.username }}</h2>
        <p>{{ profile.email }}</p>
        <p>{{ profile.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
export default {
  data() {
    return {
      save_user: null,
      image: "",
      coverImage: "",
      username: "",
      email: "",
      description: "",
    };
  },
  components: {
    NavBar,
  },
  methods: {
    Usuario() {
      axios
        .get(`http://localhost:3000/current`)
        .then((response) => {
          this.save_user = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
