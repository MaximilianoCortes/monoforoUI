<template>
    <div>
      <h3 class="mt-4 mb-3">Publicaciones reportadas</h3>
  
      <div v-if="isLoading" class="text-center mt-4">
        <p>Cargando...</p>
      </div>
  
      <ul v-if="!isLoading" class="list-group mt-4">
        <li v-for="post in reportedPosts" :key="post.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div class="d-flex flex-column">
            <h5>{{ post.title }}</h5>
            <p class="text-muted">{{ post.reportReason }}</p>
          </div>
          <div>
            <button @click="$emit('delete-post', post.id)" class="btn btn-danger btn-sm mr-2">Eliminar</button>
            <button @click="$emit('dismiss-report', post.id)" class="btn btn-secondary btn-sm">Descartar</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "PostsReportadosComponent",
    props: {
      reportedPosts: {
        type: Array,
        required: true
      },
      isLoading: {
        type: Boolean,
        default: false
      }
    }
  };
  </script>