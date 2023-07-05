<template>
  <div>
    <h3 class="mt-4 mb-3">Publicaciones reportadas</h3>

    <ul v-if="!isLoading" class="list-group mt-4">
      <li
        v-for="post in reportedPosts"
        :key="post._id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div class="d-flex flex-column">
          <h5>{{ post_data.title }}</h5>
          <p class="text-muted">{{ post.report_reason }}</p>
        </div>
        <div>
          <button
            @click="$emit('delete-post', post.post_id)"
            class="btn btn-danger btn-sm mr-2"
          >
            Eliminar
          </button>
          <button
            @click="$emit('dismiss-report', post._id)"
            class="btn btn-secondary btn-sm"
          >
            Descartar
          </button>
          <router-link
            :to="`/Revisar/${post.post_id}`"
            class="btn btn-secondary btn-sm"
          >
            Revisar
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostsReportadosComponent",
  props: {
    reportedPosts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      post_data: [],
    };
  },
  mounted() {
    this.Post();
  },
  methods: {
    Post() {
      const url = `http://localhost:3000/getPost`;

      const postData = {
        post_id: this.reportedPosts.post_id,
      };

      axios
        .post(url, postData)
        .then((response) => {
          this.post_data = response.data;
          console.log(this.post_data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
