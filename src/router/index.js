import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu
    }
  ]
})
