<template>
    <div id="user-detail" class="col-md-12">
        <h1>INFORMATION USER DETAIL</h1>
        <p>My name {{customName}}</p>
    </div>
</template>

<script>
export default {
    props: ["customName"], // biến name từ component cha User truyền sang
    // Hoặc chúng ta có thể sử dụng theo cú pháp này

    prop: {
        customName2 : {
            type: Object,
            required: true // bắt buộc phải truyền dữ liệu bên file User.vue chỗ :customName = "name"
            // hoặc default: "Lê Văn Tân"
        }
    }
}
// props dùng để truyền dữ liệu từ cha sang con và các components con truyền thông báo đến các component cha thông qua các sự kiện
</script>

<style>
#user-detail {
    background-color: blueviolet;
    height: 400px;
    border: 2px solid #0000;
}
</style>
