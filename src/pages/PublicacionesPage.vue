<template>
  
    <NavBar/>

    <h1>publicaciones</h1>
    <div>boton router link a publicar</div>
    <div>boton actualizar pagina</div>
    <div>boton destacado (por likes supongo)</div>
    <div>boton nuevas publicaciones (ordenar por fecha)</div>
    <h2>lista de componente publicacion</h2>
    
</template>
  
  <script>
  import NavBar from '../components/NavBar.vue'
  export default {
    name: 'PublicacionesPage',
    components: {
      NavBar
    }
  };
  </script>
  
  <style></style>