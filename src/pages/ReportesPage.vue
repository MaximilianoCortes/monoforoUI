<template>
 
    <NavBar/>

    <h1>reportes</h1>
    <div>boton cargar usuarios reportados</div>
    <div>boton cargar publicaciones reportadas</div>
    <div>lista que describe nombre de usuario y motivo de reporte</div>
    <div>lista que carga componetne publicacion y motivo de reporte</div>
    <div>a cada uno se le genera un boton para decidir si eliminar publicacion/usuario o perdonar</div>
</template>
  
  <script>
  import NavBar from '../components/NavBar.vue'
  export default {
    name: 'ReportesPage',
    components: {
      NavBar
    }
  };
  </script>
  
  <style></style>