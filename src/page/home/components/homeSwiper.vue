<template>
   <div class="wrapper">
    <swiper  :options="swiperOption">
    <swiper-slide v-for="item of headerImg" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" >
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
   </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  data(){
   return {
      headerImg:[
       {
        id:'001',
        imgUrl:'//h2.appsimg.com/b.appsimg.com/upload/mst/2020/05/07/138/bd2053897eec63a8bd65ae6fc89d9f6e.jpg'
       },
       {
        id:'002',
        imgUrl:'//h2.appsimg.com/b.appsimg.com/upload/mst/2020/05/07/138/bd2053897eec63a8bd65ae6fc89d9f6e.jpg'
       }
      ],
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true
      }
   }
  }
  }
</script>



<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet
 background:#fff
.swiper-img
 width:100%


 </style>
