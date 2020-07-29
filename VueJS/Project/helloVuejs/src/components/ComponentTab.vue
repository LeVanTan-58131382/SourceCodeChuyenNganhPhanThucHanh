<template>
    <div class="comptab">
        <div class="tabtitle">
            <span>{{title}}</span>
            <ion-icon name="heart"></ion-icon>
        </div>
        <div class="tabcontent">
            <!-- div này sẽ chứa nội dung được lưu trữ bên DemoSlot.vue -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
 name: "comp-tab",
 props:{
     title: String
 },
 data(){
     return {

     }
 }

}
</script>

<style>
.tabtitle {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between; 
    border: 1px solid rgb(13, 49, 209);
}
.tab-header{
    margin: 5px;
    padding: 5px;
    display: flex;
    list-style-type: none;
}
.tab-header li{
    width: 100px;
    margin: 1px;
    padding: 10px 15px;
    background-color: aqua;
    transition: all .3s ease;
}
.tab-header li:hover{
    color: aqua;
    background-color: darkblue;
}
/* justify-content: space-between : cho 2 nội dung giãn ra 2 bên rìa  */
/* list-style-type: none : làm mất các kí hiệu kiểu danh sách của ul li */
</style>
