<template>
  <div class="register">
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
      <div class="register-container">
        <h2 class="mb-4">Registro</h2>
        <br><br>
        <form @submit.prevent="submitForm">
          <div class="form-group mb-3">
            <input type="usuario" class="form-control" id="usuario" placeholder="Nombre de usuario" v-model="usuario" required>
          </div>
          <div class="form-group mb-3">
            <input type="email" class="form-control" id="email" placeholder="Correo" v-model="email" required>
          </div>
          <div class="form-group mb-3">
            <input type="password" class="form-control" id="password" placeholder="Contraseña" v-model="password" required>
          </div>
          <div class="form-group mb-3">
            <input type="password" class="form-control" id="passwordver" placeholder="Repite tu contraseña" v-model="passwordver" required>
          </div>
          <br><br>
          <button type="submit" class="btn btn-primary btn-block mb-3">Registrarse</button>
          <router-link to="/login"><button class="btn btn-secondary btn-block">Iniciar sesion</button></router-link>
        </form>   
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CarouselComponent from '../components/CarouselComponent';

export default {
  name: 'RegisterPage',
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
.register {
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

.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.register-container .form-group {
  width: 100%;
}

.register-container .form-control {
  border: 1px solid #13f05c;
}

.register-container button {
  width: 100%;
}
</style>
