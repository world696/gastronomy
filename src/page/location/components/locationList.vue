<template>
  <div  class="list" ref="wrapper">
     <div>
     <div class="present-area">
       <div class="present-title">当前</div>
       <div class="present-button">{{this.city}}</div>
     </div>
     
     <div class="hot-area">
       <div class="hot-title">热门城市</div>
       <div class="hot-list">
         <div 
           class="hot-button"
           v-for="item of hotCities"
           :key="item.id">{{item.name}}</div>
         </div>
     </div>

     <div class="alph-area">
       <div  
         class="alph-wrapper"
         v-for="(item,key) of cities"
         :key="key">
        <div class="alph-title">{{key}}</div>
        <div class="alph-list">
           <div 
             class="alph-button border-bottom"
             v-for="innerItem of item"
             :key="innerItem.id">{{innerItem.name}}</div>
           
        </div>
       </div>
      
     </div>
    </div>  
  </div>	
</template>

<script>
import BScroll from 'better-scroll'
import BMap from 'BMap'
export default {
  name: 'locationList',
  data(){
    return {
      city:'',
      cities:{
        "A":[
           {
             id:"0000001",
             name:"安庆"
           },
           {
             id:"0000002",
             name:"安庆"
           },
           {
             id:"0000003",
             name:"安庆"
           },
           {
             id:"0000004",
             name:"安庆"
           },
           {
             id:"0000005",
             name:"安庆"
           },
           {
             id:"0000006",
             name:"安庆"
           },
        ],
        "B":[
           {
             id:"0000011",
             name:"北京"
           },
           {
             id:"0000012",
             name:"北京"
           },
           {
             id:"0000013",
             name:"北京"
           },
           {
             id:"0000014",
             name:"北京"
           },
           {
             id:"0000015",
             name:"北京"
           },
           {
             id:"0000016",
             name:"北京"
           },
        ]
      },
      hotCities: [
       {
         id:"000001",
         name:"北京"
       },
       {
         id:"000002",
         name:"上海"
       },
       {
         id:"000003",
         name:"广州"
       },
       {
         id:"000004",
         name:"深圳"
       },
       {
         id:"000005",
         name:"杭州"
       },
       {
         id:"000006",
         name:"南京"
       }
      ]
    }
  },
  mounted(){
    const scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      mouseWheel:{
        speed:20,
        invert:false,
        easeTime:300
      }
    })
  let map = new BMap.Map('allmap')
  let myCity = new BMap.LocalCity()
  myCity.get((result)=>{
    if(result){
      this.city = result.name
    }else{
      this.city='正在获取当前信息'
    }
  })
  }
  }
</script>


<style lang="stylus" scoped>
.border-bottom
  &:before
    border:.04rem solid #ccc
.list
  overflow:hidden
  background:#e9ecf1
  position:absolute
  top:1.12rem
  left:0
  bottom:0
  width:100%
  .present-title,.hot-title,.alph-title
    margin-left:.4rem
    padding:.4rem 0

  .hot-title
    margin-bottom:-.3rem
  .alph-title
    clear:left
  .present-button,.hot-button,.alph-button
    line-height:.44rem
    padding:.2rem .2rem
    background:#fff
  .present-button
    width:90%
    margin-left:.2rem
  .hot-button
    width:10%
    float:left
    margin-left:.2rem
    text-align:center
    margin-top:.2rem
  .alph-button
    width:100%
    padding-left:.4rem
</style>
