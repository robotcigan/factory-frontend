<template>
  <div>
    <b-navbar type="dark" variant="dark" toggleable>
      <b-nav-toggle target="nav_dropdown_collapse"></b-nav-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-nav is-nav-bar>
          <b-nav-item href="#/">Админка</b-nav-item>
          <b-nav-item href="#/posts">Посты</b-nav-item>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
          <b-button href="#/add-post" size="sm" class="my-2 my-sm-0" variant="info">Добавить пост</b-button>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<!--<script>-->
  <!--export default {-->
    <!--name: 'Header'-->
  <!--}-->
<!--</script>-->
