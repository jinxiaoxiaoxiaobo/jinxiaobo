import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
  	nb:0,
  	arr:[]
  },
   
   mutations:{
   	jia(state){
        state.nb+=1;
    },
    zj(state,val){
        state.arr.push(val);
    },
    jian(state,val){
        state.arr[val].li.sl--
    }
   },
   
})
