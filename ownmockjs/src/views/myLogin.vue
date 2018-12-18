<template>
   <div class="wrapper">
      <div class="title">
          <span class="back" @click="back">&lt;</span>
          <span class="title">登录</span>
      </div>
      <div class="login">
          <div class="username">
              <label>账号:</label>
              <input type="text" v-model="username" placeholder="测试账号admin">
          </div>
          <div class="password">
              <label>密码:</label>
              <input v-model="password" type="password" placeholder="测试密码123456">
          </div>
          <button @click="login">登录</button>
      </div>
   </div>
</template>
<script>
import { requestLogin } from '../api/api.js'
import { Toast } from 'mint-ui';
export default {
  name:'myLogin',
  data(){
    return{
      username: "",
      password: ""
    }
  },
  methods:{
    back(){
      this.$router.go("-1");//.go('0')刷新
    },
    login(){
      if(!this.username||!this.password){
        Toast({
          message:'请填写完整信息',
          iconClass: 'icon icon-error',
          position:'top'
        })
        return;
      }
      let data = {
        username: this.username,
        password: this.password
      }
      requestLogin(data).then(res=>{
        console.log(res)
        if(res == 'notFound'){
          Toast({
            message:'用户或密码错误',
            iconClass: 'icon icon-error',
          })
        }else{
          this.$router.replace('/dataSearch')//用/dataSearch代替当前路由
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .wrapper {
    background-color: white;
    .title {
        height: 1.2rem;
        background-color: #f7f9fc;
        line-height: 1.2rem;
        .back {
          font-size: 0.8rem;
          margin-left: 0.3rem;
        }
        .title {
          font-size: 0.6rem;
          position: absolute;
          left: 45%;
        }
    }

    .login {
      width: 8rem;
      margin: 0 auto;

      .username, .password {
        margin: 0.3rem;
        border-bottom: 1px solid #e6eaf2;
        height: 1.6667rem;
        line-height: 1.6667rem;
        color: #99a4bf;
        &>label {
          font-size: 0.45rem;
        }

        &>input {
            border: 0;
            background-color: white;
            width: 5.5rem;
            height: 0.7rem;
            outline: none;
            font-size: 0.40rem;
        }
      }

        // input
        // background-color white
      button {
        width: 7.4rem;
        height: 1rem;
        margin: 0.3rem;
        border-radius: 0.2rem;
        background-color: #2ab868;
        border: 0;
        outline: none;
        font-size: 0.45rem;
        color: white;
      }
    }
    video{
      width: 10rem;
      height: 8rem ;
    }

}
</style>

