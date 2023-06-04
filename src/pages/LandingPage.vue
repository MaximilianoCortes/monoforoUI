<template>
    <div class="landing-page">
      <div class="carousel-container">

        <CarouselComponent 
        :imagenes="[
          'https://i.imgur.com/K7MTcwq.jpeg',
          'https://i.imgur.com/xv0tfCG.png',
          'https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif',
          'https://media3.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif'
        ]" 
        :carouselWidth="carouselWidth" 
        :carouselHeight="carouselHeight" />

      </div>
      <div class="buttons-section">
        <router-link to="/login" class="button">Iniciar sesión</router-link>
        <router-link to="/register" class="button">Registrarse</router-link>
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
      return {
        carouselWidth: '1920px',
        carouselHeight: '600px'
      };
    },
  };
  </script>
  
  <style scoped>
  .landing-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
  }
  
  .carousel-container {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
  }
  
  .buttons-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;
  }
  
  .button {
    margin: 0 10px;
  }
  </style>
  