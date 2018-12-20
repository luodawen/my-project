<template>
  <div>
    <search></search>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">个性推荐</mt-tab-item>
      <mt-tab-item id="2">精品课</mt-tab-item>
      <mt-tab-item id="3">微专业</mt-tab-item>
      <mt-tab-item id="4">行家</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected" swipeable>
      <mt-tab-container-item id="1">
        <div>第一个</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div>第二个</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div>第三个</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div>第四个</div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import search from '@/components/search'
export default {
  data(){
    return{
      selected: "1",
    }
  },
  components: {
    search
 }
}
</script>

<style lang="less" scoped>

</style>

