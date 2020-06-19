<template>
  <div class="hot">
    <div class="hot-left">
      <div class="left-counter">
        <div class="limit">限时抢购</div>
        <div class="count">
          距结束 <span>02</span>:<span>02</span>:<span>02</span>
        </div>
      </div>

      <div 
        class="left-content"
        v-for="item of hotContentList"
        :key="item.id"
      >
        <div class="content-img">
          <img :src="item.imgUrl">
        </div>
        <div class="content-desc">{{item.desc}}</div>
      </div>

      <div 
        class="left-prise"
        v-for="item of hotPriseList"
        :key="item.id"
      >
        <div class="prise-sale">
          限量<span>{{item.num}}份</span>
        </div>
        <div class="prise-num">
          <span>￥</span>{{item.prise}}<span>起</span>
        </div>
      </div>

    </div>
    <div class="hot-right">
      <div 
        class="right-item"
        v-for="item of hotTrendList"
        :key="item.id"
      >
        <div class="item-desc">
          {{item.desc}}
          <p>{{item.write}}</p>
        </div>
        <div class="item-img">
          <img class="img" :src="item.imgUrl">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homeHot',
  data(){
    return {
      hotTrendList:[
        {
          id:"000001",
          desc:"来一次,美食之旅吧！",
          write:"闸北区的老字号，主打葱油拌面，清汤面，浇头有糖醋小排，红烧狮子头，四喜烤麸，咸菜肉丝，百叶包，雪菜肉末等等。因价格亲民，浇头分量足为人称道，面底可以汤面或者拌面，基础价为7元。到的时候刚12点，队伍就排了好长，都排到店门口了，才发现里面还有弯弯曲曲的队伍，排了将近一个小时才吃到嘴里。本文由厨影美食编辑整理，欢迎加入厨影超级吃货群，畅谈美味，享受人生！这家店工作日开早午市，休息日只开早市（10点半关门）",
          imgUrl:"https://www.xianchihuo.net/wp-content/uploads/2020/03/147ee16cb38815.jpg"
        },
        {
          id:"000002",
          desc:"来一次,美食之旅吧！",
          write:"大壶春，老上海人都知道，虽然现在分店到处都是（大壶春生煎在上海约有12家分店），人气最旺的是位于四川中路的总店以及云南路店。据《上海通志》记载，大壶春创建于1932年，可谓上海的生煎老字号，以鲜肉生煎最为著名。从老一辈上海人开始，到现在的上海小孩，几代上海人都是吃着“大壶春”生煎长大、变老的。2016年大壶春四川中路旗舰店还入选了上海米其林必比登美食推介，在门口总会看到排的老长的队伍，可见大壶春的受欢迎程度。",
          imgUrl:"https://www.xianchihuo.net/wp-content/uploads/2020/03/17c7e3f63a1e5e.jpg"
        }
      ],
      hotPriseList:[
        {
          id:"00001",
          num:"50",
          prise:"8"
        }
      ],
      hotContentList:[
        {
          id:"0001",
          imgUrl:"//a.vpimg2.com/upload/merchandise/pdcpos/1100005413/2020/0104/143/08ac5e89-85bd-42ef-a55a-47268d5be17a_420x420_90.jpg",
          desc:"椒吱懒人火锅自热小火锅速食即食自煮自助方便网红砂锅土豆粉火锅"

        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/mixins.styl'
.hot
  clear:left
  border-top:.2rem solid #eee
  overflow:hidden
  height:0
  padding-bottom:28.5%
  background:#fff
  .hot-left
    overflow:hidden
    width:50%
    height:0
    padding-bottom:50%
    float:left
    backfround:#fff
    .left-counter
      overflow:hidden
      width:100%
      height:0
      padding-bottom:14.15%
      .limit
        font-weight:bold
        color:red
        float:left
        padding:.2rem
      .count
        float:right
        padding:.2rem
      .count>span
        background:#000
        color:#fff
    .left-content
      overflow:hidden
      width:100%
      height:0
      padding-bottom:31.7%
      float:left
      display:flex
      min-width:0
      .content-img
        overflow:hidden
        width:31.7%
        height:0
        padding-bottom:31.7%
      .content-img>img
        max-width:100%
        padding:.1rem
      .content-desc
        overflow:hidden
        width:68.3%
        padding-bottom:31.7%
        margin-left:.1rem
        ellipsis()
        line-height:.42rem
    .left-prise
      overflow:hidden
      width:100%
      height:0
      padding-bottom:14.15%
      .prise-sale
        float:left
        font-weight:bold
        margin-left:.1rem
        margin-top:.1rem
      .prise-sale > span
        display:inline-block
        color:#aaa
      .prise-num
        float:right
        margin-right:.2rem
        color:red
  .hot-right
    overflow:hidden
    width:49%
    height:0
    padding-bottom:49%
    border-left:.05rem solid #eee
    background:#fff
    .right-item
      position:relative
      overflow:hidden
      width:100%
      height:0
      padding-bottom:29.5%
      background:#fff
      border-bottom:.03rem #eee solid
      .item-desc
        padding:.2rem
        font-weight:bold
      .item-desc > p
        color:#ccc
        margin-top:.2rem
        width:70%
      .img
        position:absolute
        top:0
        right:0
        max-width:100%
        max-height:100%
</style>