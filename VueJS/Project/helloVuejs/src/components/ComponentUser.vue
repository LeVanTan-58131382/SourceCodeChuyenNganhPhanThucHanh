<template>
<div >
    <div class="user col-md-12">
        <p>{{user.email}}</p>
        <button 
        v-on:click="handleDelete"
        class="del btn btn-dark">Delete</button>
    </div>
</div>
    
</template>
<script>
export default {
    name: 'user',
    props:{
        user: {
            type: Object,
            default: null
    }
    },
    data(){  
        return {
            
        }
    },
    methods: {
        handleDelete(e){
            var data = {
                id: this.user.id,
            };
            console.log("handle delete trong compUser.vue");
            this.$emit('deleteUser', data);  // deleteUser chính là tên sự kiện bên ListUser
        }
    }
}
</script>
<style>
.user {
    width: 400px;
    height: 200px;
    padding: 10px;
    margin: 10px;background-color: aqua;
    border: 3px solid rgb(97, 16, 129);
    border-radius: 10px
}
.user .del{
    position: absolute;
    top:0;
    right: 0;
}
</style>