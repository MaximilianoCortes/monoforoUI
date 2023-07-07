<template>
  <div class="landing-page">
    <div class="carousel-container">
      <CarouselComponent 
        :imagenes="[
          'https://i.imgur.com/3g9Ea2z.png',
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
  background-color: #4F77B0;
}

.buttons-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
}

.btn {
  margin: 0 100px;
  width: 40%;
  height: 30%;
  text-align: center;
}


</style>
