<template>
    <NavBar></NavBar>
    <div class="container">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="reportReason" class="form-label">Razón del reporte</label>
          <textarea class="form-control" id="reportReason" v-model="report.reason"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
        <button type="button" class="btn btn-secondary" @click="cancelForm">Cancelar</button>
      </form>
    </div>
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue'
  export default {
    data() {
      return {
        report: {
          reason: '',
        }
      }
    },
    components: {
      NavBar
    },
    
    methods: {
      submitForm() {
        // Aquí va la lógica para enviar la información al servidor
      },
      cancelForm() {
        this.report.reason = '';
        // Aquí puedes redirigir al usuario o realizar la acción que desees al cancelar
      }
    }
  }
  </script>
  