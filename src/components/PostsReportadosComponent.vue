<template>
  <div>
    <h3 class="mt-4 mb-3">Publicaciones reportadas</h3>

    <ul v-if="!isLoading" class="list-group mt-4">
      <li
        v-for="post in reportedPosts"
        :key="post._id"
        class="list-group-item"
      >
        <ShowCompletedReportedPosts :reported_post="post" @delete-post="deletePost" @dismiss-report="dismissReport"></ShowCompletedReportedPosts>
      </li>
    </ul>
  </div>
</template>

<script>
import ShowCompletedReportedPosts from './ShowCompletedReportedPosts.vue';
import axios from 'axios';
export default {
  name: "PostsReportadosComponent",
  props: {
    reportedPosts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ShowCompletedReportedPosts
  },
  methods:{
    deletePost(postId) {

      if (confirm("Esta seguro de que quiere eliminar este post")) {
        
      const url = `http://localhost:3000/${postId}`;
      axios.delete(url)
        .then(response => {
            console.log(response)
            console.log('Eliminar publicación con ID:', postId);
       location.reload();
        })
        .catch(error => {
          console.error(error);
        });
      }
   
    },
    dismissReport(reportId) {
      const url = `http://localhost:3000/dismiss_report/${reportId}`;
      axios.delete(url)
        .then(response => {
            console.log(response)
            console.log('Descartar reporte con ID:', reportId);
      location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    
    },
  }
};
</script>
