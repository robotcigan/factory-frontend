import Vue from 'vue'
import Router from 'vue-router'
import VueClip from 'vue-clip'
import VueMoment from 'vue-moment'
import 'moment/locale/ru'
import Dropzone from 'vue2-dropzone'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Posts from '@/components/Posts';
import Post from '@/components/Post';
import AddPost from '@/components/AddPost';

Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(VueClip);
Vue.use(VueMoment);
Vue.use(Dropzone);

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/add-post',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    }
  ]
})

