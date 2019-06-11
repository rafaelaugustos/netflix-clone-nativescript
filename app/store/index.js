import Vue from 'nativescript-vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    name: 'Meetup VueSP'
  },
  mutations: {
    SET_EVENT(state, event){
      state.name = event
    }
  },
  actions: {}
})