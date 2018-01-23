import Vue from 'vue'
import Vuex from 'vuex'

import adminStore from './layouts/admin.js'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      admin: adminStore
    },
    // 本地存库
    state: {
      // 基本信息
      baseData: '',
      // 菜单列表
      menuList: '',
      // seotitle
      siteTitle: '',
      siteKeywords: '',
      siteDescription: ''
    },
    // 存入方法
    mutations: {
      setBaseData (state, input = {}) {
        this.state.baseData = input
      },
      setMenuList (state, input = {}) {
        this.state.menuList = input
      },
      setSiteTitle (state, input = '') {
        this.state.siteTitle = input
      },
      setSiteKeywords (state, input = '') {
        this.state.siteKeywords = input
      },
      setSiteDescription (state, input = '') {
        this.state.siteDescription = input
      }
    }
  })
}
export default store
