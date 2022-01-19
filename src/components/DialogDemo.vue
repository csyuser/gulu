<template>
  <DocDemo :component="DialogNormal"/>
  <DocDemo :component="DialogNest">
    <template #description>
      <p>在需要打开嵌套的dialog时，在子dialog上使用<code>append-to-body</code>，一般不建议超过两个dialog</p>
      <p>可以用<code>close-on-click-overlay</code>定义是否需要点击遮罩关闭弹窗</p>
    </template>
  </DocDemo>
  <DocDemo :component="DialogShortcut">
    <template #description>
      <p>使用<code>openDialog</code>方法，实现一句话打开dialog</p>
    </template>
  </DocDemo>
</template>


<script lang="ts">
import DocDemo from './DocDemo.vue';
import DialogNormal from './dialog-demo/DialogNormal.vue';
import DialogNest from './dialog-demo/DialogNest.vue';
import DialogShortcut from './dialog-demo/DialogShortcut.vue';

export default {
  name: 'DialogDemo',
  components: {DocDemo},
  setup() {

    return {DialogNormal, DialogNest, DialogShortcut};
  }
};
</script>