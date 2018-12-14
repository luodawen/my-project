import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import GoTop from '@/components/GoTop'
import myVuexTest from '@/components/myVuexTest'
import dataSearch from '@/components/dataSearch'

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
      path:'/myVuexTest',
      name:'myVuexTest',
      component:myVuexTest
    },
    {
      path:'/dataSearch',
      name:'dataSearch',
      component:dataSearch
    }
  ]
})
