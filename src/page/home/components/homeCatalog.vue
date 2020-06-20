<template>
   <div class="wrapper">
     <div class="icon" 
        v-for="item of iconList" 
        :key="item.id"
        >
      <div class="icon-img">
        <img class="img" 
          :src="item.imgUrl"
          :class="[item.color]"
          >
      </div>
      <div class="icon-desc">{{item.desc}}</div>
     </div>
     
   </div>
</template>

<script>
export default {
  name: 'homeCatalog',
  props:{
    iconList:Array
  },
  data(){
  return {
    red:'red',
    yellow:'yellow',
    green:'green',
    blue:'blue',
   

  }
  }
  }
</script>



<style lang="stylus" scoped>
.wrapper
 background:#fff
 padding-top:.2rem
 .icon
  width:25%
  float:left
  .img
   display:block
   background:#b4d1bf
   border-radius:1rem
   margin:0 auto
  .red
   background:#fd7e5f
  .yellow
   background:#fdcc77 
  .green
   background:#6dac79 
  .blue
   background:#c7e0f4 
  .icon-desc
   text-align:center
   padding-top:.2rem
   color:#252e3f
   padding-bottom:.5rem
</style>
