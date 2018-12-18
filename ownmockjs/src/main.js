// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 此项目所有来源：https://github.com/JasonBai007/vue-seed.git
//只是用作于练习代码


import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuex from 'vuex' //引入vuex
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'//mint-ui的css文件需要单独引入
Vue.use(Mint);

// Vue.use(Vuex)  //配置Vuex


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
