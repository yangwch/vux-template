import {ViewBox, XHeader, Tabbar, TabbarItem, Group, Cell, XButton, XInput} from 'vux'
import ytHeader from './header'
const vuxComps = {
  ytHeader, ViewBox, XHeader, Tabbar, TabbarItem, Group, Cell, XButton, XInput
}

export default {
  install (Vue) {
    for (let key in vuxComps) {
      Vue.component(key, vuxComps[key])
    }
  }
}
