<template>
  <div >
     <ul class="list">
       <li
         v-for="item of alphabetList"
         :key="item.id"
         @click="handleLetterClick">{{item.content}}</li>
       
     </ul>
     <div class="connect" ref="distance" :style="hidden">
       {{this.content}}
     </div>
  </div>	
</template>

<script>

export default {
  name: 'locationAlphabet',
  methods:{
    handleLetterClick(e){
      this.content = e.target.innerText
      this.$emit("change",this.content)
      for(let i =0;i<this.alphabetList.length;i++){
        if(this.content===this.alphabetList[i].content){

          let distance =1.0+ (i+1)*0.37

          const showElement = this.$refs.distance
          showElement.style="display:block"
          showElement.style="top:"+distance+"rem"
          setTimeout(function(){
            showElement.style="display:none"
          },500)
        }
      }
    }
  },
  data() {
    return {
      hidden:{
        display:'none'
      },
      content:'',
      alphabetList:[
        {
        id:"101110",
        content:"当前"
        },
        {
        id:"101111",
        content:"热门城市"
        },
        {
        id:"111112",
        content:"A"
        },
        {
        id:"111113",
        content:"B"
        },
        {
        id:"111114",
        content:"C"
        },
        {
        id:"111115",
        content:"D"
        },
        {
        id:"111116",
        content:"E"
        },
        {
        id:"111117",
        content:"F"
        },
        {
        id:"111118",
        content:"G"
        },
        {
        id:"111119",
        content:"H"
        },
        {
        id:"111120",
        content:"I"
        },
        {
        id:"111121",
        content:"J"
        },
        {
        id:"111122",
        content:"K"
        },
        {
        id:"111123",
        content:"L"
        },
        {
        id:"111124",
        content:"M"
        },
        {
        id:"111125",
        content:"N"
        },
        {
        id:"111126",
        content:"O"
        },
        {
        id:"111127",
        content:"P"
        },
        {
        id:"111128",
        content:"Q"
        },
        {
        id:"111129",
        content:"R"
        },
        {
        id:"111130",
        content:"S"
        },
        {
        id:"111131",
        content:"T"
        },
        {
        id:"111132",
        content:"U"
        },
        {
        id:"111133",
        content:"V"
        },
        {
        id:"111134",
        content:"W"
        },
        {
        id:"111110",
        content:"X"
        },
        {
        id:"111135",
        content:"Y"
        },
        {
        id:"111136",
        content:"Z"
        }

      ]
    }
  }
  }
</script>


<style lang="stylus" scoped>
.list
  position:fixed
  top:1.15rem
  right:0
  z-index:100
  text-align:center
  width:15%
  background:#eff1f5
  padding-bottom:100rem
  opacity:.7
  color:#62cec4
.list>li
  margin:.1rem 0
  font-weight:bold
.connect
  position:absolute
  top:1.1rem
  right:1.1rem
  z-index:100
  text-align:center
  width:15%
  background:rgba(80,180,0,.7)
  border-radius:.07rem
  
 
</style>
