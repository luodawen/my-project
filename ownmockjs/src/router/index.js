import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import GoTop from '@/components/GoTop'

Vue.use(Router)

export default new Router({
  mode:'history',//去掉url上的#
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
