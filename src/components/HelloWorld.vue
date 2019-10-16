<template>
  <div class="hello">
    <router-link tag="div" to="/articledis">去评论</router-link>
    <router-link tag="div" to="/activity">去活动页</router-link>
    <router-link tag="div" to="/adduser">添加会员</router-link>
    <router-link tag="div" to="/order">去订单页</router-link>
    <router-link tag="div" to="/addgoods">添加商品</router-link>
    <router-link tag="div" to="/apply">刷脸支付开通申请表</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  display: flex;
  min-height: 6rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
