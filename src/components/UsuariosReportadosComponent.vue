<template>
    <div>
      <h3 class="mt-4 mb-3">Usuarios reportados</h3>
  
      <div v-if="isLoading" class="text-center mt-4">
        <p>Cargando...</p>
      </div>
  
      <ul v-if="!isLoading" class="list-group mt-4">
        <li v-for="user in reportedUsers" :key="user.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div class="d-flex flex-column">
            <h5>{{ user.name }}</h5>
            <p class="text-muted">{{ user.reportReason }}</p>
          </div>
          <div>
            <button @click="$emit('ban-user', user.id)" class="btn btn-danger btn-sm mr-2">Banear</button>
            <button @click="$emit('dismiss-report', user.id)" class="btn btn-secondary btn-sm">Descartar</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "UsuariosReportadosComponent",
    props: {
      reportedUsers: {
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
