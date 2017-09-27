<template>
  <div>
    <h1>Add post</h1>
    <form action="">
    <div class="form-group">
    <label>Заголовок</label>
    <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Содержание</label>
    <textarea class="form-control"></textarea>
    </div>
    <div @click="addPost" class="btn btn-primary">Сохранить</div>
    </form>
  </div>
</template>
