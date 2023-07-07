<template>
  <div class="login">
    <div class="container-half1">
      <!-- Componente a la izquierda -->
      <CarouselComponent 
        :imagenes="[
          'https://i.imgur.com/zkar2i8.png',
          'https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif',
          'https://media3.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif'
        ]"
      />
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
          <button type="submit" class="btn btn-primary btn-block mb-3">Iniciar sesión</button>
          <button type="button" class="btn btn-secondary btn-block" @click="goToRegister">Registrarse</button>
        </form>
        <div v-if="errorMessage" class="text-danger">{{ errorMessage }}</div>
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
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    submitForm() {
      const url = `http://localhost:3000/login`;

      const loginData = {
        email: this.email,
        password: this.password
      };

      axios.post(url, loginData)
        .then(response => {         
          localStorage.setItem('token', response.data.token);

          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

          this.$router.push('/Publicaciones');
        })
        .catch(error => {
          console.error(error);
          this.errorMessage = 'Error en el inicio de sesión. Por favor, verifica tu correo y contraseña.';
        });

    },
    goToRegister() {
      this.$router.push('/Register');
    }
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
  background-color: #4F77B0;
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

.login-container button {
  width: 100%;
}
</style>
