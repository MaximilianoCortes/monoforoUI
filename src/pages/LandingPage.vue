<template>
  <div class="landing-page">
    <div class="carousel-container">
      <CarouselComponent 
        :imagenes="[
          'https://i.imgur.com/VoRabCE.png',
          'https://i.imgur.com/xv0tfCG.png',
          'https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif',
          'https://media3.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif'
        ]" />
    </div>
    <div class="buttons-section">
      <button class="btn btn-primary" @click="redirectToLogin">Iniciar sesión</button>
      <button class="btn btn-secondary" @click="redirectToRegister">Registrarse</button>
    </div>

  </div>
</template>

<script>
import CarouselComponent from '../components/CarouselComponent';

export default {
  name: 'LandingPage',
  components: {
    CarouselComponent,
  },
  data() {
    return {};
  },
  methods: {
    redirectToLogin() {
      this.$router.push('/login');
    },
    redirectToRegister() {
      this.$router.push('/register');
    },
  },
};
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  background-color: #13f05c;
}

.buttons-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  background-color: #c8ff00;
}

.btn {
  margin: 0 100px;
  width: 40%;
  height: 30%;
  text-align: center;
}


</style>
