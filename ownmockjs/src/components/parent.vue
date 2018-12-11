<template>
  <div>
    <child-div :logo='logoMsg' @transferUser='getUser'></child-div>
    <div>用户名：{{user}}</div>
  </div>
</template>
<script>
import childDiv from './child'
export default {
  name:'parent',
  data(){
    return{
      logoMsg:'logo大图标（父组件传值给子组件）',
      user:''
    }
  },
  components:{
    childDiv
  },
  methods:{
    getUser(msg){
      this.user = msg;//msg接收到数据就是子组件的this.username
    }
  }
}
</script>
<style lang="less" scoped>

</style>
