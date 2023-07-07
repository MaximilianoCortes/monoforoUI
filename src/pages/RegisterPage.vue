<template>
  <div class="register">
    <div class="container-half1">
      <!-- Componente a la izquierda -->
      <CarouselComponent 
        :imagenes="[
          'https://i.imgur.com/TGSEAPB.png',
          'https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif',
          'https://media3.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif'
        ]"
      />
    </div>
    <div class="container-half2">
      <!-- Formulario de registro a la derecha -->
      <div class="register-container">
        <h2 class="mb-4">Registro</h2>
        <br><br>
        <form @submit.prevent="submitForm">
          <div class="form-group mb-3">
            <input type="usuario" class="form-control" id="usuario" placeholder="Nombre de usuario" v-model="name" required>
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
                    <div class="form-check mb-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="admin"
              v-model="isAdmin"
            />
            <label class="form-check-label" for="admin">Admin</label>
          </div>
          <br><br>
          <button type="submit" class="btn btn-primary btn-block mb-3">Registrarse</button>
          <button type="button" class="btn btn-secondary btn-block" @click="goToLogin">Iniciar sesión</button>
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
      name: '',
      email: '',
      password: '',
      passwordver: '',
      isAdmin: false,
    };
  },
  methods: {
    submitForm() {
      const url = `http://localhost:3000/register`;
   
      let roles=[];

      if(this.isAdmin){
        roles.push("Admin")
      }
 

      const registerData = {
        name: this.name,
        email: this.email,
        password: this.password,
        roles:roles
 
   
      };

      axios.post(url, registerData)
        .then(response => {
          console.log(response.data);
          // Redirigir a la página de inicio de sesión
          this.$router.push('/login');
        })
        .catch(error => {
          console.error(error);
        });
    },
    goToLogin() {
      this.$router.push('/login');
    }
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
  background-color: #4F77B0;
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

.register-container button {
  width: 100%;
}
</style>
