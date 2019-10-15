<template>
    <div class="add-user">
        <common-head :headBg="headBg" :showBack="true">
            <h3 class="head-title" slot="title">添加会员</h3>
            <div slot="right-icon">保存</div>
        </common-head>
        <section class="main">
            <section class="upload-section">
                <div class="up-img">
                    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2350171032,3227234175&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="up-text">上传我的脸蛋儿</div>
            </section>

            <section class="userinfo">
                <form action="" class="form">
                    <h2 class="form-title">会员信息</h2>
                    <section class="form-section">
                        <table class="form-table">
                            <tr>
                                <td class="form-left">手机号</td>
                                <td class="form-right"><input type="tel"></td>
                            </tr>
                            <tr>
                                <td class="form-left">姓名</td>
                                <td class="form-right"><input type="text"></td>
                            </tr>
                            <tr>
                                <td class="form-left">性别</td>
                                <td class="form-right"><input type="text"></td>
                            </tr>
                            <tr>
                                <td class="form-left">微信联系方式</td>
                                <td class="form-right"><input type="text"></td>
                            </tr>
                            <tr>
                                <td class="form-left">会员密码</td>
                                <td class="form-right"><input type="password"></td>
                            </tr>
                        </table>
                    </section>
                </form>
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
                background:'orange',
                color:'#fff'
            }
        }
    },
    components:{
        CommonHead
    }
}
</script>
<style lang="scss" scoped>
    .add-user{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        min-height: 100vh;
        background: #eee;
        z-index: 99;
        font-size: .45rem;
        .head-title{
            font-size: .47rem;
        }
    }
    .main{
        width: 94%;
        min-height: 5rem;
        margin:2.3rem auto 0;
    }
    .upload-section{
        width: 100%;
        min-height: 3rem;
        // margin-top: 1rem;
        // display: flex;
        // flex-flow: column nowrap;
        // justify-content: space-around;
        // align-items: center;
    }
    .up-img{
        width: 2.5rem;
        height: 2.5rem;
        margin:.5rem auto;
        img{
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
    }
    .up-text{
        width: 100%;
        text-align: center;
        color: #999;
        font-weight: 600;
        
    }
    .userinfo{
        width: 100%;
        min-height: 6rem;
        background: #fff;
        border-radius: .2rem;
        margin-top: .5rem;
    }
    .form{
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding:.5rem 0;
    }
    .form-title{
        padding-left: .5rem;
        line-height: .6rem;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            padding:.3rem .1rem;
            top:0;
            left:0;
            background: orange;
        }
    }
    .form-section{
        width: 90%;
        min-height: 5.5rem;
        margin:.5rem auto;
    }
    .form-table{
        width: 100%;
        color: gray;
        tr{
            line-height: 1.2rem;
            border-bottom: 1px solid #ccc;
        }
        .form-left{
            width: 20%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .form-right{
            width: 80%;
            text-align: right;
            input{
                width: 100%;
                text-align: right;
                box-sizing: border-box;
                padding:0 .15rem;
                border:none;
                outline: none;
            }
        }
    }
</style>