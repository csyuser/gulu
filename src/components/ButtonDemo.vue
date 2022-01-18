<template>
  <DocDemo :component="ButtonTheme">
    <template #description>
      <span>使用<code>button</code>，<code>text</code>，<code>link</code>定义不同类型的button。不传默认为：button</span>
    </template>
  </DocDemo>
  <DocDemo :component="ButtonSize">
    <template #description>
      <span>使用<code>big</code>，<code>medium</code>，<code>small</code>定义不同size的button。不传默认为：medium</span>
    </template>
  </DocDemo>
  <DocDemo :component="ButtonLevel">
    <template #description>
      <span>使用<code>primary</code>，<code>warn</code>，<code>danger</code>定义不同level的button。</span>
    </template>
  </DocDemo>
  <DocDemo :component="ButtonDisabled">
    <template #description>
      <span>使用<code>disabled</code>定义不可用按钮。</span>
    </template>
  </DocDemo>
  <DocDemo :component="ButtonLoading">
    <template #description>
      <span>使用<code>loading</code>定义加载中按钮。</span>
    </template>
  </DocDemo>
</template>

<script lang="ts">
import DocDemo from './DocDemo.vue'
import ButtonTheme from './button-demo/ButtonTheme.vue'
import ButtonSize from './button-demo/ButtonSize.vue'
import ButtonLevel from './button-demo/ButtonLevel.vue';
import ButtonDisabled from './button-demo/BUttonDisabled.vue';
import ButtonLoading from './button-demo/ButtonLoading.vue';

export default {
  name: 'ButtonDemo',
  components: {DocDemo},
  setup(){
    return {focus,ButtonTheme,ButtonSize,ButtonLevel,ButtonDisabled,ButtonLoading}
  }
}
</script>
