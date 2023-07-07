<template>
    <div></div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'TokenHandler',
    mounted() {
      this.setAuthToken();
    },
    methods: {
      setAuthToken() {
        const token = localStorage.getItem('token');
    
        if (token) {
          // Aplica el token a cada solicitud si está logeado
          axios.defaults.headers.common['Authorization'] = token;
        } else {
          // Elimina el encabezado de autorización
          delete axios.defaults.headers.common['Authorization'];
        }
      }
    }
  }
  </script>
  