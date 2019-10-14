<template>
    <div class="common-head">
        <span @click="$router.go(-1)">
            <svg t="1571022748644" class="back-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2861" width="20" height="20"><path d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z" fill="#2c2c2c" p-id="2862"></path></svg>
        </span>
        <h3>文章评价详情</h3>
        <span>
            <svg t="1571023054667" class="more-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3792" width="20" height="20"><path d="M512 863.361024m-109.441024 0a53.438 53.438 0 1 0 218.882048 0 53.438 53.438 0 1 0-218.882048 0Z" p-id="3793" fill="#2c2c2c"></path><path d="M512 517.761024m-109.441024 0a53.438 53.438 0 1 0 218.882048 0 53.438 53.438 0 1 0-218.882048 0Z" p-id="3794" fill="#2c2c2c"></path><path d="M512 160.641024m-109.441024 0a53.438 53.438 0 1 0 218.882048 0 53.438 53.438 0 1 0-218.882048 0Z" p-id="3795" fill="#2c2c2c"></path></svg>
        </span>
    </div>
</template>
<script>
export default {
    
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
    }
    .back-icon,.more-icon{
        width: .5rem;
        height: .5rem;
    }
</style>