<template>
  <div class="main-page">
    <x-header>the page title.</x-header>
    <div class="vux-demo">
      <h1>h1</h1>
    </div>
    <x-button type="primary" plain>按钮示例</x-button>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, XHeader } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XHeader
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
