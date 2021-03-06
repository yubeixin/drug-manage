import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import lodash from 'lodash'
import './assest/static/css/theme-green/index.css' // 浅绿色主题
import './assest/static/font/iconfont.css'
const VueResource = require('vue-resource')

const axios = require('axios')
Vue.prototype.$http = Vue.http = axios
Vue.prototype.$lodash = Vue.lodash = lodash
Vue.use(VueResource)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  ...App
}).$mount('#app')
