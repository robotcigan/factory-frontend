<template>
  <div>

      <h2>Посты</h2>
        <!--Поле поиска-->
        <b-form-fieldset horizontal label="Фильтр">
          <b-form-input v-model="filter" placeholder="Поиск постов" />
        </b-form-fieldset>
        <!--Таблица постов-->
        <b-table striped hover
                 :items="posts"
                 :fields="fields"
                 :filter="filter"
                 @filtered="onFiltered"
                 href="#/505"
        >
          <template slot="_id" scope="data">
            <a :href="`#/post/${data.value}`">{{ data.value }}</a>
          </template>
          <template slot="actions" scope="row">
            <b-btn @click="editPost(row.item)" variant="info" size="sm">Редактировать</b-btn>
            <b-btn @click="deletePost(row.item._id)" size="sm">Удалить</b-btn>
          </template>
        </b-table>

  </div>
</template>

<script>
  import axios from 'axios';

  let posts = [];

  function findPostById(id) {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id == id) {
        return i
      }
    }
  }
  export default {
    name: 'Posts',
    data() {
      return {
        posts: posts,
        postModel: {
          id: '',
          name: '',
          description: ''
        },
        filter: null,
        totalRows: posts.length,
        fields: {
          _id: { label: 'Id'},
          name: { label: 'Заголовок' },
          description: { label: 'Описание' },
          actions: { label: 'Действия' }
        }
      }
    },
    mounted() {
      axios.get('http://localhost:1337/posts')
        .then((res) => {
          this.posts = res.data.posts;
        });
    },
    methods: {
      editPost(post) {
        this.postModel = post;
      },
      deletePost(postId) {
        this.posts.splice(this.posts.indexOf(postId), 1);
        // console.log(post)
        axios.delete(`http://localhost:1337/post/${postId}`)
          .then((res) => {
            console.log('success');
            // this.showAlert = true;
          });
      },
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length;
      }
    }
  }
</script>
