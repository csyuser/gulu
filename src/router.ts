import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Home},
    {
      path: '/Doc', component: Doc, children: [
        {
          path: '/intro',
          name: 'Intro',
          component: () => import('./views/doc/Intro.vue')
        },{
          path: '/get-start',
          name: 'GetStart',
          component: () => import('./views/doc/GetStart.vue')
        },{
          path: '/install',
          name: 'Install',
          component: () => import('./views/doc/Install.vue')
        }, {
          path: '/ButtonDemo',
          name: 'ButtonDemo',
          component: () => import('./components/ButtonDemo.vue')
        },{
          path: '/DialogDemo',
          name: 'DialogDemo',
          component: () => import('./components/DialogDemo.vue')
        },{
          path: '/SwitchDemo',
          name: 'SwitchDemo',
          component: () => import('./components/SwitchDemo.vue')
        },{
          path: '/TabsDemo',
          name: 'TabsDemo',
          component: () => import('./components/TabsDemo.vue')
        },
      ]
    }
  ]
});
