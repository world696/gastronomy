<template>
  <div >
    <location-header></location-header>
    <location-list :letter="letter"></location-list>
    <location-alphabet @change="handleLetterChange"></location-alphabet>
  </div>	
</template>

<script>
import locationHeader from './components/locationHeader.vue'
import locationList from './components/locationList.vue'
import locationAlphabet from './components/locationAlphabet.vue'
export default {
  name: 'Location',
  data(){
    return {
      letter:''
    }
  },
  methods:{
    handleLetterChange(letter){
      this.letter = letter
    }
  },
  components:{
    locationHeader,
    locationList,
    locationAlphabet
  }
  }
</script>


<style lang="stylus" scoped>

</style>
