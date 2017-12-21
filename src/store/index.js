/**
 * Created by apple on 2017/6/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import {API_PREFIX} from '@/config'

const state = {
  user: {}
}

const actions = {}

const mutations = {
  // 设置用户
  setUser (state, user) {
    state.user = user
  }
}

const getters = {
  getUser (state) {
    return state.user
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
