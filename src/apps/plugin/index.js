import {ViewBox, XHeader, Tabbar, TabbarItem, Group, Cell, XButton, XInput, ToastPlugin} from 'vux'
import ytHeader from './header'
const vuxComps = {
  ytHeader, ViewBox, XHeader, Tabbar, TabbarItem, Group, Cell, XButton, XInput
}
export default {
  install (Vue) {
    Vue.use(ToastPlugin)
    for (let key in vuxComps) {
      Vue.component(key, vuxComps[key])
    }
  }
}
