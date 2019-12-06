import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/common/Home'
import AppMain from '@/views/AppMain'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'AppMain',
      component: AppMain
    }
    // {
    //   path: '/',
    //   component: () => import( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
    //   meta: {
    //     title: '自述文件'
    //   }
    // },
    // {
    //   path: '/login',
    //   component: () => import( /* webpackChunkName: "login" */ '../components/page/Login.vue')
    // },
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
  ]
})
