<template>
   <div class="week">
     <div class="week-desc">
       <div class="week-desc-content">
         ///////////<span>周末聚餐走起</span>///////////
         <p>致力推荐超完美聚会套餐</p>
       </div>
     </div>

     <div class="week-swiper">
       <swiper  :options="swiperOption">
         <swiper-slide 
           v-for="item of weekendList"
           :key="item.id"
         >
           <div class="weekSwiper-item">
             <div class="weekSwiper-item-img"><img :src="item.imgUrl"></div>
             <div class="weekSwiper-item-desc">
               {{item.desc}}
               <p>{{item.detail}}</p>
             </div>
           </div>
         </swiper-slide>
       </swiper >
     </div>
   </div>
</template>

<script>
export default {
  name: 'homeWeekend',
  props:{
    weekendList:Array
},
  data(){
    return {
      swiperOption:{
        freeMode:true,
        spaceBetween:20,
        slidesPerView:3
      }
    }
  }
 
  }
</script>



<style lang="stylus" scoped>
.week
  overflow:hidden
  height:0
  padding-bottom:50%
  border-top:.2rem solid #eee
  .week-desc
    overflow:hidden
    height:0
    padding-bottom:10%
    
    position:relative
    .week-desc-content
      text-align:center
      color:#252e3f
      position:absolute
      top:50%
      left:50%
      transform:translate(-50%,-50%)
      .week-desc-content >span
        display:inline-block
        color:#252e3f
        font-bold:bold
        margin:.15rem .3rem
      
  .week-swiper
    overflow:hidden
    height:0
    width:100%
    padding-bottom:88%
    .weekSwiper-item
      overflow:hidden
      height:0
      width:100%
      padding-bottom:100%
      margin-left:.2rem
      border:.02rem solid #ccc
      .weekSwiper-item-img
        overflow:hidden
        height:0
        padding-bottom:60%
      .weekSwiper-item-img>img
        max-width:100%
      .weekSwiper-item-desc
        text-align:center
        padding-top:.3rem
      .weekSwiper-item-desc>p
        display:inline-block
        margin-top:.1rem

</style>
