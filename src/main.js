import Vue from 'vue'
import App from './App.vue'

require('./style/reset.css')
require('./style/global.scss')

const app = new Vue({
  el: '#app',
  render: h => h(App),
})
