<template>
  <div>
    <h1>Add post</h1>
    <form action="">
    <div class="form-group">
    <label>Заголовок</label>
    <input v-model="postModel.name" type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Содержание</label>
    <textarea v-model="postModel.description" class="form-control"></textarea>
    </div>
    <div @click="savePost" class="btn btn-primary">Сохранить</div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        postModel: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      savePost() {
        let newPost = {
          name: this.postModel.name,
          description: this.postModel.description
        };
        axios.post('http://localhost:1337/post', newPost)
          .then((res) => {
            // this.posts = res.data.posts;
          });
      }
    }
  }
</script>
