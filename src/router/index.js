import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import menu from '@/components/menu'
import bill from '@/components/bill'
import recipe from '@/components/recipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: home
    },
    {
      path: '/bill',
      name: 'bill',
      component: bill
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/recipe',
      name: 'recipe',
      component: recipe
    }
  ]
})
