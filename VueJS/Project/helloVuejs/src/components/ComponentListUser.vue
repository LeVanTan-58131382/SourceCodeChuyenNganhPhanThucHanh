<template>
    <div class="list-user row">
        <ComponentUser 
            v-for="user in listUser"
            v-bind:key="user.id"
            v-bind:user="user" 
            v-on:deleteUser="deleteUser"
        
            />
    </div>
</template>
<script>
/** Phần Xóa User:
 * Thằng nào giữ dữ liệu thì thằng đó mới có quyền xóa thôi
 * ListUser không được quyền thay đồi arrUser -> Truyền tiếp Event thêm một lần nữa ra App.vue
 *   Trong khi đó: User truyền thông báo ra cho thằng ListUser
 *   
 */
import ComponentUser from "./ComponentUser.vue";
export default {
    name: 'comp-listuser',
    props: {
        listUser: {
            type: Array,
            default: [] // giá trị của default là một mảng rỗng
        }
    },
    data(){
        return {
            
        }
    },
    components: {
    ComponentUser
    },
    methods: {
        deleteUser(data){
            // data từ User truyền lên
            console.log("handle delete trong compListUser.vue");
            this.$emit("deleteUserEvent",data); // Gửi data ra cho thằng app.vue
            
        }
    }
}

</script>
<style>

</style>