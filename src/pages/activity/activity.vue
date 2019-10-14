<template>
    <div class="activity">
        <!-- banner -->
        <section class="banner">
            <swiper :options="swiperOption" ref="mySwiper" >
                <!-- slides -->
                <swiper-slide>
                    <img class="slide-img" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4105564734,2977816416&fm=26&gp=0.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img class="slide-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
        </section>
        <!-- 主体 -->
        <section class="main">
            <!-- 周边活动 -->
            <section class="around-activity">
                <div class="activity-title">
                    <h3>周边活动</h3>
                    <div class="more">更多 ></div>
                </div>
            </section>
            <section class="activity-list-wrapper">
                <section class="activity-list">
                    <dl class="activity-item">
                        <dt class="activity-img">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                        </dt>
                        <dd class="activity-info">
                            <div class="ac-proname">加厚磨毛纯棉三件套加厚磨毛纯棉三件套加厚磨毛纯棉三件套</div>
                            <div class="ac-proprice">
                                <span class="ac-nowprice">￥78.80</span>
                                <span class="ac-lastprice">￥128.00</span>
                            </div>
                        </dd>
                    </dl>
                    <dl class="activity-item">
                        <dt class="activity-img">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                        </dt>
                        <dd class="activity-info">
                            <div class="ac-proname">加厚磨毛纯棉三件套加厚磨毛纯棉三件套加厚磨毛纯棉三件套</div>
                            <div class="ac-proprice">
                                <span class="ac-nowprice">￥78.80</span>
                                <span class="ac-lastprice">￥128.00</span>
                            </div>
                        </dd>
                    </dl>
                    <dl class="activity-item">
                        <dt class="activity-img">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                        </dt>
                        <dd class="activity-info">
                            <div class="ac-proname">加厚磨毛纯棉三件套加厚磨毛纯棉三件套加厚磨毛纯棉三件套</div>
                            <div class="ac-proprice">
                                <span class="ac-nowprice">￥78.80</span>
                                <span class="ac-lastprice">￥128.00</span>
                            </div>
                        </dd>
                    </dl>
                    
                    
                </section>
            </section>
            <!-- 周边店铺 -->
            <section class="around-activity around-bus">
                <div class="activity-title">
                    <h3>周边店铺推荐</h3>
                </div>
            </section>
            <nav class="bus-recommend">
                <li class="nav-item">默认推荐</li>
                <li class="nav-item">距离最近</li>
                <li class="nav-item">优惠商家</li>
                <li class="nav-item">筛选 <svg t="1571038840649" class="sel-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10991" width="20" height="20"><path d="M755.342 433.89L537.778 671.8a34.238 34.238 0 0 1-25.718 11.637A34.238 34.238 0 0 1 486.34 671.8L268.777 433.89c-10.621-11.218-13.903-27.568-8.414-42.009s18.737-24.525 34.133-25.897h434.949c15.455 1.313 28.761 11.337 34.251 25.838 5.55 14.5 2.268 30.79-8.354 42.068z" p-id="10992" fill="#707070"></path></svg></li>
            </nav>
        </section>

        <!-- 展示区 实时更新 -->
        <section class="showSection">
            <section class="bus-list-item">
                <div class="bus-item-title">
                    <div>福运多超市</div>
                    <div class="distence">
                        <svg t="1571039429917" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13079" width="20" height="20"><path d="M850.722 556.172c63.06-81.542 111.487-150.719 111.487-228.966 0-127.148-106.782-230.165-238.676-230.165-131.896 0-238.721 103.059-238.721 230.165 0 70.245 41.539 137.328 95.787 209.843l-65.285 20.92-126.547-40.045c15.616-26.139 25.627-51.508 25.627-78.803 0-72.17-58.354-130.61-130.27-130.61-72.044 0-130.312 58.44-130.312 130.61 0 30.12 13.176 59.296 32.257 89.5l-0.556 0.086L7.5 926.959 276.466 825.48l244.752 101.479L750.997 825.48 1016.5 926.959 850.722 556.172zM723.573 215.374c64.005 0 115.939 50.056 115.939 111.833 0 61.734-51.98 111.83-115.939 111.83-64.042 0-115.85-50.096-115.85-111.83 0.001-61.777 51.808-111.833 115.85-111.833zM284.167 375.676c34.91 0 63.273 28.407 63.273 63.444 0 34.954-28.364 63.404-63.273 63.404-34.953 0-63.274-28.45-63.274-63.404 0-35.037 28.321-63.444 63.274-63.444z m462.21 389.484L521.09 862.742 280.958 765.16l-179.125 81.582 102.632-264.814 16.728-3.168c20.406 27.295 42.652 56.043 62.974 87.959 25.327-40.471 51.895-74.012 74.611-104.898l156.666 50.309 98.098-31.914c35.894 46.033 74.525 94.631 109.992 148.195 33.239-51.039 67.595-95.574 99.809-136.902L926.83 849.995 746.377 765.16z m0 0" p-id="13080" fill="#515151"></path></svg>
                        <span>2.1km</span>
                    </div>
                </div>
                <div class="bus-item-img-list">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="comed">999人来过</div>
                <div class="new-behav">
                    <span>最新动态：</span>
                    <span>店主分享了一张照片</span>
                </div>
            </section>
            <section class="bus-list-item">
                <div class="bus-item-title">
                    <div>福运多超市</div>
                    <div class="distence">
                        <svg t="1571039429917" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13079" width="20" height="20"><path d="M850.722 556.172c63.06-81.542 111.487-150.719 111.487-228.966 0-127.148-106.782-230.165-238.676-230.165-131.896 0-238.721 103.059-238.721 230.165 0 70.245 41.539 137.328 95.787 209.843l-65.285 20.92-126.547-40.045c15.616-26.139 25.627-51.508 25.627-78.803 0-72.17-58.354-130.61-130.27-130.61-72.044 0-130.312 58.44-130.312 130.61 0 30.12 13.176 59.296 32.257 89.5l-0.556 0.086L7.5 926.959 276.466 825.48l244.752 101.479L750.997 825.48 1016.5 926.959 850.722 556.172zM723.573 215.374c64.005 0 115.939 50.056 115.939 111.833 0 61.734-51.98 111.83-115.939 111.83-64.042 0-115.85-50.096-115.85-111.83 0.001-61.777 51.808-111.833 115.85-111.833zM284.167 375.676c34.91 0 63.273 28.407 63.273 63.444 0 34.954-28.364 63.404-63.273 63.404-34.953 0-63.274-28.45-63.274-63.404 0-35.037 28.321-63.444 63.274-63.444z m462.21 389.484L521.09 862.742 280.958 765.16l-179.125 81.582 102.632-264.814 16.728-3.168c20.406 27.295 42.652 56.043 62.974 87.959 25.327-40.471 51.895-74.012 74.611-104.898l156.666 50.309 98.098-31.914c35.894 46.033 74.525 94.631 109.992 148.195 33.239-51.039 67.595-95.574 99.809-136.902L926.83 849.995 746.377 765.16z m0 0" p-id="13080" fill="#515151"></path></svg>
                        <span>2.1km</span>
                    </div>
                </div>
                <div class="bus-item-img-list" v-show="false">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="comed">999人来过</div>
                <div class="new-behav" v-show="false">
                    <span>最新动态：</span>
                    <span>店主分享了一张照片</span>
                </div>
            </section>
            <section class="bus-list-item">
                <div class="bus-item-title">
                    <div>福运多超市</div>
                    <div class="distence">
                        <svg t="1571039429917" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13079" width="20" height="20"><path d="M850.722 556.172c63.06-81.542 111.487-150.719 111.487-228.966 0-127.148-106.782-230.165-238.676-230.165-131.896 0-238.721 103.059-238.721 230.165 0 70.245 41.539 137.328 95.787 209.843l-65.285 20.92-126.547-40.045c15.616-26.139 25.627-51.508 25.627-78.803 0-72.17-58.354-130.61-130.27-130.61-72.044 0-130.312 58.44-130.312 130.61 0 30.12 13.176 59.296 32.257 89.5l-0.556 0.086L7.5 926.959 276.466 825.48l244.752 101.479L750.997 825.48 1016.5 926.959 850.722 556.172zM723.573 215.374c64.005 0 115.939 50.056 115.939 111.833 0 61.734-51.98 111.83-115.939 111.83-64.042 0-115.85-50.096-115.85-111.83 0.001-61.777 51.808-111.833 115.85-111.833zM284.167 375.676c34.91 0 63.273 28.407 63.273 63.444 0 34.954-28.364 63.404-63.273 63.404-34.953 0-63.274-28.45-63.274-63.404 0-35.037 28.321-63.444 63.274-63.444z m462.21 389.484L521.09 862.742 280.958 765.16l-179.125 81.582 102.632-264.814 16.728-3.168c20.406 27.295 42.652 56.043 62.974 87.959 25.327-40.471 51.895-74.012 74.611-104.898l156.666 50.309 98.098-31.914c35.894 46.033 74.525 94.631 109.992 148.195 33.239-51.039 67.595-95.574 99.809-136.902L926.83 849.995 746.377 765.16z m0 0" p-id="13080" fill="#515151"></path></svg>
                        <span>2.1km</span>
                    </div>
                </div>
                <div class="bus-item-img-list">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                    <img class="bus-item-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3247749323,1379996244&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="comed">999人来过</div>
                <div class="new-behav" v-show="false">
                    <span>最新动态：</span>
                    <span>店主分享了一张照片</span>
                </div>
            </section>
        </section>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
