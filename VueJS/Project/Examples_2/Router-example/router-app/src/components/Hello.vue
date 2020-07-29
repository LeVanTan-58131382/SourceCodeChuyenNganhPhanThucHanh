<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b @click="login" style="cursor:pointer;">Login</b> | <b @click="signup" style="cursor:pointer;">Sign Up</b>
    <p>Learn more about <b style="color:red">Firebase</b> for web</p>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Welcome to Vue router A'
      }
    },
    methods: {
      login: function(){
          this.$router.replace('login'); // Khi click vào nút này sẽ trở về trang home
      },
      signup: function(){
          this.$router.replace('signup');
      }
    }
  }
</script>