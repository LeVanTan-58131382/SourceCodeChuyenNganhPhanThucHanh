<template>
    <div class="demoslot">
        <slot></slot>
        <ComponentTab title="Tiêu Đề Của Tab">
            <ul class="tab-header">
                <li v-for="(item, index) in tabheader"
                    v-on:click="setActiveTab(index)"
                    v-bind:key="index">{{item.text}}</li>
            </ul>
            <div class="tab-content tab1" v-if="tabActive === 0">
                <h1>Đây Là Phần Nội Dung Của Tab 1</h1>
            </div>
            <div class="tab-content tab2" v-if="tabActive === 1">
                <h1>Đây Là Phần Nội Dung Của Tab 2</h1>
            </div>
            <div class="tab-content tab3" v-if="tabActive === 2">
                <h1>Đây Là Phần Nội Dung Của Tab 3</h1>
            </div>
        </ComponentTab>
    </div>
</template>

<script>
import ComponentTab from "./ComponentTab.vue";
export default {
    name: "demo-slot",
    components: {
        ComponentTab,
    },
    data(){  
        return {
            tabheader: [
                {text: "Tab 1"},
                {text: "Tab 2"},
                {text: "Tab 3"}
            ],
            tabActive:0
        }
    },
    methods:{
        setActiveTab(index)
        {
            this.tabActive = index;
        }
    }
}
</script>

<style>
.demoslot{
    width: 50%;
    height: 500px;
    align-content: center;
    border: 2px solid #1fec18;
    margin: 20px;

}
</style>