export default {
    data() {
        return {
            swiperOption:{
                autoplay:1000,
                loop:true,
                pagination:'.swiper-pagination'
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    .banner /deep/ .swiper-container{
        width:100%;
        height: 0;
        padding-bottom: 35%;
        overflow: hidden;
    }
    .banner /deep/ .swiper-slide{
        width:100%;
    }
    .activity{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 66;
        background: #fff;
        font-size: .45rem;
    }
    .banner{
        width:94%;
        height:0;
        padding-bottom: 35%;
        margin:.5rem auto;
        overflow: hidden;
        .slide-img{
            width: 100%;
        }
    }
    .main{
        width: 94%;
        min-height: 5rem;
        height: auto;
        margin:0 auto;
    }
    .around-activity{
        .activity-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            h3{
                font-size: .45rem;
                position: relative;
                padding-left: .3rem;
                &::before{
                    content: '';
                    position:absolute;
                    top: .1rem;
                    left:0;
                    padding:.21rem .07rem;
                    background: orange;
                }
            }
            .more{
                font-size: .35rem;
            }
        }
        
    }
    .activity-list-wrapper{
        width: 100%;
        min-height: 3.5rem;
        overflow-x:scroll;
        margin-top: .2rem;
        &::-webkit-scrollbar{
            width: 0;
            height: 0;
            background: transparent;
        }
    }
    .activity-list{
        width: 120%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .activity-item{
        width: 3rem;
        min-height: 3.8rem;
        font-size: .36rem;
        .activity-img{
            width: 100%;
            height: 3rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: .2rem;
            }
        }
        .activity-info{
            
            .ac-proname{
                margin: .15rem 0;
                overflow: hidden;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp:2
            }
            .ac-proprice{
                .ac-nowprice{
                    color: red;
                }
                .ac-lastprice{
                    color:#ccc;
                    font-size: .33rem;
                    text-decoration: line-through;
                    font-weight: 600;
                }
            }
        }
    }
    .around-bus{
        margin: .6rem 0;
    }
    .bus-recommend{
        height: 1rem;
        display: flex;
        justify-content: space-between;
        .nav-item{
            flex: 1;
            text-align: center;
            line-height: 1rem;
            position: relative;
            .sel-icon{
                position: absolute;
                top: .18rem;
            }
        }
    }
    .showSection{
        width: 100%;
        min-height: 5rem;
        background: #eee;
        padding:.3rem;
        box-sizing: border-box;
    }
    .bus-list-item{
        background: #fff;
        min-height: 3rem;
        border-radius: .2rem;
        padding:.3rem;
        box-sizing: border-box;
        margin-bottom: .2rem;
        font-size: .35rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .bus-item-title{
            display: flex;
            justify-content: space-between;
        }
        .distence{
            display: flex;
            align-items: center;
            span{
                margin-left: .15rem;
            }
        }
    }
    .bus-item-img-list{
        width: 100%;
        height: 1.8rem;
        margin:.2rem 0;
        overflow: hidden;
    }
    .bus-item-img{
        display: inline-block;
        width: 1.8rem;
        height: 1.8rem;
        margin-right: .3rem;
    }
    .new-behav{
        width:100%;
        height: 1rem;
        line-height: 1rem;
        background: #eee;
        color: blue;
        padding:0 .2rem;
        margin-top: .15rem;
        box-sizing: border-box;
    }
</style>