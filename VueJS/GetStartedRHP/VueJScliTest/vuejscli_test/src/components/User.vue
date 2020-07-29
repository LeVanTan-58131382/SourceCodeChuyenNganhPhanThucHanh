<template>
<div class="container-fluid" id= "user">
    <div id="header" class="row">
        <button class="btn btn-dark" style="height: 50px; width: 110px" @click="changeName"> Change Name</button>
    </div>
    <div class="row">
        <div class="col-md-6">
            <ComponentUserDetail :customName = "name"> Sự kiện mà comp UserDetail truyền đến comp User là là sự kiện :name hoặc là v-bind:name</ComponentUserDetail>            
        </div>
        <div class="col-md-6">
            <ComponentUserEdit></ComponentUserEdit>
        </div>
    </div>
</div>
</template>

<script>
import ComponentUserDetail from "./UserDetail.vue";
import ComponentUserEdit from "./UserEdit.vue";
export default {
    data: function(){
        return{
            name: "Sky Albert"
        }
    },
    methods: {
        changeName : function(){
            this.name = "Lê tân"
        }
    },
    components: {
        ComponentUserDetail,
        ComponentUserEdit
    }
}
</script>

<style>
#user {
    background-color: aqua;
    width: 880px;
    height: 600px;
    border: 1px solid #0000;

}
#header {
    height: 150px;
}
</style>
