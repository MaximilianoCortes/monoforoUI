<template>
    <div class="card">
      <div class="card-body" style="overflow: auto; max-height: 200px;">
        <div class="d-flex flex-column">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
              <label>Titulo:</label>
              <h5 class="mb-2" v-if="post_data">{{ post_data.title }}</h5>
            </div>
            <div>
              <label>Dueño del post:</label>
              <h5 class="mb-2" v-if="save_user">{{ save_user.name }}</h5>
            </div>
            <div>
              <label>Razón de reporte:</label>
              <p class="text-muted mb-2" v-if="reported_post.report_reason">{{ reported_post.report_reason }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-center">
        <div class="mr-2">
          <button @click="$emit('delete-post', reported_post.post_id)" class="btn btn-danger btn-sm">
            Eliminar
          </button>
        </div>
        <div class="mx-2">
          <button @click="$emit('dismiss-report', reported_post._id)" class="btn btn-secondary btn-sm">
            Descartar
          </button>
        </div>
        <div class="ml-2">
          <router-link v-if="reported_post.post_id" :to="`/Revisar/${reported_post.post_id}`" class="btn btn-secondary btn-sm">
            Revisar
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  import axios from "axios";
  
  export default {
    name: "BringPostForId",
    props: {
      reported_post: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        post_data: null,
        save_user: null,
      };
    },
    mounted() {
      this.getPost();
    },
    methods: {
      getPost() {
        const url = `http://localhost:3000/getPost`;
  
        const postData = {
          post_id: this.reported_post.post_id,
        };
        axios
          .post(url, postData)
          .then((response) => {
            this.post_data = response.data.post;
            this.OwnerOfThePost();
          })
          .catch((error) => {
            console.error(error);
          });
      },
  
      OwnerOfThePost() {
        console.log("Esto es postUser");
        console.log(this.post_data);
        if (this.post_data && this.post_data.userId) {
          axios
            .get(`http://localhost:3000/${this.post_data.userId}/user`)
            .then((response) => {
              this.save_user = response.data;
              console.log(this.save_user);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
    },
  };
  </script>
  