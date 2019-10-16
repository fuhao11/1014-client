<template>
    <div class="apply">
        <common-head :showBack="true" :headBg="headBg">
            <h3 slot="title" class="head-title">刷脸支付开通申请表</h3>
            <span slot="right-icon"></span>
        </common-head>
        <section class="head-tip">
            <h1 class="head-tip-title">刷脸支付开通申请表</h1>
            <p class="head-tip-text">审核通过后，联系人会收到短信提醒，工作人员会添加微信协助签约，注意同意微信！</p>
        </section>
        <section class="main">
             <div class="z-acount">
                 <h3>支付宝账户<span class="red">*</span></h3>
                 <p class="item-tips">填写法人的收款支付宝账户，不同名会有收款限额，同名账户无限额</p>
                 <input type="text" class="input input-height">
             </div>
             <div class="z-acount">
                 <h3>所属行业<span class="red">*</span></h3>
                 <input type="text" class="input input-height">
             </div>
             <div class="z-acount">
                 <h3>签约费率<span class="red">*</span></h3>
                 <p class="item-tips">0.38%-0.6% (前期给大家统一申请最低费率0.38%)</p>
                 <input type="text" class="input input-height">
             </div>
             <div class="z-acount">
                 <h3>电子邮箱<span class="red">*</span></h3>
                 <p class="item-tips">用于接收审核结果和账号密码</p>
                 <input type="text" class="input input-height">
             </div>
             <div class="z-acount">
                 <h3>营业执照上传<span class="red">*</span></h3>
                 <div class="item-tips">
                     <p>要求营业执照清晰完整</p>
                     <p class="item-tips2">支持jpg，png，gif，bmp，psd，tiff等图片格式</p>
                 </div>
                 <input type="file" class="none">
                 <div class="upload-zz">
                     <svg t="1571215327809" class="up-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5666" width="50" height="50"><path d="M532.461 908.952H90.24c-16.395 0-28.702-12.013-28.702-28.06V97.099c0-16.016 12.307-28.03 28.702-28.03h783.632c16.373 0 28.681 12.014 28.681 28.03v423.654c0 16.005 12.329 28.02 28.746 28.02 16.394 0 28.702-12.015 28.702-28.02V69.07C960 37.03 931.298 9 898.464 9H61.536C28.723 9 0 37.03 0 69.07v839.882C0 940.962 28.723 969 61.536 969H532.46c16.395 0 28.703-12.035 28.703-28.039-0.001-20.016-12.31-32.01-28.703-32.01zM522.198 764c20.904-40.12 69.677-66.868 118.45-66.868h55.74v-60.18c0-53.494 34.84-100.301 83.612-120.36L710.324 316 466.457 616.893 396.78 509.905 139 764h383.198zM255.5 329c35.622 0 64.5-28.878 64.5-64.5S291.122 200 255.5 200 191 228.878 191 264.5s28.878 64.5 64.5 64.5zM896 777h127.5a0.5 0.5 0 0 1 0.5 0.5v63a0.5 0.5 0 0 1-0.5 0.5H896v127.5a0.5 0.5 0 0 1-0.5 0.5h-63a0.5 0.5 0 0 1-0.5-0.5V841H704.5a0.5 0.5 0 0 1-0.5-0.5v-63a0.5 0.5 0 0 1 0.5-0.5H832V649.5a0.5 0.5 0 0 1 0.5-0.5h63a0.5 0.5 0 0 1 0.5 0.5V777z" p-id="5667" fill="#8a8a8a"></path></svg>
                    <div class="upload-tips">点击选择图片(需小于500M)</div>
                 </div>
             </div>
             <div class="z-acount">
                 <h3>门头照片<span class="red">*</span></h3>
                 <div class="item-tips">
                     <p>需要像素清晰的拍摄门头照片</p>
                     <p class="item-tips2">支持jpg，png，gif，bmp，psd，tiff等图片格式</p>
                 </div>
                 <input type="file" class="none">
                 <div class="upload-zz">
                     <svg t="1571215327809" class="up-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5666" width="50" height="50"><path d="M532.461 908.952H90.24c-16.395 0-28.702-12.013-28.702-28.06V97.099c0-16.016 12.307-28.03 28.702-28.03h783.632c16.373 0 28.681 12.014 28.681 28.03v423.654c0 16.005 12.329 28.02 28.746 28.02 16.394 0 28.702-12.015 28.702-28.02V69.07C960 37.03 931.298 9 898.464 9H61.536C28.723 9 0 37.03 0 69.07v839.882C0 940.962 28.723 969 61.536 969H532.46c16.395 0 28.703-12.035 28.703-28.039-0.001-20.016-12.31-32.01-28.703-32.01zM522.198 764c20.904-40.12 69.677-66.868 118.45-66.868h55.74v-60.18c0-53.494 34.84-100.301 83.612-120.36L710.324 316 466.457 616.893 396.78 509.905 139 764h383.198zM255.5 329c35.622 0 64.5-28.878 64.5-64.5S291.122 200 255.5 200 191 228.878 191 264.5s28.878 64.5 64.5 64.5zM896 777h127.5a0.5 0.5 0 0 1 0.5 0.5v63a0.5 0.5 0 0 1-0.5 0.5H896v127.5a0.5 0.5 0 0 1-0.5 0.5h-63a0.5 0.5 0 0 1-0.5-0.5V841H704.5a0.5 0.5 0 0 1-0.5-0.5v-63a0.5 0.5 0 0 1 0.5-0.5H832V649.5a0.5 0.5 0 0 1 0.5-0.5h63a0.5 0.5 0 0 1 0.5 0.5V777z" p-id="5667" fill="#8a8a8a"></path></svg>
                    <div class="upload-tips">点击选择图片(需小于500M)</div>
                 </div>
             </div>
             <div class="z-acount">
                 <h3>经营许可证</h3>
                 <div class="item-tips">
                     <p>相关的经营许可证拍照上传</p>
                     <p class="item-tips2">支持jpg，png，gif，bmp，psd，tiff等图片格式</p>
                 </div>
                 <input type="file" class="none">
                 <div class="upload-zz">
                     <svg t="1571215327809" class="up-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5666" width="50" height="50"><path d="M532.461 908.952H90.24c-16.395 0-28.702-12.013-28.702-28.06V97.099c0-16.016 12.307-28.03 28.702-28.03h783.632c16.373 0 28.681 12.014 28.681 28.03v423.654c0 16.005 12.329 28.02 28.746 28.02 16.394 0 28.702-12.015 28.702-28.02V69.07C960 37.03 931.298 9 898.464 9H61.536C28.723 9 0 37.03 0 69.07v839.882C0 940.962 28.723 969 61.536 969H532.46c16.395 0 28.703-12.035 28.703-28.039-0.001-20.016-12.31-32.01-28.703-32.01zM522.198 764c20.904-40.12 69.677-66.868 118.45-66.868h55.74v-60.18c0-53.494 34.84-100.301 83.612-120.36L710.324 316 466.457 616.893 396.78 509.905 139 764h383.198zM255.5 329c35.622 0 64.5-28.878 64.5-64.5S291.122 200 255.5 200 191 228.878 191 264.5s28.878 64.5 64.5 64.5zM896 777h127.5a0.5 0.5 0 0 1 0.5 0.5v63a0.5 0.5 0 0 1-0.5 0.5H896v127.5a0.5 0.5 0 0 1-0.5 0.5h-63a0.5 0.5 0 0 1-0.5-0.5V841H704.5a0.5 0.5 0 0 1-0.5-0.5v-63a0.5 0.5 0 0 1 0.5-0.5H832V649.5a0.5 0.5 0 0 1 0.5-0.5h63a0.5 0.5 0 0 1 0.5 0.5V777z" p-id="5667" fill="#8a8a8a"></path></svg>
                    <div class="upload-tips">点击选择图片(需小于500M)</div>
                 </div>
             </div>
             <div class="z-acount">
                 <h3>法人身份证正面上传<span class="red">*</span></h3>
                 <div class="item-tips">
                     <p>相关的经营许可证拍照上传</p>
                     <p class="item-tips2">支持jpg，png，gif，bmp，psd，tiff等图片格式</p>
                 </div>
                 <input type="file" class="none">
                 <div class="upload-zz">
                     <svg t="1571215327809" class="up-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5666" width="50" height="50"><path d="M532.461 908.952H90.24c-16.395 0-28.702-12.013-28.702-28.06V97.099c0-16.016 12.307-28.03 28.702-28.03h783.632c16.373 0 28.681 12.014 28.681 28.03v423.654c0 16.005 12.329 28.02 28.746 28.02 16.394 0 28.702-12.015 28.702-28.02V69.07C960 37.03 931.298 9 898.464 9H61.536C28.723 9 0 37.03 0 69.07v839.882C0 940.962 28.723 969 61.536 969H532.46c16.395 0 28.703-12.035 28.703-28.039-0.001-20.016-12.31-32.01-28.703-32.01zM522.198 764c20.904-40.12 69.677-66.868 118.45-66.868h55.74v-60.18c0-53.494 34.84-100.301 83.612-120.36L710.324 316 466.457 616.893 396.78 509.905 139 764h383.198zM255.5 329c35.622 0 64.5-28.878 64.5-64.5S291.122 200 255.5 200 191 228.878 191 264.5s28.878 64.5 64.5 64.5zM896 777h127.5a0.5 0.5 0 0 1 0.5 0.5v63a0.5 0.5 0 0 1-0.5 0.5H896v127.5a0.5 0.5 0 0 1-0.5 0.5h-63a0.5 0.5 0 0 1-0.5-0.5V841H704.5a0.5 0.5 0 0 1-0.5-0.5v-63a0.5 0.5 0 0 1 0.5-0.5H832V649.5a0.5 0.5 0 0 1 0.5-0.5h63a0.5 0.5 0 0 1 0.5 0.5V777z" p-id="5667" fill="#8a8a8a"></path></svg>
                    <div class="upload-tips">点击选择图片(需小于500M)</div>
                 </div>
             </div>
             <div class="z-acount">
                 <h3>法人身份证反面上传<span class="red">*</span></h3>
                 <div class="item-tips">
                     <p>相关的经营许可证拍照上传</p>
                     <p class="item-tips2">支持jpg，png，gif，bmp，psd，tiff等图片格式</p>
                 </div>
                 <input type="file" class="none">
                 <div class="upload-zz">
                     <svg t="1571215327809" class="up-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5666" width="50" height="50"><path d="M532.461 908.952H90.24c-16.395 0-28.702-12.013-28.702-28.06V97.099c0-16.016 12.307-28.03 28.702-28.03h783.632c16.373 0 28.681 12.014 28.681 28.03v423.654c0 16.005 12.329 28.02 28.746 28.02 16.394 0 28.702-12.015 28.702-28.02V69.07C960 37.03 931.298 9 898.464 9H61.536C28.723 9 0 37.03 0 69.07v839.882C0 940.962 28.723 969 61.536 969H532.46c16.395 0 28.703-12.035 28.703-28.039-0.001-20.016-12.31-32.01-28.703-32.01zM522.198 764c20.904-40.12 69.677-66.868 118.45-66.868h55.74v-60.18c0-53.494 34.84-100.301 83.612-120.36L710.324 316 466.457 616.893 396.78 509.905 139 764h383.198zM255.5 329c35.622 0 64.5-28.878 64.5-64.5S291.122 200 255.5 200 191 228.878 191 264.5s28.878 64.5 64.5 64.5zM896 777h127.5a0.5 0.5 0 0 1 0.5 0.5v63a0.5 0.5 0 0 1-0.5 0.5H896v127.5a0.5 0.5 0 0 1-0.5 0.5h-63a0.5 0.5 0 0 1-0.5-0.5V841H704.5a0.5 0.5 0 0 1-0.5-0.5v-63a0.5 0.5 0 0 1 0.5-0.5H832V649.5a0.5 0.5 0 0 1 0.5-0.5h63a0.5 0.5 0 0 1 0.5 0.5V777z" p-id="5667" fill="#8a8a8a"></path></svg>
                    <div class="upload-tips">点击选择图片(需小于500M)</div>
                 </div>
             </div>
             <div class="z-acount">
                 <h3>结算账户信息<span class="red">*</span></h3>
                 <div class="item-tips">
                     <p>个体工商户允许填写法人银行卡，企业必须填对公账户</p>
                     <p class="item-tips2">支持jpg，png，gif，bmp，psd，tiff等图片格式</p>
                 </div>
                 <input type="file" class="none">
                 <div class="upload-zz">
                     <svg t="1571215327809" class="up-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5666" width="50" height="50"><path d="M532.461 908.952H90.24c-16.395 0-28.702-12.013-28.702-28.06V97.099c0-16.016 12.307-28.03 28.702-28.03h783.632c16.373 0 28.681 12.014 28.681 28.03v423.654c0 16.005 12.329 28.02 28.746 28.02 16.394 0 28.702-12.015 28.702-28.02V69.07C960 37.03 931.298 9 898.464 9H61.536C28.723 9 0 37.03 0 69.07v839.882C0 940.962 28.723 969 61.536 969H532.46c16.395 0 28.703-12.035 28.703-28.039-0.001-20.016-12.31-32.01-28.703-32.01zM522.198 764c20.904-40.12 69.677-66.868 118.45-66.868h55.74v-60.18c0-53.494 34.84-100.301 83.612-120.36L710.324 316 466.457 616.893 396.78 509.905 139 764h383.198zM255.5 329c35.622 0 64.5-28.878 64.5-64.5S291.122 200 255.5 200 191 228.878 191 264.5s28.878 64.5 64.5 64.5zM896 777h127.5a0.5 0.5 0 0 1 0.5 0.5v63a0.5 0.5 0 0 1-0.5 0.5H896v127.5a0.5 0.5 0 0 1-0.5 0.5h-63a0.5 0.5 0 0 1-0.5-0.5V841H704.5a0.5 0.5 0 0 1-0.5-0.5v-63a0.5 0.5 0 0 1 0.5-0.5H832V649.5a0.5 0.5 0 0 1 0.5-0.5h63a0.5 0.5 0 0 1 0.5 0.5V777z" p-id="5667" fill="#8a8a8a"></path></svg>
                    <div class="upload-tips">点击选择图片(需小于500M)</div>
                 </div>
             </div>
             <div class="z-acount">
                 <h3>联系人电话<span class="red">*</span></h3>
                 <input type="number" class="input input-height">
             </div>
             <div class="z-acount">
                 <h3>微信号界面截图<span class="red">*</span></h3>
                 <div class="item-tips">
                     <p>方便我们工作人员添加联系您，为您做后期服务</p>
                     <p class="item-tips2">支持jpg，png，gif，bmp，psd，tiff等图片格式</p>
                 </div>
                 <input type="file" class="none">
                 <div class="upload-zz">
                     <svg t="1571215327809" class="up-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5666" width="50" height="50"><path d="M532.461 908.952H90.24c-16.395 0-28.702-12.013-28.702-28.06V97.099c0-16.016 12.307-28.03 28.702-28.03h783.632c16.373 0 28.681 12.014 28.681 28.03v423.654c0 16.005 12.329 28.02 28.746 28.02 16.394 0 28.702-12.015 28.702-28.02V69.07C960 37.03 931.298 9 898.464 9H61.536C28.723 9 0 37.03 0 69.07v839.882C0 940.962 28.723 969 61.536 969H532.46c16.395 0 28.703-12.035 28.703-28.039-0.001-20.016-12.31-32.01-28.703-32.01zM522.198 764c20.904-40.12 69.677-66.868 118.45-66.868h55.74v-60.18c0-53.494 34.84-100.301 83.612-120.36L710.324 316 466.457 616.893 396.78 509.905 139 764h383.198zM255.5 329c35.622 0 64.5-28.878 64.5-64.5S291.122 200 255.5 200 191 228.878 191 264.5s28.878 64.5 64.5 64.5zM896 777h127.5a0.5 0.5 0 0 1 0.5 0.5v63a0.5 0.5 0 0 1-0.5 0.5H896v127.5a0.5 0.5 0 0 1-0.5 0.5h-63a0.5 0.5 0 0 1-0.5-0.5V841H704.5a0.5 0.5 0 0 1-0.5-0.5v-63a0.5 0.5 0 0 1 0.5-0.5H832V649.5a0.5 0.5 0 0 1 0.5-0.5h63a0.5 0.5 0 0 1 0.5 0.5V777z" p-id="5667" fill="#8a8a8a"></path></svg>
                    <div class="upload-tips">点击选择图片(需小于500M)</div>
                 </div>
             </div>

            <div class="recommond-title">推荐者信息</div>

            <div class="z-acount">
                 <h3>推荐者姓名<span class="red">*</span></h3>
                 <input type="number" class="input input-height">
             </div>
             <div class="z-acount">
                 <h3>隶属市场部<span class="red">*</span></h3>
                 <input type="number" class="input input-height">
             </div>

             <div class="submit">提交</div>
        </section>
    </div>
