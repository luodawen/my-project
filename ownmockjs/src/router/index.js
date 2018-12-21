import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import GoTop from '@/components/GoTop'
import myVuextest from '@/components/myVuextest'
import dataSearch from '@/components/dataSearch'
import myLogin from '@/views/myLogin'
import demo01 from '@/components/demo01'



Vue.use(Router)

export default new Router({
  mode:'history',//去掉url上的#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/myVuextest',
      name:'myVuextest',
      component:myVuextest
    },
    {
      path:'/dataSearch',
      name:'dataSearch',
      component:dataSearch
    },
    {
      path:'/myLogin',
      name:'myLogin',
      component:myLogin
    },
    {
      path:'/demo01',
      name:'demo01',
      component:demo01
    },
    {
      path: '/home',
      name: 'Home',
      component: resolve => require(['@/views/Home/Home'],resolve)
    },
    {
      path: '/resturantA',
      name: 'resturantNameA',
      component: resolve => require(['@/components/resturant/resturantNameA'],resolve)
    },
    {
      path: '/resturantB',
      name: 'resturantNameB',
      component: resolve => require(['@/components/resturant/resturantNameB'],resolve)
    }
  ]
})
