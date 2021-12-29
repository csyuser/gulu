import {createApp, h} from 'vue';
import Dialog from './Dialog.vue';

export const openDialog = (options) => {
  const {title, content,footer} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true, title,
        'onUpdate:visible': (newVal) => {
          if (!newVal) {
            // @ts-ignore
            app.unmount(div);
            div.remove();
          }
        }
      }, {default:content,footer});
    }
  });
  app.mount(div)
};