import Vue from 'vue'
import ChuaDuLieu from './App.vue'

new Vue({
  el: '#app',
  render: h => h(ChuaDuLieu) // lấy dữ liệu, render dữ liệu từ thằng ChuaDuLieu trong file App.vue
})
