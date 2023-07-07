<template>
  <div class="card" v-if="post" :style="{ width: '100%', backgroundImage: backgroundColor }">
    <div class="card-header d-flex align-items-center">
      <div class="dropdown">
        <button class="btn btn-lg dropdown-toggle" type="button" :class="{ 'disabled-button': current_user }" :disabled="current_user" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" :style="{ backgroundColor: backgroundColorBoton, color: 'white' }">
          <img :src="profile.picture || `https://th.bing.com/th/id/R.3d35762841538ffb1b3304618409d725?rik=kF7EZRj9RpU5kw&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2011%2f08%2f77853-msn-user-avatar.png&ehk=bBN9nR%2bWYDtj0HQRvGozm%2fzocYi9dXPUv7WgbXfOD%2fk%3d&risl=&pid=ImgRaw&r=0`" alt="Perfil" width="30" height="30" class="rounded-circle">
          {{ user.name }}
        </button>
        <ul  class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
          <li><router-link v-if="!publi_user" :to="`/Perfil/${post.userId}`" class="dropdown-item">Ver perfil</router-link></li>
          <li><router-link :to="`/report/${post._id}`" class="dropdown-item">Reportar</router-link></li>
        </ul>
      </div>
      <h4 class="card-title flex-grow-1">{{ post.title }}</h4>
      <button v-if="current_user" class="btn btn-outline-light btn-sm ml-auto" @click="deletePost">Eliminar</button>
    </div>
    <div class="card-body">
      <p>{{ post.body_text }}</p>
      <img class="post-image" v-if="post.img" :src="post.img" alt="Imagen de la publicación">
    </div>
    <div class="card-footer">
      <button @click="handleReaction(1)" :disabled="userReaction === 1" class="btn text-white">
        <i class="bi bi-hand-thumbs-up-fill"></i>
      </button>

      <div class="text-white">Likes: {{ post.likes }}</div>

      <button @click="handleReaction(-1)" :disabled="userReaction === -1" class="btn text-white">
        <i class="bi bi-hand-thumbs-down-fill"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PublicacionComponent',

  props: {
    publicacion: {
      type: Object,
      required: true
    },
    current_user: {
      type: Boolean
    },
    publi_user: {
      type: Boolean
    },
  },
  data() {
    return {
      post: { ...this.publicacion }, // Copia local de la prop publicacion
      userReaction: 0, // 0: Sin reacción, 1: Like, -1: Dislike
      user: '',
      profile: '',
      backgroundColor: "url('https://i.imgur.com/qWuUWKH.png')",
      backgroundColorBoton: "url('https://i.imgur.com/p9Gd68n.png')",

    };
  },
  mounted() {
    this.publiUser();
    this.CurrentProfile();
  },
  methods: {
    publiUser() {
      axios
        .get(`http://localhost:3000/${this.publicacion.userId}/user`)
        .then((response) => {
          this.user = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    CurrentProfile() {
      axios
        .get(`http://localhost:3000/profile/${this.publicacion.userId}`)
        .then((response) => {
          this.profile = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    handleReaction(reaction) {
      const url = `http://localhost:3000/like`;

      const likeData = {
        post_id: this.post._id,
        reaction: reaction
      };

      axios
        .put(url, likeData)
        .then((response) => {
          console.log(response.data);
          // Actualizar la reacción del usuario
          this.userReaction = reaction;
          // Actualizar el número de likes o dislikes en la copia local de la publicación
          if (reaction === 1) {
            this.post.likes++;
          } else if (reaction === -1) {
            this.post.likes--;
          }
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = 'Error en el inicio de sesión. Por favor, verifica tu correo y contraseña.';
        });
    },

    deletePost() {    
      const url = `http://localhost:3000/${this.publicacion._id}`;
      axios.delete(url)
        .then(response => {
            console.log(response)
            location.reload();
        })
        .catch(error => {
          console.error(error);
        });
      console.log('Eliminar publicación con ID:', this.publicacion._id);
    }
  }
};
</script>

<style scoped>
.disabled-button {
  opacity: 100;
  cursor: not-allowed; 
  border: 0px;
}
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

.post-image {
  max-height: 400px;
  width: auto; /* El ancho se ajusta de manera proporcional */
}
</style>
