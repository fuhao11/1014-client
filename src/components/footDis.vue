<template>
    <div class="foot-dis" :style="{bottom : dHeight + 'px'}">
        <div class="foot-input">
            <input type="text" class="input" placeholder="说点什么吧" ref="Input" @focus="inputFoucs" @blur="inputBlur">
        </div>
        <div class="foot-right" v-show="!showPublish">
            <svg t="1571032548969" class="zan-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8119" width="20" height="20"><path d="M705.403848 64.46829c-76.854389 0-148.311861 38.554084-195.34506 102.123912-47.007617-63.587224-118.448716-102.123912-195.344037-102.123912-138.54031 0-251.251348 123.228579-251.251348 274.711665 0 90.369194 40.368406 153.767106 72.820516 204.702172 94.311992 147.95268 331.443761 332.071048 341.487511 339.834872 9.676383 7.479345 20.989033 11.222599 32.275077 11.222599 11.31265 0 22.607904-3.744277 32.270984-11.222599 10.057053-7.763824 247.205195-191.882192 341.488535-339.834872 32.466436-50.939159 72.849168-114.332978 72.849168-204.702172C956.655196 187.69687 843.939041 64.46829 705.403848 64.46829L705.403848 64.46829zM837.929164 508.917802c-89.77056 140.875494-327.883679 324.878229-327.883679 324.878229s-238.086513-184.002734-327.887772-324.878229c-33.120328-52.005444-62.774719-101.438297-62.774719-169.736822 0-117.939109 87.443561-213.58447 195.331757-213.58447 79.730902 0 148.175761 52.308343 178.538279 127.194914l0-0.37146 0.080841 0c2.26253 7.806803 8.857738 13.501502 16.711614 13.501502 7.880481 0 14.474666-5.694699 16.720823-13.501502l0.230244 0c30.435173-74.66349 98.785887-126.823454 178.406273-126.823454 107.86159 0 195.331757 95.64536 195.331757 213.58447C900.734582 407.479505 871.075075 456.911334 837.929164 508.917802L837.929164 508.917802zM837.929164 508.917802" p-id="8120" fill="#515151"></path></svg>
            <svg t="1571032619199" class="share-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10172" width="20" height="20"><path d="M5.064 94.782V20.443H499.66c17.302 0 31.352 16.615 31.352 37.207 0 20.517-14.05 37.132-31.352 37.132H5.064M1008.64 1024H934.3V529.405c0-17.303 16.616-31.353 37.207-31.353 20.518 0 37.133 14.05 37.133 31.353V1024m0-1003.557h-62.668 62.668z m0 62.686V20.443 83.13z m-1003.576 0V20.443h62.687H5.064V83.13z m0 940.871v-62.668V1024z m62.687 0H5.064h62.687z m940.889 0h-62.668 62.668z m0 0v-62.668V1024zM934.3 20.443h74.34v263.439c0 17.302-16.615 31.37-37.133 31.37-20.61 0-37.206-14.068-37.206-31.37V20.443m-207.908 74.34c-17.34 0-31.37-16.616-31.37-37.133 0-20.573 14.03-37.207 31.37-37.207h282.228v74.34H726.393M79.403 1024H5.064V20.443h74.34V1024z m929.237-74.339V1024H5.064v-74.339H1008.64zM947.942 28.565c12.21-12.266 33.936-10.426 48.432 4.107 14.552 14.477 16.392 36.222 4.107 48.432l-712.055 712.11c-12.266 12.323-33.955 10.483-48.506-4.125-14.534-14.459-16.374-36.222-4.108-48.395l712.13-712.13" p-id="10173"></path></svg>
        </div>
        <div class="foot-right" v-show="showPublish">
            <span class="publish">发表</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            wHeight:0,
            dHeight:0,
            showPublish:false,
            timer:null
        }
    },
    methods:{
        inputFoucs(){
            var _this = this;
            console.log('input获取焦点了')
            _this.showPublish = true;
            // _this.$refs.Input.scrollIntoView() QQ浏览器有效 自带浏览器无效

            // setTimeout(() => {
            //     let cHeight = document.documentElement.clientHeight
            //     _this.dHeight = _this.wHeight - cHeight
            //     console.log(_this.dHeight)
            // },100)

            // _this.timer = setTimeout(() => {
            //     document.body.scrollTop = document.body.scrollHeight
            // },100)
        },
        inputBlur(){
            var _this = this;
            _this.showPublish = false;
            // window.scrollTo(500,500)
            window.scrollTo(0, document.documentElement.clientHeight);
            // clearInterval(_this.timer)
            // console.log('input失去焦点了')
            // setTimeout(() => {
            //     _this.dHeight = 0
            // },100)
        },
        wResize(){
            let cHeight = document.documentElement.clientHeight
            
            setTimeout(() => {
                // this.dHeight = this.wHeight - cHeight + 44
                // alert(window.innerHeight)
            },1000)
            // setTimeout(() => {
            //     document.activeElement.scrollIntoViewIfNeeded();
            // },100)
        }
    },
    mounted(){
        var _this = this;
        _this.wHeight = document.documentElement.clientHeight
        // alert(window.innerHeight)
        // window.addEventListener('resize', _this.wResize) ios8-11获取焦点不触发resize
        
    }
}
</script>
<style lang="scss" scoped>
    .foot-dis{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1rem;
        background: #eee;
        padding:.3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
    .foot-input{
        width: 75%;
        .input{
            width: 100%;
            height: .95rem;
            padding:0 .2rem;
            border:0;
            outline: none;
        }
    }
    .foot-right{
        width: 17%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .zan-icon,.share-icon{
            width: .52rem;
            height: .52rem;
        }
        .publish{
            display: inline-block;
            width: 95%;
            height: .7rem;
            line-height: .7rem;
            text-align: center;
            background: burlywood;
            border-radius: .2rem;
            color: #fff;
        }
    }
    .static{
        position: static;
        width: 100%;
        height: 1rem;
        box-sizing: border-box;
        background: #eee;
        padding:.3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>