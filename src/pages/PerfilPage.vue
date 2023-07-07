<template>
  <NavBar></NavBar>
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <div class="banner-container">
          <img
            :src="save_profile.banner || 'https://wallpaperaccess.com/full/2200497.jpg'"
            alt="Foto de portada"
            class="img-fluid cover-image"
          />
          <div class="profile-container">
            <img
              :src="save_profile.picture || 'https://th.bing.com/th/id/R.3d35762841538ffb1b3304618409d725?rik=kF7EZRj9RpU5kw&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2011%2f08%2f77853-msn-user-avatar.png&ehk=bBN9nR%2bWYDtj0HQRvGozm%2fzocYi9dXPUv7WgbXfOD%2fk%3d&risl=&pid=ImgRaw&r=0'"
              alt="Foto de perfil"
              class="img-fluid profile-image"
            />
          </div>
        </div>
        <div class="user-info">
          <h2>{{ save_user.name }}</h2>
          <h4>Descripción</h4>
          <p>{{ save_profile.description }}</p>
          <router-link to="/update" class="btn-edit-profile" v-if="current"
            >Editar perfil</router-link
          >
        </div>
      </div>
      <div class="col-12">
        <div class="publicaciones-lista ">
          <div class="publicaciones-container ">
            <PublicacionComponent
              v-for="publicacion in publicaciones.slice().reverse()"
              :key="publicacion._id"
              :publicacion="publicacion"
              :current_user="current"
              :publi_user="publi_user"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import PublicacionComponent from "../components/PublicacionComponent.vue";

export default {
  data() {
    return {
      save_user: [],
      save_profile: [],
      user_id: ``,
      current: false,
      publi_user:false,
      publicaciones: [],
    };
  },
  components: {
    NavBar,
    PublicacionComponent,
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
    this.CurrentProfile();
    this.getUserPosts()
  },
  methods: {
    checkCurrentUser() {
      axios
        .get("http://localhost:3000/current")
        .then((response) => {
          const currentUserId = response.data._id;

          if (currentUserId === this.user_id) {
            this.save_user = response.data;
            this.current = true;
          } else {
            this.publiUser();
            this.publi_user=true
            
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
        .get(`http://localhost:3000/profile/${this.user_id}`)
        .then((response) => {
          this.save_profile = response.data;
          console.log(response.data);

        })
        .catch((error) => {
          console.log(error);
        });
    },
    
    getUserPosts() {
      const url = `http://localhost:3000/getUserPosts`;

      const urlUser ={
        user_id:this.user_id
      }
      axios
        .post(url, urlUser)
        .then(response => {
          this.publicaciones = response.data.posts;
          console.log(this.publicaciones);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.banner-container {
  position: relative;
}

.container{
  overflow: hidden;
  height: 151vh;
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
  height: 30vh;
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

.publicaciones-lista {
  width: 100%;
  overflow-y: auto;
  height: calc(100vh - 30px);
}

.publicaciones-container {
  height: fit-content;
  margin-left: 20px;
  margin-right: 20px;
}


</style>
