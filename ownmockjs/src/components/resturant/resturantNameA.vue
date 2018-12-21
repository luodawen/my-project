<template>
  <div class="componentsA">
    <p class="title">组件A</p>
    <p class="titleName">餐馆名称：{{resturantName}}</p>
    <div>
      <!-- 点击修改为 A餐馆 -->
      <!-- 在组件A中，定义点击事件，点击 修改 餐馆的名称，并把餐馆的名称在事件中用参数进行传递 -->
      <button class="btn" @click="modifyAName('A餐馆')">修改为A餐馆</button>
    </div>
    <div class="marTop">
      <button class="btn" @click="trunToB">跳转到B页面</button>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return{}
  },
  methods:{ //语法糖
  //...mapActions(['clickAFn']) 相当于this.$store.dispatch('clickAFn'，{参数})，mapActions中只需要指定方法名即可，参数省略。
    ...mapActions(
      ['modifyAName']  //相当于this.$store.dispatch('modifyName'),提交这个方法 到mutations中处理
    ),
    trunToB(){
      this.$router.push({path:'/resturantB'})  //路由跳转到B
    }
  },
  computed:{
    ...mapGetters(['resturantName'])  //动态计算属性，相当于this.$store.getters.resturantName 获取数据并渲染
  }
}
</script>

<style scoped>
  .title,.titleName{
    color: blue;
    font-size: 20px;
  }
  .btn{
    width: 160px;
    height: 40px;
    background-color: blue;
    border: none;
    outline: none;
    color: #ffffff;
    border-radius: 4px;
  }
  .marTop{
    margin-top: 20px;
  }

</style>
