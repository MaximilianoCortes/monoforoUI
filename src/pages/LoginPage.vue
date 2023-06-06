<template>
  <div class="login">
    <div class="container-half1">
      <!-- Componente a la izquierda -->
        <CarouselComponent 
          :imagenes="[
            'https://i.imgur.com/VoRabCE.png',
            'https://i.imgur.com/xv0tfCG.png',
            'https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif',
            'https://media3.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif'
          ]" />
    </div>
    <div class="container-half2">
      <!-- Formulario de login a la derecha -->
      <div class="login-container">
        <h2 class="mb-4">Login</h2>
        <br><br>
        <form @submit.prevent="submitForm">
          <div class="form-group mb-3">
            <input type="email" class="form-control" id="email" v-model="email" placeholder="Correo" required>
          </div>
          <div class="form-group mb-3">
            <input type="password" class="form-control" id="password" v-model="password" placeholder="Contraseña" required>
          </div>
          <br><br>
          <router-link to="/perfil"><button type="submit" class="btn btn-primary btn-block mb-3">Iniciar sesión</button></router-link>
          <router-link to="/Register"><button class="btn btn-secondary btn-block">Registrarse</button></router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CarouselComponent from '../components/CarouselComponent';

export default {
  name: 'LoginPage',
  components: {
    CarouselComponent,
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      const loginData = {
        correo: this.email,
        contraseña: this.password
      };

      axios.get('/api/login', loginData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container-half2 {
  width: 50%;
}

.container-half1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: #13f05c;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.login-container .form-group {
  width: 100%;
}

.login-container .form-control {
  border: 1px solid #13f05c;
}

.login-container button {
  width: 100%;
}
</style>
