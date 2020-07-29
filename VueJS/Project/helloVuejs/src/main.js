import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

// Mỗi thành phần trong trang web tương ứng nột component --> Tương ứng với một file *.vue // App.vue
// Ở file App.vue có export thì file main.js sẽ có import