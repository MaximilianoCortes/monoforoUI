<template>
  
  <div id="pagina">
    
    <NavBar/>

    <div class="d-flex justify-content-center">
    <div id="container">
      <div class="botones">
        <div class="botones-inner">
          <router-link to="/CrearPublicacion"><button id="publicar" type="submit" class="btn btn-block mb-3">Publicar</button></router-link>
          <button id="filtro" class="btn">Actualizar</button>
          <button id="filtro" class="btn">Destacado</button>
          <button id="filtro" class="btn">Nuevo</button>
        </div>
      </div>
      <div class="publicaciones-lista">
        <div class="publicaciones-container">
          <PublicacionComponent
            v-for="publicacion in publicaciones"
            :key="publicacion.id"
            :publicacion="publicacion"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import PublicacionComponent from '../components/PublicacionComponent.vue'

export default {
  name: 'PublicacionesPage',
  components: {
    NavBar,
    PublicacionComponent,
  },
  data() {
    return {
      publicaciones: [
        {
          usuario: {
            nombre: 'Nombre de Usuario',
            imagen: 'https://i.imgur.com/AF7dgEo.png'
          },
          titulo: 'Título de la publicación',
          cuerpo: {
            texto: 'Contenido de la publicación',
            imagen: 'https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif' // Opcional, si no hay imagen, puedes dejarlo como null o eliminarlo del objeto
          },
          likes: 0,
          dislikes: 0
        },
        {
          usuario: {
            nombre: 'Nombre de Usuario',
            imagen: 'https://i.imgur.com/OpfvTcj.png'
          },
          titulo: 'Título de la publicación',
          cuerpo: {
            texto: 'Contenido de la publicación tiene que ser muy largo asi que voy a copiar y pegar estoContenido de la publicación tiene que ser muy largo asi que voy a copiar y pegar estoContenido de la publicación tiene que ser muy largo asi que voy a copiar y pegar estoContenido de la publicación tiene que ser muy largo asi que voy a copiar y pegar estoContenido de la publicación tiene que ser muy largo asi que voy a copiar y pegar estoContenido de la publicación tiene que ser muy largo asi que voy a copiar y pegar estoContenido de la publicación tiene que ser muy largo asi que voy a copiar y pegar estoContenido de la publicación tiene que ser muy largo asi que voy a copiar y pegar estoContenido de la publicación tiene que ser muy largo asi que voy a copiar y pegar esto',
            imagen: 'https://media3.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif' 
          },
          likes: 0,
          dislikes: 0
        },
        {
          usuario: {
            nombre: 'Nombre de Usuario',
            imagen: 'https://i.imgur.com/OpfvTcj.png'
          },
          titulo: 'Título de la publicación',
          cuerpo: {
            texto: 'Contenido de la publicación',
            imagen: 'https://example.com/imagen.jpg'
          },
          likes: 0,
          dislikes: 0
        },
        {
          usuario: {
            nombre: 'Nombre de Usuario',
            imagen: 'https://i.imgur.com/OpfvTcj.png'
          },
          titulo: 'Título de la publicación',
          cuerpo: {
            texto: 'Contenido de la publicación',
            imagen: 'https://example.com/imagen.jpg' 
          },
          likes: 0,
          dislikes: 0
        },
        {
          usuario: {
            nombre: 'Nombre de Usuario',
            imagen: 'https://i.imgur.com/OpfvTcj.png'
          },
          titulo: 'Título de la publicación',
          cuerpo: {
            texto: 'Contenido de la publicación',
            imagen: 'https://example.com/imagen.jpg' 
          },
          likes: 0,
          dislikes: 0
        },
        {
          usuario: {
            nombre: 'Nombre de Usuario',
            imagen: 'https://i.imgur.com/OpfvTcj.png'
          },
          titulo: 'Título de la publicación',
          cuerpo: {
            texto: 'Contenido de la publicación',
            imagen: 'https://example.com/imagen.jpg' 
          },
          likes: 0,
          dislikes: 0
        },
      ]
    };
  }
};
</script>

<style scoped>
#publicar{
  background-image: url('https://i.imgur.com/p9Gd68n.png');
  width: 100%;
  height: 200px;
  margin-bottom: 50px;
}
#filtro{
  background-image: url('https://i.imgur.com/p9Gd68n.png');
  width: 100%;
  height: 100px;
}
#container {
  background-image: url('https://i.imgur.com/p9Gd68n.png');
  display: flex;
  justify-content: space-around; 
  width: 100%;
  height: 88.1vh;
  overflow: hidden; 
}

.publicaciones-lista {
  width: 85%;
  overflow-y: scroll; 
  height: calc(100vh -100vh);
}

.publicaciones-container {
  height: fit-content;
  margin-left: 20px;
  margin-right: 20px;
}
.botones {
  width: 15%;
  background-image: url('https://i.imgur.com/qWuUWKH.png');
  background-size: cover;
  background-position: center;
  padding: 10px;
}

.botones-inner {
  display: flex;
  flex-direction: column;
  gap: 15px; 
}


</style>
