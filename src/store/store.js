import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
      city:'北京'
	},
	actions:{
      change(ctx,city){
      	ctx.commit('change',city)
      }
	},
	mutations:{
      change(state,city){
      	state.city = city
      }
	}
})