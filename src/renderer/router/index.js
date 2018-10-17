import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: require('@/components/AboutUs/AboutUs').default
    },
    {
      path: '/get-here',
      name: 'get-here',
      component: require('@/views/GetHere').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