</template>
<script>
import CommonHead from '../../components/commonHead'
export default {
    data() {
        return {
            headBg:{
                background:'#fff',
                color:'#000'
            }
        }
    },
    components:{
        CommonHead
    }
}
</script>
<style lang="scss" scoped>
    .apply{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        min-height: 100vh;
        z-index: 99;
        background: #fff;
        font-size: .45rem;
    }
    .head-title{
        font-size: .47rem;
    }
    .head-tip{
        width:100%;
        height: 4.5rem;
        margin-top: 1.3rem;
        background: #05456f;
        // display: flex;
        // flex-flow: column nowrap;
        // justify-content: space-around;
        // align-items: center;
        color: #fff;
        .head-tip-title{
            font-size: .57rem;
            font-weight: 500;
            line-height: 1.8rem;
            text-align: center;
            padding-top: .3rem;
        }
        .head-tip-text{
            width: 90%;
            margin:0 auto;
            text-align: center;
            line-height: .7rem;
        }
    }
    .main{
        width: 94%;
        margin:0 auto;
        padding:.3rem 0;
        box-sizing: border-box;
        min-height: 6rem; 
    }
    .input{
        border:1px solid #ccc;
        display: block;
        padding:.05rem .2rem;
        box-sizing: border-box;
    }
    .none{
        display: none;
    }
    .red{
        color: red;
        margin-left: .25rem;
    }
    .z-acount{
        min-height: 1.5rem;
        margin-bottom: .45rem;
        h3{
            font-size: .47rem;
            font-weight: 600;
            line-height: 1rem;
        }
    }
    .item-tips{
        color: #a4a4a4;
        font-size: .37rem;
        
    }
    .item-tips2{
        font-size: .33rem;
        color: #c7c7c7;
        padding-left: .35rem;
    }
    .input-height{
        width: 100%;
        height: .85rem;
        line-height: .85rem;
        margin-top: .3rem;
    }
    .upload-zz{
        width: 3rem;
        height: 3.3rem;
        border:2px dashed #bbbbbb;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        align-items: center;
        font-size: .4rem;
        margin-top: .3rem;
    }
    .up-icon{
        width: 1.2rem;
        height: 1rem;
    }
    .upload-tips{
        width: 90%;
        text-align: center;
    }
    .recommond-title{
        text-align: center;
        color: #a4a4a4;
        line-height: 2rem;
    }

    .submit{
        width: 50%;
        background: #05456f;
        margin:1rem auto 1.3rem;
        line-height: 1rem;
        text-align: center;
        color: #fff;
    }
</style>