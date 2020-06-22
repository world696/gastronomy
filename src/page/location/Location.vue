<template>
  <div >
    <location-header></location-header>
    <location-list></location-list>
  </div>	
</template>

<script>
import locationHeader from './components/locationHeader.vue'
import locationList from './components/locationList.vue'
export default {
  name: 'Location',
  components:{
    locationHeader,
    locationList
  }
  }
</script>


<style lang="stylus" scoped>

</style>
