<template>
  <div id="app" :class="transitionName">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'animated fadeIn'
    }
  },
  watch: {
    '$route' (to, from) {
      this.transitionName = 'animated ' + (to.meta.index >= from.meta.index ? 'slideInRight' : 'slideInLeft')
    }
  },
  created () {
    this.initJsBridge()
  },
  methods: {
    connectWebViewJavascriptBridge (callback) {
      if (window.WebViewJavascriptBridge) {
        callback(window.WebViewJavascriptBridge)
      } else {
        window.document.addEventListener('WebViewJavascriptBridgeReady', () => {
          callback(window.WebViewJavascriptBridge)
        }, false)
      }
    },
    /* 初始注册返回事件 */
    initJsBridge () {
      let self = this
      this.connectWebViewJavascriptBridge(bridge => {
        bridge.init()
        bridge.registerHandler('clickBackButton', (data, responseCallback) => {
          self.goBack()
          responseCallback(null)
        })
      })
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html, body, #app {
  height: 100%;
}
body {
  background-color: #fbf9fe;
  height: 100%;
}
</style>
