<template>
  <header>
    <div>{{logo}}</div>
    <input type="text" v-model="username" @change="setUser">
  </header>
</template>
<script>
export default {
  name:'child',
  data(){
    return{
      username:'' //双向绑定输入框的值
    }
  },
  props:['logo'],
  methods:{
    setUser:function(){
      this.$emit('transferUser',this.username)//在子组件中自定义事件名transferUser
    }
  }
}
</script>
<style lang="less" scoped>

</style>
