<template>
    <div class="article">
        <common-head></common-head>
        <section class="main">
            <!-- 店铺 -->
            <section class="business">
                <section class="bus-title">
                    <div class="bus-logo-wrapper">
                        <img class="bus-logo" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2350171032,3227234175&fm=26&gp=0.jpg" alt="">
                    </div>
                    
                    <div class="bus-name">
                        <div class="bus-name-top">
                            <span>botao的店铺</span>
                            <span class="bus-name-tip">线上</span>
                        </div>
                        <div class="bus-time">2周前</div>
                    </div>
                    <div class="follow">关注</div>
                </section>
                <section class="news">
                    <h3>【新闻快讯】</h3>
                    <p class="news-content">请问加快速度付款啦阿里是空间的阿里是空间的现在此前为其哦哦；阿里斯顿阿斯利康将会大幅ask今年的客机前往卡视角活动期萨克觉得很难琼无啊开收据好的亲我卡数量单价农委那些才睡觉都期望！拉萨绝地枪王蛮开心了就</p>
                    <img class="news-img" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2350171032,3227234175&fm=26&gp=0.jpg" alt="">
                </section>
            </section>

            <!-- 其他店铺 -->
            <section class="other-bus">
                <section class="other-bus-wrapper">
                    <img class="other-bus-logo" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2350171032,3227234175&fm=26&gp=0.jpg" alt="">
                    <div class="other-bus-name">
                        <div>botao的店铺</div>
                        <div>其他 | 8.45km</div>
                    </div>
                    <div class="goOther">
                        <svg t="1571022748644" class="back-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2861" width="20" height="20"><path d="M766.862 1021.724c-10.24 0-20.594-3.64-28.444-10.922L228.693 538.396c-15.701-14.563-15.701-38.229 0-52.792L738.418 13.198c15.701-14.563 41.187-14.563 56.889 0 15.701 14.564 15.701 38.23 0 52.793L314.027 512l481.28 446.009c15.701 14.563 15.701 38.23 0 52.793-7.851 7.282-18.205 10.922-28.445 10.922z" fill="#2c2c2c" p-id="2862"></path></svg>
                    </div>
                </section>
            </section>
            <section class="allDis">
                <div class="allDis-title">全部评论 <span>(0)</span></div>
            </section>
        </section>
        <foot-dis></foot-dis>
    </div>
</template>
<script>
import commonHead from '../../components/commonHead'
import footDis from '../../components/footDis'
export default {
    components:{
        commonHead,
        footDis
    }
}
</script>
<style lang="scss" scoped>
    @import '../../style/mixin';
    .article{
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        z-index: 9;
        background: $bgColor;
        padding-bottom: 4.5rem;
    }
    .main{
        width: 94%;
        height: auto;
        margin:0 auto;
        margin-top: 1.3rem;
    }
    .business{
        min-height: 5rem;
        height: auto;
        background: #fff;
        box-sizing: border-box;
        border-radius: .2rem;
        padding:.3rem .3rem;
        .bus-title{
            height: 2rem;
            display: flex;
            // justify-content: space-between;
            align-items: center;
        }
        .bus-name{
            width: 50%;
            height: 1.7rem;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-around;
            align-items: flex-start;
            padding-left: .3rem;
            box-sizing: border-box;
        }
        .bus-name-tip{
            padding:0 .1rem;
            background: burlywood;
            color: #fff;
            border-radius: .08rem;
            margin-left: .2rem;
        }
        .bus-logo-wrapper{
            width: 1.8rem;
            height: 1.8rem;
            .bus-logo{
                width: 100%;
                height: 100%;
                border-radius: 100%;
            }
        }
        
        .follow{
            width: 2.3rem;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            background: burlywood;
            color: #fff;
            border-radius: .2rem;
            margin-right: .3rem;
        }
        .news{
            width: 90%;
            margin:.5rem auto 0;
        }
        .news-content{
            line-height: .67rem;
            font-weight: 600;
            margin-top: .3rem;
            margin-bottom: .35rem;
        }
        .news-img{
            width: 60%;
        }
    }
    .other-bus{
        min-height: 2.5rem;
        height: auto;
        margin-top: .5rem;
        background: #fff;
        box-sizing: border-box;
        border-radius: .2rem;
        padding:.3rem .3rem;
        .other-bus-wrapper{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .other-bus-logo{
            width: 1.8rem;
            height: 1.8rem;
        }
        .other-bus-name{
            width: 72%;
            height: 1.8rem;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-around;
            align-items: flex-start;
            padding-left: .3rem;
            box-sizing: border-box;
            
        }
        .goOther{
            transform: rotateY(180deg)
        }
    }
    .allDis{
        min-height: 1.5rem;
        margin-top: .35rem;
        padding:0 .4rem;
        box-sizing: border-box;
        background: #fff;
        border-radius: .2rem;
        .allDis-title{
            line-height: 1.5rem;
        }
    }
</style>