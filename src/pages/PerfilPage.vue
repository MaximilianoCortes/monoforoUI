<template>
  <NavBar></NavBar>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <div class="banner-container">
          <img
            :src="save_profile.banner || 'https://picsum.photos/200'"
            alt="Foto de portada"
            class="img-fluid cover-image"
          />
          <div class="profile-container">
            <img
              :src="save_profile.picture || 'https://picsum.photos/200'"
              alt="Foto de perfil"
              class="img-fluid profile-image"
            />
          </div>
        </div>
        <div class="user-info">
          <h2>{{ save_user.name }}</h2>
          <h4>Descripción</h4>
          <p>{{ save_profile.description }}</p>
            <router-link to="/update" class="btn-edit-profile" v-if="current">Editar perfil</router-link>
        </div>
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
      save_user: [],
      save_profile: [],
      user_id: "",
      current: false
    };
  },
  components: {
    NavBar,
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
    }
  },
  mounted() {
    this.user_id = this.$route.params.userId;
    this.checkCurrentUser();
    this.CurrentProfile()
  },
  methods: {
    checkCurrentUser() {
      axios
        .get("http://localhost:3000/current")
        .then((response) => {
          const currentUserId = response.data._id;

          if (currentUserId === this.user_id) {
            this.save_user = response.data
            this.current=true
          } else {
            this.publiUser();
         
          }
      

        })
        .catch((error) => {
          console.log(error);
        });
      
    },
    publiUser() {
      axios
        .get(`http://localhost:3000/${this.user_id}/user`)
        .then((response) => {
          this.save_user = response.data;
          console.log(response.data);
         
        })
        .catch((error) => {
          console.log(error);
        });
    },

    CurrentProfile() {
      axios
        .get(`http://localhost:3000/${this.user_id}/profile`)
        .then((response) => {
          this.save_profile = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.banner-container {
  position: relative;
}

.profile-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.profile-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
  z-index: 1;
}

.cover-image {
  width: 100%;
  height: 30vh; /* Ajusta el alto del banner según tus necesidades */
  object-fit: cover;
}

.user-info {
  margin-top: 20px;
}

.btn-edit-profile {
  background-color: grey;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>