<template>
  <div>
    <b-alert variant="success" :show="showAlert">Пост успешно сохранен</b-alert>
    <h1>Новый пост</h1>
    <form action="">
      <div class="form-group">
        <label>Заголовок</label>
        <input v-model="postModel.name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Содержание</label>
        <textarea v-model="postModel.description" class="form-control"></textarea>
      </div>

      <dropzone
        id="dropzone"
        ref="dropzone"
        url="http://localhost:1337/upload"
        :autoProcessQueue=false
        v-on:vdropzone-success="showSuccess">
        <input type="hidden" name="token" value="xxx">
      </dropzone>

      <b-button @click="savePost" variant="primary">Сохранить</b-button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  import Dropzone from 'vue2-dropzone'

  export default {
    components: {
      Dropzone
    },
    data() {
      return {
        options: {
          url: 'http://localhost:1337/upload'
        },
        postModel: {},
        showAlert: false
      }
    },
    methods: {
      showSuccess(file) {
        console.log('A file was successfully uploaded');
      },
      savePost() {
        let newPost = {
          name: this.postModel.name,
          description: this.postModel.description
        };
        axios.post('http://localhost:1337/post', newPost)
          .then((res) => {
            console.log('success');
            this.showAlert = true;
          });
        this.$refs.dropzone.dropzone.processQueue();
      }
    }
  }
</script>


<style lang="stylus" scoped>
  .uploader-action
    background rgba(teal, .1)
    border 1px dashed teal
    cursor pointer
    margin-bottom 1rem
    padding 2rem 1rem
    text-align center
  .progress-indicator
    background-color teal
    border-radius 4px
    height 4px
</style>
