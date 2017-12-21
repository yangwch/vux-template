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
