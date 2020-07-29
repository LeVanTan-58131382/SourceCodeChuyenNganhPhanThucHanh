<template>
    <div class="login">
        <div class="row">
            <div class="col-md-3">
                <b @click="returnhome" style="cursor:pointer;">Home</b>
            </div>
            <div class="col-md-6">
                <h3>Sign In</h3>
        <input class="form-control" type="text" placeholder="Email"><br>
        <input class="form-control" type="password" placeholder="Password"><br>
        <button @click="login" class="btn btn-outline-dark">Connection</button>
        <p>You don't have an account ? You can <b @click="signup" style="cursor:pointer;">Create one</b> </p>
            </div>
            <div class="col-md-3"></div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {
      returnhome: function(){
          this.$router.replace('home');
      },
      login: function(){
          this.$router.replace('home'); // Khi click vào nút này sẽ trở về trang home
      },
      signup: function(){
          this.$router.replace('signup');
      }
  }
};
</script>

<style>
</style>
