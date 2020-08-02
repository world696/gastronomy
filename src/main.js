// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import store from './store/store.js'
// 引入两个css文件 border.css&reset.css
import  '@/assets/style/border.css'
import  '@/assets/style/reset.css'
import  '@/assets/style/iconfont.css'
import 'swiper/css/swiper.css'
import fastclick from 'fastclick'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted(){
  	let map = new BMap.Map('allmap')
  let myCity = new BMap.LocalCity()
  myCity.get((result)=>{
    if(result){
      this.$store.state.city = result.name
    }else{
      this.$store.state.city ='北京'
    }
  })
  }
})
