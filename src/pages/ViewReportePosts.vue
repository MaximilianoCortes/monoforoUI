<template>
  <NavBar></NavBar>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="reportReason" class="form-label">Razón del reporte</label>
        <textarea
          class="form-control"
          id="reportReason"
          v-model="reason"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
      <router-link to="/Publicaciones" class="btn btn-secondary"
        >Cancelar</router-link
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";

export default {
  data() {
    return {
      reason: "",
      post_id: "",
    };
  },
  components: {
    NavBar,
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },
  mounted() {
    this.post_id = this.$route.params.post_id;
  },
  methods: {
    submitForm() {
      if (!this.reason) {
        this.errorMessage =
          "Por favor, complete todos los campos obligatorios.";
        return;
      }

      const url = `http://localhost:3000/report`;

      const ReportData = {
        post_id: this.post_id,
        report_reason: this.reason,
      };

      axios
        .post(url, ReportData)
        .then((response) => {
          console.log(response.data);
          this.successMessage = "¡El reporte se ha enviado correctamente!";
          console.log(this.successMessage)
          this.$router.push("/Publicaciones");
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage =
            "Ha ocurrido un error al crear la publicación. Por favor, inténtalo de nuevo más tarde.";
        });
    },
  },
};
</script>
