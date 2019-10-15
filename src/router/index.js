import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import articleDis from '@/pages/articledis/articleDis'
import activity from '@/pages/activity/activity'
import addUser from '@/pages/addUser/addUser'
import order from '@/pages/order/order'
import addGoods from '@/pages/addGoods/addGoods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/articledis',
          component: articleDis
        },
        {
          path: '/activity',
          component: activity
        },
        {
          path: '/adduser',
          component: addUser
        },
        {
          path: '/order',
          component: order
        },
        {
          path: '/addgoods',
          component: addGoods
        }
      ]
    }
  ]
})
