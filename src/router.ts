import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import Test1 from './components/test1.vue'
import Test2 from './components/test2.vue'

export const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {path:'/',component:Home},
    {path:'/HelloWorld',component:HelloWorld,children:[
      {path:'/Test1',component:Test1,},
        {path:'/Test2',component:Test2}
      ]
    }
  ]
})
