import { createWebHashHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

export const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {path:'/',component:Home},
    {path:'/Doc',component:Doc,
    }
  ]
})
