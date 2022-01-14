import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
// @ts-ignore
import { h } from 'vue';
import Markdown from './components/Markdown.vue'

const getMd = (fileName)=> h(Markdown, { path: `../markdown/${fileName}.md`,key:fileName})


export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Home},
    {
      path: '/Doc', component: Doc, redirect:{name:'Intro'}, children: [
        {
          path: 'intro',
          name: 'Intro',
          component: getMd('intro')
        },{
          path: 'get-started',
          name: 'GetStarted',
          component: getMd('get-started')
        },{
          path: 'install',
          name: 'Install',
          component: getMd('install')
        }, {
          path: 'button-demo',
          name: 'ButtonDemo',
          component: () => import('./components/ButtonDemo.vue')
        },{
          path: 'dialog-demo',
          name: 'DialogDemo',
          component: () => import('./components/DialogDemo.vue')
        },{
          path: 'switch-demo',
          name: 'SwitchDemo',
          component: () => import('./components/SwitchDemo.vue')
        },{
          path: 'tabs-demo',
          name: 'TabsDemo',
          component: () => import('./components/TabsDemo.vue')
        },
      ]
    }
  ]
});
