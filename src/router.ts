import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
// @ts-ignore
import { h } from 'vue';
import Markdown from './components/Markdown.vue'


export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Home},
    {
      path: '/Doc', component: Doc, children: [
        {
          path: 'intro',
          name: 'Intro',
          component: h(Markdown, { path: `../markdown/intro.md`,key:'1'})
        },{
          path: 'get-start',
          name: 'GetStart',
          component: h(Markdown, { path: `../markdown/get-started.md`,key:'2'})
        },{
          path: 'install',
          name: 'Install',
          component: h(Markdown, { path: `../markdown/install.md`,key:'3'})
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
