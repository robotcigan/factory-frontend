<template>
  <div>
    <h1>{{ postModel.name }}</h1>
    <p>
      {{ postModel.description }}
    </p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        postModel: {}
      }
    },
    mounted() {
      axios.get(`http://localhost:1337/posts/${this.$route.params.id}`)
        .then((res) => {
          this.postModel = res.data.post;
        });
    }
  }
</script>
