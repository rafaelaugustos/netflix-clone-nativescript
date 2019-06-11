import Vue from 'nativescript-vue'
import Vuex from 'vuex'
import { store } from './store'
import Home from './views/Home'
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(Vuex)
if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'CardView',
  () => require('nativescript-cardview').CardView
)

new Vue({
  render: h => h('frame', [h(Home)]),
  store
}).$start()
