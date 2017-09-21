import Vue from 'vue'
import Router from 'vue-router'
import product from 'pages/product/product'
import flow from 'pages/flow/flow'
Vue.use(Router)
// const routes = [
//     {
//         // 生产
//         path: '/product',
//         name: 'product',
//         component: product
//     }
// ]

// const router = new Router({
//     routes,
//     linkActiveClass: 'active'
// });

// export default router


export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/product' //重定向解决默认的路由
    },
    {
      path: '/product',
      name:'product',
      component: product      
    },
    {
      path: '/flow',
      name:'flow',
      component: flow      
    }    
  ],
   linkActiveClass: 'active'
})
