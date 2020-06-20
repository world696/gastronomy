<template>
   <div class="guess">
     <div 
       class="guess-desc"
       :class="[guessDescChange]">
       <div>猜你喜欢</div>
     </div>
     <div 
       class="guess-content"
       v-for="item of guessList"
       :key="item.id">
       <div class="guess-content-img">
         <img :src="item.imgUrl">
         <div>{{item.rank}}</div>
       </div>
       <div class="guess-content-desc">
         {{item.desc}}
       </div>
       <div class="guess-content-prise">
         <div class="guess-content-prise-left">{{item.perConsume}}</div>
         <div class="guess-content-prise-right">
           <span>￥</span>{{item.prise}}<span>起</span>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'homeGuess',
  data(){
    return {
      guessDescChange:'',
      guessList:[
        {
          id:"111",
          imgUrl:"https://dimg07.c-ctrip.com/images/10070q000000h3nzk0D75_C_1600_1200.jpg",
          rank:"561点评.77%",
          desc:"当地知名的宁波菜餐馆，隐藏于海派风情浓郁的星级老饭店内。内部装修充满老克勒气息，布局复古雅致，每个角落都精美考究。这里的菜品选材严苛，丰富的烹饪手法提炼出宁波菜之精粹。环境古典雅致 桌子中间的摆设很有韵味 宁式十八斩 一道比较经典的宁波菜 一边是海蜇头 一边是醉蟹 蟹膏色泽红亮 口感鲜甜肥美 酒味不是很重 味道正正好",
          perConsume:"人均消费",
          prise:"869"
        },
        {
          id:"112",
          imgUrl:"https://dimg06.c-ctrip.com/images/100e0x000000lfa7yEA89_C_1600_1200.jpg",
          rank:"1233点评.98%",
          desc:"地址：沪青平公路2000号虹桥西郊假日酒店2楼；本店特色美食:长街蛏子 , 蓝莓山药 , 杏仁茶 , 仙草炖响螺汤 , 红酒小排 , 奶黃包 , 燕麦辽參 , 毛蟹蒸蛋 , 红豆沙 , 牛肉粒 , 蜜汁叉烧 , 芥末木耳 , 贵妃鸡 , 蔬菜汁 , 扇贝王 , 果蔬汁 , 蟹粉小笼 , 港式点心 , 燕麦辽参 , 椰香木瓜冻 , 油条",
          perConsume:"人均消费",
          prise:"393"
        },
        {
          id:"113",
          imgUrl:"https://dimg01.c-ctrip.com/images/100l160000010etz26CFC_R_1600_10000.png",
          rank:"668点评.78%",
          desc:"鲁菜海鲜（环宇荟店）地址：黄陂南路838弄中海国际环宇荟二楼207(黄陂南路与建国东交叉口)；",
          perConsume:"人均消费",
          prise:"372"
        },
        {
          id:"114",
          imgUrl:"https://dimg04.c-ctrip.com/images/10051a0000018hi6bE1F3_R_1600_10000.jpg",
          rank:"673点评.77%",
          desc:"龙庭酒家（金山店）地址：志伟路816弄33号竞衡八八广场；",
          perConsume:"人均消费",
          prise:"276"
        },
        {
          id:"115",
          imgUrl:"https://dimg02.c-ctrip.com/images/100k0y000000mi802EE02_C_1600_1200.jpg",
          rank:"140点评.66%",
          desc:"with未食（茂名北路店）地址：茂名北路275号(丰盛里一楼)；",
          perConsume:"人均消费",
          prise:"190"
        },
        {
          id:"116",
          imgUrl:"https://dimg06.c-ctrip.com/images/fd/tg/g1/M07/F2/6B/CghzfVWd3WuAcrFzAABviBYLnz8654_C_1600_1200.jpg",
          rank:"525点评.77%",
          desc:"紫寿司地址：沪青平公路2000号上海虹桥西郊假日酒店内；本店特色美食：加州卷 , 炸豆腐 , 和风沙律 , 三文鱼海胆 , 豪华海鲜寿司套餐 , 雪花牛肉 , 大虾天妇罗 , 牛肉饭 , 乌冬 , toro , 鹅肝寿司 , 天妇罗拼盘 , 牡丹虾 , 火炙三文鱼卷 , 烤银鳕鱼 , 三文鱼刺身 , 烤青花鱼饭 , 刺身拼盘 , 鳗鱼饭 , 海鲜饭",
          perConsume:"人均消费",
          prise:"450"
        }
      ]
    }
  },
  methods:{
    scrollChange(){
      let height = document.documentElement.scrollTop
     // console.log(height)
     if(height>1255){
       this.guessDescChange='guessDescChange'
     }else{
       this.guessDescChange=''
     }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.scrollChange)
  }
  }
</script>



<style lang="stylus" scoped>
.guess
  border-top:.2rem solid #eee
  background:#fff
  .guess-desc
    overflow:hidden
    height:0
    padding-bottom:8%
    padding-top:.2rem
    text-align:center
    color:#23beae
  .guessDescChange
    position:fixed
    top:.9rem
    left:0
    width:100%
    background:#fff
    z-index:100
  .guess-desc > div
    overflow:hidden
    width:25%
    height:0
    padding-bottom:3%
    margin:0 auto
    padding-top:.23rem
    border-bottom:.1rem solid #23beae
  .guess-content
    overflow:hidden
    width:92%
    height:0
    padding-bottom:64%
    margin:0 auto
    padding-top:.1rem
    border-top:.05rem solid #eee
    .guess-content-img
      position:relative
      overflow:hidden
      height:0
      padding-bottom:48.3%      
    .guess-content-img >img
      max-width:100%
    .guess-content-img >div
      position:absolute
      bottom:.2rem
      left:.1rem
      color:#fff
    .guess-content-desc
      overflow:hidden
      height:0
      padding-bottom:12%
      text-align:left
      padding-top:.1rem
      text-indent:.1rem
      font-size:.28rem
      font-weight:bold
      letter-spacing:.01rem
      line-height:.35rem
    .guess-content-prise
      overflow:hidden
      height:0
      padding-bottom:10%
      .guess-content-prise-left
        float:left
        color:#aaa
      .guess-content-prise-right
        float:right
        margin-right:.1rem
      .guess-content-prise-right > span
        color:red
        font-weight:bold
        font-size:.4rem

</style>
