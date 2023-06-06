<template>
  <div id="contenedor" v-if="imagenes" :style="{ width: '100%', height: '100%' }">
    <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(image, index) in imagenes"
          :key="index"
          :class="{ 'active': index === 0 }"
        >
          <div class="image-container">
            <img :src="image" class="carousel-image" alt="Imagen">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    imagenes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
#contenedor {
  height: 100%;
  width: 100%;
}

.carousel {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-inner {
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center; /* Centra horizontalmente el contenido */
}

.carousel-inner .carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0; /* Inicialmente oculto */
  transition: opacity 0.5s ease-in-out; /* Animación de desvanecimiento */
}

.carousel-inner .carousel-item.active {
  opacity: 1; /* Mostrar elemento activo */
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-x: hidden; /* Oculta la barra de desplazamiento lateral */
}

.carousel-image {
  height: 100%;
  max-width: none; /* Desactiva el ajuste de ancho automático */
  object-fit: contain;
}

.carousel-control-prev,
.carousel-control-next {
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}
</style>
