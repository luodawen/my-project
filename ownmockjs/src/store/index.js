import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';  //导入响应的模块， * 相当于引入这个组件下的所有导出的事例
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex)

//首先声明一个需要全局需要维护的状态 state， 比如这里我们举例的 resturantName
const state = {
  resturantName: '飞哥餐厅'  //默认值
  //id:xxx  如果还有全局状态还可以在这里添加
  //name:xxx
}

//注册上面引入的各大模块
const store = new Vuex.Store({
  state,  //共同维护一个状态，state里可以有很多个全局状态
  actions,  //数据的异步操作
  getters,  //获取数据并渲染
  mutations  //处理数据的唯一途径,state的改变赋值只能在这里
})

export default store //导出store并在main.js中引用