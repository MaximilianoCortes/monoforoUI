<template>
    <div v-if="imagenes">       
      <div id="carousel" class="carousel slide" :style="{ width: carouselWidth, height: carouselHeight }">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(image, index) in imagenes"
            :key="index"
            :class="{ 'active': index === 0 }"
          >
            <img :src="image" class="d-block w-100 carousel-image" alt="Imagen">
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
      carouselWidth: {
        type: String,
        required: true,
      },
      carouselHeight: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .carousel {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .carousel-inner {
    position: relative;
    height: 100%;
    width: 100%;
  }
  
  .carousel-inner .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 1;
  }
  </style>
  