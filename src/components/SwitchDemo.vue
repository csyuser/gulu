<template>
  <DocDemo :component="SwitchNormal"></DocDemo>
  <DocDemo :component="SwitchDisable">
    <template #description>
      <span>使用<code>disable</code>实现不可用状态</span>
    </template>
  </DocDemo>
  <DocDemo :component="SwitchColor">
    <template #description>
      <span>可以使用 <code>active-color</code> 属性与 <code>inactive-color</code> 属性来设置开关的背景色</span>
    </template>
  </DocDemo>
</template>

<script lang="ts">
import DocDemo from './DocDemo.vue';
import SwitchNormal from './switch-demo/SwitchNormal.vue';
import SwitchDisable from './switch-demo/SwitchDisable.vue';
import SwitchColor from './switch-demo/SwitchColor.vue';


export default {
  name: 'SwitchDemo',
  components: {DocDemo},
  setup() {
    return {SwitchNormal, SwitchDisable, SwitchColor};
  }
};
</script>

<style scoped lang='scss'>
</style>