<template>
  <div >
    <location-header></location-header>
    <location-list 
      :letter="letter"
      :cities="cities"
      :hotCities="hotCities"
      ></location-list>
    <location-alphabet 
      @change="handleLetterChange"
      :alphabetList="alphabetList"></location-alphabet>
  </div>	
</template>

<script>
import axios from 'axios'
import locationHeader from './components/locationHeader.vue'
import locationList from './components/locationList.vue'
import locationAlphabet from './components/locationAlphabet.vue'
export default {
  name: 'Location',
  data(){
    return {
      letter:'',
      cities:{},
      hotCities:[],
      alphabetList:[]
    }
  },
  methods:{
    handleLetterChange(letter){
      this.letter = letter
    },
    getLocationData(){
      axios.get("/api/city.json")
      .then(this.getHomeDataSuccess)
    },
    getHomeDataSuccess(res){
      res = res.data
      if(res.data){
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
        this.alphabetList = data.alphabetList
      }
    }
  },
  components:{
    locationHeader,
    locationList,
    locationAlphabet
  },
  mounted(){
    this.getLocationData()
  }
  }
</script>


<style lang="stylus" scoped>

</style>
