import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import details from '@/components/details'
import shopping from '@/components/shopping'
import shouchang from '@/components/shouchang'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
     {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/shouchang',
      name: 'shouchang',
      component: shouchang
    },
  ]
})
