<template>
  <div class="componentsA">
    <p class="title">组件B</p>
    <p class="titleName">餐馆名称：{{resturantName}}</p>
    <div>
      <!-- 点击修改为 A餐馆 -->
      <button class="btn" @click="modifyAName('B餐馆')">修改为B餐馆</button>
    </div>
    <div class="marTop">
      <button class="btn" @click="trunToA">跳转到A页面</button>
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
  //...mapActions(['clickBFn']) 相当于this.$store.dispatch('clickBFn'，{参数})，mapActions中只需要指定方法名即可，参数省略。
    ...mapActions(
      ['modifyAName']  //相当于this.$store.dispatch('modifyName'),提交这个方法 到mutations中处理
    ),
    trunToA(){
      this.$router.push({path:'/resturantA'})  //路由跳转到A
    }
  },
  computed:{
    ...mapGetters(['resturantName'])  //动态计算属性，相当于this.$store.getters.resturantName 获取数据并渲染
  }
}
</script>

<style scoped>
  .title,.titleName{
    color: red;
    font-size: 20px;
  }
  .btn{
    width: 160px;
    height: 40px;
    background-color: red;
    border: none;
    outline: none;
    color: #ffffff;
    border-radius: 4px;
  }
  .marTop{
    margin-top: 20px;
  }

</style>
