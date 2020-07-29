// Sẽ có 3 phần chính:
// + template
// + script
// + style


<template>
  <div id="app">
    <div class="col">
      <div class="row-md-12">
          <button v-on:click="title= 'Tự học lập trình VueJs'">Thay đổi component từ App.vue</button>  <!-- Có thể tạo method riêng -->
          <ComponentHeader v-bind:title="title"
           v-on:changeTitleEvent="handleChangeTitle"
          />
          <!-- nó sẽ tương tự như<header titleheader="Hello to Your Vue.js App"><h1>Đây là Header !!!</h1></header> -->
          <img src="./assets/logo.png">
      </div>
      <div class="row-md-12">
          <ComponentListUser 
          v-on:deleteUserEvent="handleDeleteUser"
          v-bind:listUser="listUser"/>
      </div>
      <div class="row-md-12">
          <ComponentFooter v-bind:title="title"/>
      </div>
      <div class="row-md-12">
          <ComponentRef />
      </div>
      <div class="row-md-12">
          <ComponentDemoSlot >
            <!-- <div class="demo-slot">
              <p>Đây là demo của phần slot, khai báo phần tử slot bên Component slot sẽ dùng được đoạn text này </p>
            </div> -->
          </ComponentDemoSlot>
      </div>
    </div>
  </div>
</template>

<script>
/* Toàn bộ dữ liệu ta sẽ quản lý ở phần App.vue
App (title, listUser[])
  ComponentHeader
  ComponentListUser (listUser[])
    User (user -> object)
    User (user -> object)
  ComponentFooter
    -> props : Những Data truyền từ component cha vào component con
      -> Cú pháp giống như khai báo thuộc tính (trong các thành phần html) 
        -> Ràng buộc thuộc tính 
          -> Sử dụng v-bind
      (VIDEO 26)
*/

import ComponentListUser from "./components/ComponentListUser.vue";
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentFooter from "./components/ComponentFooter.vue";
import ComponentRef from "./components/ComponentRef.vue";
import ComponentDemoSlot from "./components/ComponentDemoSlot.vue";
export default {
  name: 'app',
  // data phải là một hàm, trả về một đối tượng
  data () {
    return {
      title: 'Hello to Your Vue.js App',
      listUser:[
        {id:100, email:"test00@gmail.com", active: false},
        {id:101, email:"test01@gmail.com", active: true},
        {id:102, email:"test02@gmail.com", active: false},
        {id:103, email:"test03@gmail.com", active: true},
        {id:104, email:"test04@gmail.com", active: true}, 
        {id:105, email:"test05@gmail.com", active: false},
        {id:106, email:"test06@gmail.com", active: false},
      ]
    }
  /**
   * Props Down -> Truyền dữ liệu từ thằng cha vào con -> Thằng con chỉ được xài thôi,
   *               không được thay đổi trực tiếp.
   * Event up -> Truền thông điệp ( truyền sự kiện) thông báo cho component cha biết là nó muốn
   *             thay đổi dữ liệu  -> Nhiệm vụ của component cha là nhận được thông điệp và tiến hành thay đôi data
   *          => Custom envent trong VueJs
   * 
   * click: sự kiện có sẵn trong Vuejs
   * v-on:click="changeTitle"
   *    -> click: tên sự kiện
   *    -> changeTile: tên hàm sử lý khi sự kiện được kích hoạt (khi người dùng click).
   * 
   * 
   */
  },
  // khai báo một object chứa tất cả các component mà nó sử dụng
  components: {
    ComponentHeader,
    ComponentFooter,
    ComponentListUser,
    ComponentRef,
    ComponentDemoSlot
  },
  methods: {
    handleChangeTitle(){
      this.title = "Tự học VueJs -> Do Header thay đổi"
      console.log("Hàm handle ChangeTitle được gọi sau khi được kích hoạt thành công App.vue");
    },
    handleDeleteUser(data){
      // trong data này sẽ có cái id của thằng user mà mình muốn xóa
      var indexDelete = -1; // cho trường hợp chưa tìm thấy phần tử có id giống như id từ dưới listUser truyền lên thông qua data
      this.listUser.forEach((user, idx) => {
        if(user.id == data.id){
          indexDelete = idx;
        }
      });
      if(indexDelete != -1)
      {
        // splice(vị trí phần tử cần xóa, số phần tử cần xóa)
        this.listUser.splice(indexDelete,1);
      }
      console.log("handel delete user trong app.vue",data);
    }
  }
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
