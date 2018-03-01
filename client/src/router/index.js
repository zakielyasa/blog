import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Home from '@/components/Home'
import Register from '@/components/Register'
import MyArticles from '@/components/MyArticles'
import EditArticle from '@/components/EditArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/myarticles',
      name: 'My Articles',
      component: MyArticles,
      children: [{
        path: 'edit/:id',
        name: 'edit',
        component: EditArticle,
        props: true
      }]
    },
  ]
})