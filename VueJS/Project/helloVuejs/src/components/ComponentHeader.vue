<template>
    <header>
        <h1>{{title}}</h1>
        <button v-on:click="changeTitle">Thay đổi title từ CompHeader.vue</button>
    </header>

</template>
<script>
export default {
    name: 'comp-header',
    data(){
        return {
            text: 'Đây là Header !!!'
        }
    },
    props:{
        title: String
    },
    methods: {
        changeTitle(e) {
            //Event up
            // Không được phép thay đổi trực tiếp props từ component cha
            // -> Truyền sự kiện thông báo ra bên ngoài
            // -> Kích hoạt sự kiện changeTitleEvent() trong ComponentHeader.vue
            // -> Khi kích hoạt thì function bên ngoài App.vue nó sẽ chạy
            // -> Khi function đó được chạy -> Thay đổi dữ liệu
            // Cú pháp như sau:
            console.log("Trước khi kích hoạt sự kiện changeTitleEvent trong ComponentHeader.vue");
            this.$emit('changeTitleEvent');
            console.log("Sau khi kích hoạt sự kiện changeTitleEvent trong ComponentHeader.vue");
        }
    }
}
</script>
<style>

</style>