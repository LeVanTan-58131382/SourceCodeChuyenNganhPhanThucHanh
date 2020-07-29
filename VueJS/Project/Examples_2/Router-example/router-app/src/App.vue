<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="{ name: 'Hello' }">Home</router-link>
    <!-- sử dụng name của Route đã được định nghĩa tại /src/router/index.js -->
    <router-link to="/about">About</router-link>
    <!-- chỉ định đường dẫn cố định mà chúng ta muốn liên kết đến. -->
    <router-link to="/login">Login</router-link>
    <router-link to="/signup">SignUp</router-link>
    <router-view></router-view>
    <!-- <router-view/> -> Các thành phần trong router-link sẽ hiển thị tại đây -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
