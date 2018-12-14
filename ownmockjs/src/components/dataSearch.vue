<template>
  <div>
    <div class="clickSearch"></div>
  </div>
</template>
<script>
  export default {
    name:'dataSearch',
    data(){
      return{
      
      }
    },
    

  }
</script>
<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  }
  a{
    display: inline;
    color:#989898;
    text-decoration: none;
  }
  a:hover{
    cursor: pointer;
  }
  html,body{
    font-family: '微软雅黑';
    color:#333;
   
  }
  ul,ol{
    list-style:none;
  }
  img{
    border:0;
    vertical-align: middle;
  }
  input{
    outline:0;
    /* border: 0; */
    }
  button:hover{
    cursor: pointer;
  }
  /*公共样式 end*/
  div.clickSearch{
    position: fixed;
    top:0.54rem;
    z-index: 9;
    width:99%;
    height: 1.32rem;
    padding: 0 0.2rem;
    border:1px solid red;
  }
 input{
    /* position: fixed;
    top:0.54rem;
    width: 100%;
    padding:0.4rem 0 0.4rem 1.34rem; */
  }
</style>
