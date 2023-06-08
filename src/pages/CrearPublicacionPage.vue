<template>
  <NavBar />
  <form action="">
    <div class="container " style="width: 60%;"><br>
      <h2 style="text-align:center;">Crear Publicación</h2>
      <div class="mb-3 ">
        <br><input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Titulo">
      </div>
      <div class="mb-3">
        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Cuerpo de texto (opcional)" rows="5"></textarea>
      </div>
      <div class="d-flex justify-content-between">
        <div class="mb-3" style="width: 35%;">
        <input class="form-control" type="file" id="formFile">  
      </div>
      <div style="width: 35%;">
        <button type="submit" class="btn btn-secondary btn-block" style="width: 100%;" >Publicar</button>
      </div>
      </div>
    
    </div>
  </form>
</template>
  
<script>
import NavBar from '../components/NavBar.vue'
export default {
  name: 'CrearPublicacionPage',
  components: {
    NavBar
  }
};
</script>
  
<style></style>