<template>
    <div class="addgoods">
        <common-head :showBack="true" :headBg="headBg">
            <h3 class="head-title" slot="title">添加商品</h3>
            <div slot="right-icon">保存</div>
        </common-head>
        <section class="main">
            <!-- 商品信息 -->
            <section class="goods-info">
                <h2 class="goods-info-title">商品信息</h2>
                <table class="goods-info-table">
                    <tr>
                        <td class="goods-info-detail">商品分类</td>
                        <td class="goods-info-right blue">饮料</td>
                    </tr>
                    <tr>
                        <td class="goods-info-detail">条形码</td>
                        <td class="goods-info-right blue">
                            <svg slot="scan-icon" t="1571102495694" class="scan-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2469" width="20" height="20"><path d="M639 208.7h175.7v174H893V168.9c0-22-17.5-39.9-39.2-39.9H639v79.7zM208.2 208.7H382V129H168.1c-22.1 0-40.1 17.8-40.1 39.9v213.8h80.2v-174zM381.5 815.2H208.4V637.3h-79.9v217.8c0 22 17.9 39.9 39.9 39.9h213.1v-79.8zM814.9 638.8v175.8H638.5v78.9h215.7c21.7 0 39.3-17.7 39.3-39.4V638.8h-78.6zM97 468.9h830v79.9H97z" fill="#333333" p-id="2470"></path></svg>
                        </td>
                    </tr>
                    <tr>
                        <td class="goods-info-detail"><span class="red">*</span>商品名称</td>
                        <td class="goods-info-right ">
                            <input type="text" class="goods-info-input red" placeholder="请输入商品名称">
                        </td>
                    </tr>
                    <tr>
                        <td class="goods-info-detail"><span class="red">*</span>单价</td>
                        <td class="goods-info-right">
                            <input type="text" class="goods-info-input red" placeholder="请输入单价">
                        </td>
                    </tr>
                    <tr>
                        <td class="goods-info-detail">初期库存</td>
                        <td class="goods-info-right">
                            <input type="text" class="goods-info-input" placeholder="添加商品此处默认为0">
                        </td>
                    </tr>
                    <tr>
                        <td class="goods-info-detail">结账单位</td>
                        <td class="goods-info-right blue flex">
                            <input type="text" class="goods-info-input"><span> 件</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="goods-info-detail">允许打折</td>
                        <td class="goods-info-right">
                            <svg t="1571127392737" @click="discountIconClick" v-show="!discount" class="no-discount" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5333" width="20" height="20"><path d="M714.24 204.288l-404.48 0c-169.984 0-307.712 137.728-307.712 307.712S139.776 819.712 309.76 819.712L714.24 819.712C884.224 819.712 1021.952 681.984 1021.952 512S884.224 204.288 714.24 204.288z m0.512 586.24c-154.112 0-279.04-124.928-279.04-279.04s124.928-279.04 279.03999999-279.04 279.04 124.928 279.04000001 279.04-124.928 279.04-279.04 279.04z" p-id="5334"></path></svg>
                            <svg t="1571127352384" @click="discountIconClick" v-show="discount" class="discount" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4983" width="20" height="20"><path d="M2.24 511.876c0 169.952 137.77 307.727 307.724 307.727h404.235c169.955 0 307.724-137.775 307.724-307.727s-137.77-307.724-307.724-307.724H309.964C140.009 204.152 2.24 341.924 2.24 511.876z m28.105-0.647c0-154.236 125.03-279.267 279.269-279.268 154.23 0 279.264 125.03 279.264 279.267 0 154.24-125.035 279.269-279.263 279.269-154.238 0-279.269-125.031-279.269-279.269z" fill="#ffc43b" p-id="4984"></path></svg>
                        </td>
                    </tr>
                </table>
            </section>
            <!-- 商品规格 -->
            <section class="goods-standard">
                <h2 class="goods-standard-title">商品规格</h2>
                <div class="goods-standard-content">
                    <div>规格设置</div>
                    <div class="blue">未设置</div>
                </div>
            </section>
            <!-- 运费设置 -->
            <section class="goods-trans">
                <h2 class="goods-trans-title">运费设置</h2>
                <div class="goods-trans-content">
                    <div>运费模板</div>
                    <div class="">当前没有模板，点我添加</div>
                </div>
            </section>
            <!-- 同步设置 -->
            <section class="goods-tongbu">
                <h2 class="goods-tongbu-title">同步设置</h2>
                <div class="goods-tongbu-content">
                    <div>同步到商城</div>
                    <div class="">
                        <svg t="1571127392737" @click="tongbuIconClick" v-show="!tongbu" class="no-tongbu" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5333" width="20" height="20"><path d="M714.24 204.288l-404.48 0c-169.984 0-307.712 137.728-307.712 307.712S139.776 819.712 309.76 819.712L714.24 819.712C884.224 819.712 1021.952 681.984 1021.952 512S884.224 204.288 714.24 204.288z m0.512 586.24c-154.112 0-279.04-124.928-279.04-279.04s124.928-279.04 279.03999999-279.04 279.04 124.928 279.04000001 279.04-124.928 279.04-279.04 279.04z" p-id="5334"></path></svg>
                        <svg t="1571127352384" @click="tongbuIconClick" v-show="tongbu" class="tongbu" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4983" width="20" height="20"><path d="M2.24 511.876c0 169.952 137.77 307.727 307.724 307.727h404.235c169.955 0 307.724-137.775 307.724-307.727s-137.77-307.724-307.724-307.724H309.964C140.009 204.152 2.24 341.924 2.24 511.876z m28.105-0.647c0-154.236 125.03-279.267 279.269-279.268 154.23 0 279.264 125.03 279.264 279.267 0 154.24-125.035 279.269-279.263 279.269-154.238 0-279.269-125.031-279.269-279.269z" fill="#ffc43b" p-id="4984"></path></svg>
                    </div>
                </div>
            </section>
            <!-- 客户端商品展示设置 -->
            <section class="client-show-set">
                <h2 class="client-show-set-title">客户端商品展示设置</h2>
                <table class="client-show-set-table">
                    <tr>
                        <td class="client-show-set-left">会员价</td>
                        <td class="client-show-set-right">
                            <input type="number" class="client-show-set-input" placeholder="请输入会员价">
                        </td>
                    </tr>
                    <tr>
                        <td class="client-show-set-left">起卖数量</td>
                        <td class="client-show-set-right">
                            <input type="number" class="client-show-set-input" placeholder="请输入起卖数量">
                        </td>
                    </tr>
                    <tr>
                        <td class="client-show-set-left">最小累加单位</td>
                        <td class="client-show-set-right">
                            <input type="number" class="client-show-set-input" placeholder="请输入最小累加单位">
                        </td>
                    </tr>
                </table>
                <p class="client-show-set-tips">例如最小累加单位为2，顾客或收银员在选择此商品时，每次点击加号，数量都会增加2，以此类推</p>
            </section>
            <!-- 客户端商品详情基础设置 -->
            <section class="client-goods-base">
                <h2 class="client-goods-base-title">客户端商品详情基础设置</h2>
                <div class="base-set-section">
                    <div class="base-set-img-wrapper no-img">
                        <div class="img-nums">共<span>0</span>张，当前第<span>0</span>张</div>
                    </div>
                    <!-- 添加图片 -->
                    <div class="add-img">添加图片</div>
                    <p class="add-img-tips">最多可添加5张图片，建议图片尺寸为750*600px</p>
                    <textarea class="add-img-text" placeholder="添加商品介绍 【选填】"></textarea>
                </div>
            </section>
            <!-- 客户端商品详情高级设置 -->
            <section class="client-goods-high">
                <h2 class="client-goods-high-title">客户端商品详情高级设置</h2>
                <div class="client-goods-high-sec">
                    <p class="img-goods-title">(1) 商品页首图</p>
                    <div class="base-set-img-wrapper no-img">
                        <div class="img-nums">共<span>0</span>张，当前第<span>0</span>张</div>
                    </div>
                    <p class="img-goods-title">(2) 商品详情图</p>
                    <div class="base-set-img-wrapper no-img">
                        <div class="img-nums">共<span>0</span>张，当前第<span>0</span>张</div>
                    </div>
                    <p class="img-goods-title">(3) 商品页尾图</p>
                    <div class="base-set-img-wrapper no-img">
                        <div class="img-nums">共<span>0</span>张，当前第<span>0</span>张</div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</template>
