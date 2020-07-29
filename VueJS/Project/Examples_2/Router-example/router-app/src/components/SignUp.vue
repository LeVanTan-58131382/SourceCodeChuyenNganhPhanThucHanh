<template>
    <div class="sign-up">
        <div class="row">
            <div class="col-md-3">
              <b @click="returnhome" style="cursor:pointer;">Home</b>
            </div>
            <div class="col-md-6">
                <p>Let's create a new acount!</p>
        <input class="form-control" type="text" placeholder="Email"><br>
        <input class="form-control" type="password" placeholder="Password"><br>
        <button class="btn btn-outline-dark">Sign Up</button>
        <span>or go back to login</span>
            </div>
            <div class="col-md-3"></div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {};
  },
  methods: {
    returnhome: function(){
      this.$router.replace('home');
    }
  }
};
</script>

<style>
.sign-up {
  margin-top: 40px;
}
button {
  margin-top: 10px;
  width: 30%;
  cursor: pointer;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
