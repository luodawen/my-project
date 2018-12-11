<template>
	<div>
		<p>{{ count }}</p>
		<p>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
		</p>
		<br>
		<set-page></set-page>
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
	name:"myVuexTest",
	computed: {
		count () {
			return store.state.count
		}
	},
	methods: {
		increment () {
			store.commit('increment')
		},
		decrement () {
			store.commit('decrement')
		}
	},
	components:{
		setPage,parentDiv
	}
}
</script>
<style lang="less" scoped>

</style>

