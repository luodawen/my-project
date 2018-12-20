<template>
	<div>
		<p>{{ count }}</p>
		<p>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
		</p>
		<br>
		<set-page :total="total" :current-page='current' :refresh='refresh' @pagechange="pagechange"></set-page>
		<br>
		<parent-div></parent-div>
	</div>
</template>
<script>

import Vue from 'vue'
import Vuex from 'vuex'
import setPage from './pagination'
import parentDiv from './parent'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
  	increment: state => state.count++,
    decrement: state => state.count--
  }
})
export default {
	name:"myVuextest",
	data(){
		return{
			total: 100, //总条数
			current: 1, //当前激活页
			display: 6, //每页显示多少条
			refresh: false, //是否刷新（第一页激活）有搜索时需要
		}
	},
	computed: {
		count () {
			return this.$store.state.count //读取状态
		}
	},
	methods: {
		increment () {
			store.commit('increment')
		},
		decrement () {
			store.commit('decrement')
		},
		//分页查询
		pagechange(currentPage) {
			this.refresh = false;
			this.page = {
				start: currentPage * 10,
				size: 10
			};
			// 获取列表 可根据后端要求改变page的方式
			// this.getList(this.page)
		}

	},
	components:{
		setPage,parentDiv
	}
}
</script>
<style lang="less" scoped>

</style>

