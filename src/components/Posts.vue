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
          >
            <template slot="actions" scope="row">
              <b-btn @click="editPost(row.item)" variant="info" size="sm">Редактировать</b-btn>
              <b-btn @click="deletePost(post)" size="sm">Удалить</b-btn>
            </template>
          </b-table>


        <!--<h2>Новый пост</h2>-->
        <!--<form action="">-->
          <!--<div class="form-group">-->
            <!--<label>Название</label>-->
            <!--<input v-model="postModel.name" type="text" class="form-control">-->
          <!--</div>-->
          <!--<div class="form-group">-->
            <!--<label>Содержание</label>-->
            <!--<textarea v-model="postModel.description" class="form-control"></textarea>-->
          <!--</div>-->
          <!--<div @click="addPost" class="btn btn-primary">Сохранить</div>-->
        <!--</form>-->

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
      addPost() {
        this.posts.push({
          id: Math.random().toString().split('.')[1],
          name: this.postModel.name
        });
      },
      editPost(post) {
//        this.postModel = posts[findPostById(post.id)];
//        console.log(posts[findPostById(post.id)])
        this.postModel = post;
      },
      deletePost(post) {
        this.posts.splice(this.posts.indexOf(post), 1)
      },
      onFiltered(filteredItems) {
        this.totalRows = filteredItems.length;
      }
    }
  }
</script>
