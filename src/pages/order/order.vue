<template>
    <div class="order" @click="orderClick">
        <common-head :headBg="headBg" :showBack="showBack">
            <div slot="input" class="input">
                <svg t="1571102571197" class="search-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4104" width="20" height="20"><path d="M435.1 796.8c-97.9 0-189.9-38.1-259.1-107.3-69.3-69.3-107.4-161.3-107.4-259.2 0-97.9 38.1-189.9 107.3-259.1 142.9-142.9 375.4-142.9 518.3 0 69.2 69.2 107.3 161.3 107.3 259.1 0 97.9-38.1 189.9-107.3 259.1C625 758.6 533 796.8 435.1 796.8z m0-687.1c-82.1 0-164.2 31.2-226.8 93.8-60.6 60.6-93.9 141.1-93.9 226.8 0 85.7 33.4 166.2 93.9 226.8 60.6 60.6 141.1 93.9 226.8 93.9s166.2-33.4 226.8-93.9c60.6-60.6 93.9-141.1 93.9-226.8 0-85.7-33.4-166.2-93.9-226.8-62.6-62.5-144.7-93.8-226.8-93.8z" fill="#333333" p-id="4105"></path><path d="M932.5 960.1c-5.9 0-11.7-2.2-16.2-6.7l-243-243c-8.9-8.9-8.9-23.4 0-32.4 8.9-8.9 23.4-8.9 32.4 0l243 243c8.9 8.9 8.9 23.4 0 32.4-4.5 4.4-10.3 6.7-16.2 6.7z" fill="#333333" p-id="4106"></path></svg>
                <input class="input-text" type="text" placeholder="请输入单号、商品或手机号">
            </div>
            <svg slot="right-icon" t="1571102495694" class="scan-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2469" width="20" height="20"><path d="M639 208.7h175.7v174H893V168.9c0-22-17.5-39.9-39.2-39.9H639v79.7zM208.2 208.7H382V129H168.1c-22.1 0-40.1 17.8-40.1 39.9v213.8h80.2v-174zM381.5 815.2H208.4V637.3h-79.9v217.8c0 22 17.9 39.9 39.9 39.9h213.1v-79.8zM814.9 638.8v175.8H638.5v78.9h215.7c21.7 0 39.3-17.7 39.3-39.4V638.8h-78.6zM97 468.9h830v79.9H97z" fill="#ffffff" p-id="2470"></path></svg>
        </common-head>
        <section class="main">
            <ul class="nav-list">
                <li class="nav-item">线下订单</li>
                <li class="nav-item">线上订单</li>
                <li class="nav-item">退货退款</li>
                <li class="nav-item" @click.prevent="selClick">筛选 <svg t="1571038840649" class="sel-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10991" width="20" height="20"><path d="M755.342 433.89L537.778 671.8a34.238 34.238 0 0 1-25.718 11.637A34.238 34.238 0 0 1 486.34 671.8L268.777 433.89c-10.621-11.218-13.903-27.568-8.414-42.009s18.737-24.525 34.133-25.897h434.949c15.455 1.313 28.761 11.337 34.251 25.838 5.55 14.5 2.268 30.79-8.354 42.068z" p-id="10992" fill="#707070"></path></svg></li>
            </ul>
            <aside class="nav-status-list" v-show="showNavStatus">
                <div class="nav-status">
                    <section class="nav">
                        <h2>下单日期</h2>
                        <div class="nav-select">
                            <div class="nav-select-item">全部</div>
                            <div class="nav-select-item">今日</div>
                            <div class="nav-select-item">昨日</div>
                            <div class="nav-select-item">自定义</div>
                        </div>
                    </section>
                    <section class="nav">
                        <h2>订单来源</h2>
                        <div class="nav-select">
                            <div class="nav-select-item">全部</div>
                            <div class="nav-select-item">云收银</div>
                            <div class="nav-select-item">脸蛋儿</div>
                        </div>
                    </section>
                    <section class="nav">
                        <h2>收银员</h2>
                        <div class="nav-select">
                            <div class="nav-select-item">收银员01</div>
                            <div class="nav-select-item">收银员02</div>
                            <div class="nav-select-item">收银员03</div>
                        </div>
                    </section>
                </div>
            </aside>

            <!-- 订单列表 -->
            <div class="order-list">
                <section class="order-item">
                    <div class="order-title">
                        <div class="order-num-time">
                            <div class="order-num">单号： no.<span>1003</span></div>
                            <div class="order-time">2019-10-12 08:47:24</div>
                        </div>
                        <div class="order-item-status">未付清</div>
                    </div>
                    <div class="order-info">
                        <div class="order-info-detail">
                            <div class="order-name">雪碧330ml (示例)</div>
                            <div>订单流水号：<span>201903020101</span></div>
                        </div>
                        <div class="order-cash">收银员: <span>Admin</span></div>
                    </div>
                    <div class="order-sum">共计<span>1</span>件商品，合计 ￥<span>2.50</span></div>
                </section>
                <section class="order-item">
                    <div class="order-title">
                        <div class="order-num-time">
                            <div class="order-num">单号： no.<span>1003</span></div>
                            <div class="order-time">2019-10-12 08:47:24</div>
                        </div>
                        <div class="order-item-status">未付清</div>
                    </div>
                    <div class="order-info">
                        <div class="order-info-detail">
                            <div class="order-name">雪碧330ml (示例)</div>
                            <div>订单流水号：<span>201903020101</span></div>
                        </div>
                        <div class="order-cash">收银员: <span>Admin</span></div>
                    </div>
                    <div class="order-sum">共计<span>1</span>件商品，合计 ￥<span>2.50</span></div>
                </section>
                <section class="order-item">
                    <div class="order-title">
                        <div class="order-num-time">
                            <div class="order-num">单号： no.<span>1003</span></div>
                            <div class="order-time">2019-10-12 08:47:24</div>
                        </div>
                        <div class="order-item-status">未付清</div>
                    </div>
                    <div class="order-info">
                        <div class="order-info-detail">
                            <div class="order-name">雪碧330ml (示例)</div>
                            <div>订单流水号：<span>201903020101</span></div>
                        </div>
                        <div class="order-cash">收银员: <span>Admin</span></div>
                    </div>
                    <div class="order-sum">共计<span>1</span>件商品，合计 ￥<span>2.50</span></div>
                </section>
            </div>
        </section>
    </div>