<script>
import CommonHead from '../../components/commonHead'
export default {
    data() {
        return {
            headBg:{
                background:'#eee',
                color:'#000'
            },
            discount:false,
            tongbu:false
        }
    },
    components:{
        CommonHead
    },
    methods:{
        discountIconClick(){
            this.discount = !this.discount;
        },
        tongbuIconClick(){
            this.tongbu = !this.tongbu;
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '../../style/mixin';
    .addgoods{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        min-height: 100vh;
        background: #eee;
        z-index: 66;
        font-size: .45rem;
        .head-title{
            font-size: .47rem;
        }
    }
    .blue{
        color:blue;
    }
    .red{
        color:red;
    }
    .flex{
        display: flex;
    }
    .main{
        width: 94%;
        min-height: 10rem;
        margin:1.5rem auto 0;
    }
    .goods-info{
        @include goodsBox;
        padding-bottom: .6rem;
        .goods-info-title{
            @include h2Before;
        }
    }
    .goods-info-table{
        width: 90%;
        margin:0 auto;
        tr{
            border-bottom: 1px solid #ccc;
            line-height: 1.2rem;
            .goods-info-detail{
                width: 40%;
            }
            .goods-info-right{
                // width: 50%;
                text-align: right;
            }
            .goods-info-input{
                width: 100%;
                line-height: .75rem;
                border:0;
                outline: none;
                text-align: right;
                padding:0 .15rem;
                box-sizing: border-box;
            }
        }
        .scan-icon{
            display: block;
            float: right;
        }
        .no-discount,.discount{
            margin-bottom: -0.13rem;
        }
    }
    .goods-standard{
        @include goodsBox;
        .goods-standard-title{
            @include h2Before;
        }
    }
    .goods-standard-content{
        width: 90%;
        height: 1.2rem;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    .goods-trans{
        @include goodsBox;
        .goods-trans-title{
            @include h2Before;
        }
    }
    .goods-trans-content{
        width: 90%;
        height: 1.2rem;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    .goods-tongbu{
        @include goodsBox;
        .goods-tongbu-title{
            @include h2Before;
        }
    }
    .goods-tongbu-content{
        width: 90%;
        height: 1.2rem;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    .client-show-set{
        @include goodsBox;
        padding-bottom: .6rem;
        .client-show-set-title{
            @include h2Before;
        }
    }
    .client-show-set-table{
        width: 90%;
        margin:0 auto;
        tr{
            border-bottom: 1px solid #ccc;
            line-height: 1.2rem;
            .client-show-set-left{
                width: 40%;
            }
            .client-show-set-right{
                // width: 50%;
                text-align: right;
            }
            .client-show-set-input{
                width: 100%;
                line-height: .75rem;
                text-align: right;
                padding:0 .15rem;
                box-sizing: border-box;
            }
        }
    }
    .client-show-set-tips{
        width: 90%;
        margin:.15rem auto;
        font-size: .33rem;
        color: #333;
    }
    .client-goods-base{
        @include goodsBox;
        padding-bottom: .6rem;
        .client-goods-base-title{
            @include h2Before;
        }
    }
    .base-set-section{
        width: 90%;
        margin:0 auto;
    }
    .base-set-img-wrapper{
        width: 100%;
        height: 3rem;
        position: relative;
    }
    .no-img{
        background: #ccc;
    }
    .img-nums{
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #666;
        color: #fff;
        font-size: .32rem;
    }
    .add-img{
        width: 2.2rem;
        height: 2.2rem;
        font-size: .36rem;
        border:1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        margin:.3rem 0;
    }
    .add-img-tips{
        margin:.15rem auto;
        font-size: .33rem;
        color: #333;
    }
    .add-img-text{
        width: 100%;
        height: 2.5rem;
        font-size: .35rem;
        outline: none;
        padding:.15rem;
        border:1px solid #ccc;
        box-sizing: border-box;
    }
    .client-goods-high{
        @include goodsBox;
        padding-bottom: .6rem;
        .client-goods-high-title{
            @include h2Before;
        }
    }
    .client-goods-high-sec{
        width: 90%;
        margin:0 auto;
    }
    .img-goods-title{
        line-height: 1.3rem;
    }
</style>