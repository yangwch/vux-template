<template>
  <div class="login">
    <img class="bg" :src="'./static/img/login-bg.jpg'" alt="背景图">
    <div class="content">
      <p class="row">
        <span>账号:</span>
        <input v-model="userInfo.userName"
               type="text"
               placeholder="请输入账号">
      </p>
      <p class="row">
        <span>密码:</span>
        <input v-model="userInfo.password"
               type="password"
               placeholder="请输入密码">
      </p>
      <p class="row">
        <checker v-model="autoLogin" default-item-class="autologin" selected-item-class="autologin-selected">
          <checker-item :value="'1'"><i :class="{'iconfont': true, 'icon-success': autoLogin, 'icon-check-normal': !autoLogin}"></i>自动登录</checker-item>
        </checker>
      </p>
      <x-button type="primary" :show-loading="loading" action-type="button" @click.native="login">登录</x-button>
    </div>
  </div>
</template>
<script>
  import {Checker, CheckerItem, XButton} from 'vux'
  export default {
    components: {
      Checker,
      CheckerItem,
      XButton
    },
    data () {
      return {
        userInfo: {
          'userName': 'admin',
          'password': '123456'
        },
        autoLogin: '',
        loading: false
      }
    },
    methods: {
      login () {
        this.$router.push({name: 'home'})
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .login
    width: 100%
    height: 100%
    transition: all .3s ease
    .autologin .iconfont
      margin-right .5em
      cursor pointer
  .bg
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    z-index 10

  .content
    position: absolute
    color: #fff
    top: 240px
    left: 60px
    right: 60px
    height: 200px
    z-index: 100

  .btn
    margin-top: 0px
    height: 35px
    line-height: 35px
    color: #fff
    font-size: 15px
    text-align: center
    background-color: #35ca98
    border-radius: 5px

  .row
    display: flex
    align-items center
    font-size: 15px
    margin-bottom: 30px
    span
      flex: 0 0 50px
      letter-spacing: 2px
      margin-right: 10px
    input
      flex: 1
      background-color: transparent
      color: #fff
      border: 0
      outline: 0
      border-bottom: 1px solid #fff
      &:focus
        border: 0
        outline: 0
        border-bottom: 1px solid #fff

  .auto-login
    margin-left 5px


  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size: 15px;
    color: #fff;
    opacity:1;
  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size: 15px;
    color: #fff;
    opacity:1;
  }

  input:-ms-input-placeholder{
    font-size: 15px;
    color: #fff;
    opacity:1;
  }

  input::-webkit-input-placeholder{
    font-size: 15px;
    color: #fff;
    opacity:1;
  }
</style>
