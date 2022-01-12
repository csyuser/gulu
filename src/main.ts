import {createApp} from 'vue';
import App from './App.vue';
import './lib/pipi.scss'
import './index.scss';
import {router} from './router';
import 'github-markDown-css'

const app = createApp(App);
app.use(router);
app.mount('#app');
