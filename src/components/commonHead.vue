<template>
    <div class="common-head" :style="headBg">
        <!-- <span @click="$router.go(-1)"> -->
            <svg t="1571022748644" v-if="showBack" @click.prevent="$router.go(-1)" class="back-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2861" width="20" height="20"><path d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z" :fill="headBg.color" p-id="2862"></path></svg>
        <!-- </span> -->
        <!-- <h3>文章评价详情</h3> -->
        <slot name="title"></slot>
        <slot name="input"></slot>
        <!-- <span> -->
            <slot name="right-icon"></slot>
            <!--  -->
        <!-- </span> -->
    </div>
</template>
<script>
export default {
    props:{
        headBg:Object,
        showBack:Boolean
    }
}
</script>
<style lang="scss" scoped>
    .common-head{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 1.3rem;
        line-height: 1.3rem;
        background: #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .3rem;
        z-index: 100;
    }
    .back-icon,.more-icon{
        width: .5rem;
        height: .5rem;
    }
</style>