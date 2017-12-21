<template>
  <view-box ref="viewBox" body-padding-top="70px">
    <!-- 页面头部 -->
    <yt-header slot="header">
      <x-header>
        <span>overwrite-left</span>
        <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </x-header>
    </yt-header>
    <!-- 页面内容 -->
    <router-view></router-view>

    <!-- 底部导航 -->
    <tabbar slot="bottom">
      <tabbar-item selected link="/hello">
        <i class="iconfont icon-message" slot="icon"></i>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item>
        <i class="iconfont icon-time" slot="icon"></i>
        <span slot="label">示例</span>
      </tabbar-item>
      <tabbar-item>
        <i class="iconfont icon-error" slot="icon"></i>
        <span slot="label">示例2</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>
<script type="text/javascript">
  import {ViewBox, XHeader, Tabbar, TabbarItem, Group, Cell} from 'vux'
  export default {
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    data () {
      return {}
    }
  }
</script>
