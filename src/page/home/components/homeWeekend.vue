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
  data(){
    return {
      weekendList:[
        {
          id:"11",
          imgUrl:"http://erp.cntour365.com/system/attachments/country/7dd84ba7d44e00/201603081031351.jpg",
          desc:"城隍庙",
          detail:"对于初访上海的游客而言，城隍庙是全面地领略上海历史、文化、风情，并品尝到地道的上海小吃的第一窗口。城隍庙旅游区包含了老城隍庙、豫园及购物美食小商品等一大块区域，是很多人来上海必游的景点。“豫园”和“老城隍庙”是明代私人园林与道教道观，需购票游览，其他区域基本都是开放性的景点。夜幕降临时，整个步行街会变得更加金碧辉煌，喜欢摄影的蜂蜂一定不能错过。"
        },
         {
          id:"12",
          imgUrl:"https://youimg1.c-ctrip.com/target/10050b0000005pyoxC739.jpg",
          desc:"绿波廊",
          detail:"绿波廊位于豫园九曲桥旁，是沪上著名的百年老店。绿波廊系三层仿明清建筑，青瓦朱栏、古色古香，与湖心亭相映成辉，宾客倚窗就座，九曲桥尽收眼底，碧波绿水，令人心旷神怡，平添了不少饮食情趣。这里的点心堪称一绝，桂花拉糕、眉毛酥等特色点心不可错过。本帮菜做的挺地道，水晶虾仁弹性十足，八宝鸭用料不错，价格当然也是不算便宜的。"
        },
         {
          id:"13",
          imgUrl:"http://erp.cntour365.com/system/attachments/country/7dd84ba7d44e00/201603081031351.jpg",
          desc:"上海会馆",
          detail:"上海会馆是一家带有新式上海味的本帮餐厅，开在素有上海老城厢之美誉的城隍庙附近。环境优雅，海派壁画、落地玻璃、还有美艳的水晶灯，处处让这家餐厅流露着华丽的气息。这里菜价格适中，菜品精致，味道也很不错。本店特色美食：蟹粉豆腐 , 松鼠桂鱼 , 糖醋小排 , 宫廷野山菌 , 红精制红烧肉 , 黑椒牛肉粒 , 飘香榴莲酥 , 响油鳝丝 。"
         },
         {
          id:"14",
          imgUrl:"https://dimg05.c-ctrip.com/images/100p080000003e1l502C6_R_510_300.jpg",
          desc:"本帮红烧肉",
          detail:"你要是问一个上海人喜欢吃什么菜，十有八九是红烧肉。本帮红烧肉采用肥瘦相间的五花肉制成，色泽红亮，恰到好处的火候烹煮出肥而不腻的口感，香浓咸甜、浓油赤酱是其特点。浓油赤酱也是上海菜的美食偏好，代表了上海人的美食口味。地址：RIVIERA松鹤楼、梅园春晓·精致上海菜(大悦城店)、和記小菜(东方店)、金时代顺风大酒店(金玉兰店)"
         },
         {
          id:"15",
          imgUrl:"https://dimg05.c-ctrip.com/images/tg/140/416/169/2720c5a81aef475595043a17c147f49a_R_510_300.jpg",
          desc:"油墩子",
          detail:"油墩子是上海知名的街头小吃，又叫油端子或油墩儿。油墩子可以分成荤素两类，荤菜馅就是用肉馅，素菜馅的又称萝卜丝饼，甜味的则是用豆沙馅。油墩子吃起来外表香脆，里面的面糊又有些许软糯，配上美味的馅料，口感丰富。"
         },
         {
          id:"16",
          imgUrl:"https://dimg02.c-ctrip.com/images/tg/370/465/412/d4978d577fe44a89ae9ca163840eade5_R_510_300.jpg",
          desc:"腌笃鲜",
          detail:"腌笃鲜来源于宁波菜，现已是上海本帮菜中较有代表性的家常菜之一。腌笃鲜由春笋，腌制过的咸肉和新鲜猪肉一起用小火慢煮而成，讲究保留原汁的鲜味，无需另加佐料，其成品口味咸鲜，肉质酥软，笋清香脆嫩，配以白色浓汤，简直就是人间佳品。"
         }
       
      ],
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
