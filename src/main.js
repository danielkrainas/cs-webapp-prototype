import Vue from 'vue'
import App from './App.vue'

// require('file-loader?name=[name].[ext]!./index.html') // eslint-disable-line import/no-webpack-loader-syntax

const app = new Vue({
  el: '#app',
  render: h => h(App),
})
