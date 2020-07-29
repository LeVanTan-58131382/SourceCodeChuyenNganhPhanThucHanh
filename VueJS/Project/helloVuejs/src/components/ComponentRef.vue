<template>
    <div class="ref">
        <H1>Demo Ref</H1>
        <p>Khi ta click vào button bên dưới nó sẽ kích hoạt sự kiện click của một input 
            có typt = file được ẩn đi, dùng ref, nhầm làm cho giao diện đẹp mắt hơn...</p>
        <button class="btnchon" v-on:click="handleClickFile">Chọn File</button>
        <input type="file" style="display:none" ref="referenceInputAvatar">
    </div>
</template>

<script>
export default {
    name: "demo-ref",
    methods:{
        handleClickFile(e){
            this.$refs.referenceInputAvatar.click();
        }
    }
}
</script>

<style>
.ref{
    width: 50%;
    height: 500px;
    align-content: center;
    border: 2px solid #c41a1a;
    margin: 20px;
}
.btnchon {
    width: 150px;
    height: 60px;
    color: aliceblue;
    padding: 10px;
    background-color: rgb(43, 40, 40);
    transition: all .3s ease;
}
.btnchon:hover{
    color: rgb(43, 40, 40);
    background-color: aliceblue;
}
</style>
