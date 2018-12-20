<template>
  <div class="wrapper">
    <div class="search">
      <div class="searchbar">
        <i class="mintui mintui-search"></i>
        <input type="text" placeholder="搜索你感兴趣的课题">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
*{
  box-sizing: border-box;
}
  .search{
    width: 100%;
    height: 48px;
    margin: 0 auto;
    background: #fff; 
    display: flex;
    align-items: center;
    justify-content: center;
    .searchbar{
      margin: 10px;
      flex: 9;
      background-color: #f2f4f7;
      border-radius: 15px;
      input{
        width: 85%;
        height: 29px;
        outline: none;
        background: #f2f4f7; 
        border:0;
      }
      i{
        margin-left: 10px;
      }
    }
  }
</style>
