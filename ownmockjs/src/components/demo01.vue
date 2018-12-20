<template>
  <div>
    <input type="text" ref="inText">
      <button @click="add">添加</button>
  </div>
</template>
<script>
export default {
  name:'demo01',
  methods:{
    add(){
      console.log( this.$refs.inText)
    }
  }
}
</script>
<style scoped>

</style>
