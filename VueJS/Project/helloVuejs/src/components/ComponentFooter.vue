<template>
<div class="footer">
    <header><h1>{{title}}</h1></header>
</div>
</template>
<script>
export default {
    name: 'comp-footer',
    props:{
        title: String
    },
    data(){
        return {
            text: 'Đây là Footer!!!'
        }
    }
}
</script>
<style>
.footer {
    align-content: center;
    float:none;
}
</style>