<template>
  <div class="home" >
    <home-header class="home-header" :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-catalog :iconList="iconList"></home-catalog>
    <home-hot
      :hotPriseList="hotPriseList"
      :hotTrendList="hotTrendList"
      :hotContentList="hotContentList"
    ></home-hot>
    <home-weekend :weekendList="weekendList"></home-weekend>
    <home-guess :guessList="guessList"></home-guess>
  </div>	
</template>

<script>
import axios from 'axios'
import homeHeader from './components/homeHeader.vue'
import homeSwiper from './components/homeSwiper.vue'
import homeCatalog from './components/homeCatalog.vue'
import homeHot from './components/homeHot.vue'
import homeWeekend from './components/homeWeekend.vue'
import homeGuess from './components/homeGuess.vue'
export default {
  name: 'Home',
  components:{
    homeHeader,
    homeSwiper,
    homeCatalog,
    homeHot,
    homeWeekend,
    homeGuess
  },
  data(){
    return {
      city:'',
      guessList:[],
      swiperList:[],
      hotContentList:[],
      hotPriseList:[],
      hotContentList:[],
      hotTrendList:[],
      iconList:[],
      swiperList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeData(){
      axios.get("/api/index.json")
      .then(this.getHomeDataSuccess)
    },
      getHomeDataSuccess(res){
       // console.log(res)
       res = res.data
       if(res.data){
         const data = res.data
         this.city = data.city
         this.guessList = data.guessList
         this.hotContentList = data.hotContentList
         this.hotPriseList = data.hotPriseList
         this.hotTrendList = data.hotTrendList
         this.hotContentList = data.hotContentList
         this.iconList = data.iconList
         this.swiperList = data.swiperList
         this.weekendList = data.weekendList
       }
      }
  },
  mounted(){
    this.getHomeData()
  }
  }
</script>


<style lang="stylus" scoped>
.home
 position:relative
 .home-header
  position:fixed
  top:0
  left:0
  z-index:100
  width:100%
</style>
