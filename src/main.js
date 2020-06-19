// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入两个css文件 border.css&reset.css
import  '@/assets/style/border.css'
import  '@/assets/style/reset.css'
import  '@/assets/style/iconfont.css'
import fastclick from 'fastclick'

Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
