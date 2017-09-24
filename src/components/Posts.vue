<template>
  <div>
    <div class="row">

      <div class="col col-md-6">
        <h2>Посты</h2>
        <ul class="list-group">
          <li v-for="post in posts" class="list-group-item">
            <div class="d-flex justify-content-between">
              <span>
                id: {{ post.id }}, name: {{ post.name }}
              </span>
              <div>
                <div @click="editPost(post)" class="btn btn-info">Редактировать</div>
                <div @click="deletePost(post)" class="btn btn-danger">Удалить</div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="col col-md-6">
        <h2>Новый пост</h2>
        <form action="">
          <div class="form-group">
            <label>Название</label>
            <input v-model="postModel.name" type="text" class="form-control">
          </div>
          <div class="form-group">
            <label>Содержание</label>
            <textarea v-model="postModel.description" class="form-control"></textarea>
          </div>
          <div @click="addPost" class="btn btn-primary">Сохранить</div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
  let posts = [
    { id: 1, name: 'first', description: 'Some' },
    { id: 2, name: 'second', description: 'Some 2' },
    { id: 3, name: 'third', description: 'Some 3' }
  ];
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
        }
      }
    },
    methods: {
      addPost() {
        this.posts.push({
          id: Math.random().toString().split('.')[1],
          name: this.postModel.name
        });
      },
      editPost(post) {
        this.postModel = posts[findPostById(post.id)];
      },
      deletePost(post) {
        this.posts.splice(this.posts.indexOf(post), 1)
      }
    }
  }
</script>