</template>
<script>
import CommonHead from '../../components/commonHead'
export default {
    data() {
        return {
            headBg:{
                background:'orange'
            },
            showBack:false,
            showNavStatus:false
        }
    },
    components:{
        CommonHead
    },
    methods:{
        selClick(e){
            e.stopPropagation();
            
            this.showNavStatus = !this.showNavStatus;
        },
        orderClick(){
            this.showNavStatus = false;
        }
    }
}
</script>
<style lang="scss" scoped>
    .order{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        min-height: 100vh;
        z-index: 99;
        background: #eee;
        font-size: .45rem;
    }
    .input{
        flex: 1;
        position: relative;
    }
    .input-text{
        width: 95%;
        height: .9rem;
        line-height: .9rem;
        border-radius: .1rem;
        border:1px solid #eee;
        padding-left: 1rem;
        box-sizing: border-box;
        font-size: .4rem;
    }
    .search-icon{
        position: absolute;
        top: .38rem;
        left: .35rem;
    }
    .scan-icon{
        width: .8rem;
        height: .8rem;
    }
    .main{
        width: 94%;
        min-height: 5rem;
        margin:1.5rem auto 0;
    }
    .nav-list{
        width: 100%;
        height: 1.3rem;
        line-height: 1.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
    }
    .nav-item{
        position: relative;
        &:last-child{
            width: 20%;
        }
        .sel-icon{
            position: absolute;
            right: .4rem;
            top: .32rem;
        }
    }
    .nav-status-list{
        width: 60%;
        overflow: hidden;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right:0;
        bottom:0;
        z-index: 101;
        background: #fff;
        box-shadow: 0 0 5px 5px #eee;
        
    }
    .nav-status{
        // width:24%;
        // height: .7rem;
        // line-height: .7rem;
        // color: #fff;
        // text-align: center;
        // margin-right: .2rem;
        // background: orange;
        // border-radius: .5rem;
        // font-size: .42rem;
        width: 100%;
        min-height: 5rem;

    }
    .nav-select{
        width: 100%;
        min-height: 3rem;
        display: flex;
        // justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        .nav-select-item{
            width: 40%;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            border:1px solid #ccc;
            border-radius: .15rem;
            margin:0 .15rem;
        }
    }
    .order-list{
        width: 100%;
        min-height: 4rem;
        margin-top: .3rem;
    }
    .order-item{
        width: 100%;
        min-height: 4rem;
        background: #fff;
        border-radius: .2rem;
        box-sizing: border-box;
        padding:.23rem;
        margin-bottom: .3rem;
        font-size: .42rem;
    }
    .order-title{
        width: 100%;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        .order-time{
            color: #ccc;
            font-size: .35rem;
            margin:.15rem 0;
        }
        .order-item-status{
            color:red;
            margin-right: .15rem;
        }
    }
    .order-info{
        width: 100%;
        min-height: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin:.25rem 0 .4rem;
        .order-info-detail{
            min-height: 1.5rem;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            // line-height: 1rem;
        }
        .order-cash{
            align-self: flex-end;
            font-size: .38rem;
        }
        
    }
    .order-sum{
        line-height: .8rem;
        text-align: right;
    }
</style>