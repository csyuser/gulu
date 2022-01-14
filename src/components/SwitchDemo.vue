<template>
<!--  <DocDemo title="常规用法">-->
<!--    <template #example>-->
<!--      <Switch v-model:value="value"></Switch>-->
<!--    </template>-->
<!--    <template #code>-->
<!--      <Markdown path="../markdown/switch.md"></Markdown>-->
<!--    </template>-->
<!--  </DocDemo>-->
  <DocDemo title="常规用法">
    <template #example>
      <SwitchNormal></SwitchNormal>
    </template>
    <template #code>
      <pre>{{SwitchNormal['__sourceCode']}}</pre>
    </template>
  </DocDemo>
  <DocDemo title="禁用状态">
    <template #example>
      <Switch v-model:value="value2" disabled></Switch>
    </template>
  </DocDemo>
  <DocDemo title="自定义颜色">
    <template #example>
      <Switch v-model:value="value3" active-color="green" inactive-color="red"></Switch>
    </template>
  </DocDemo>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
import DocDemo from './DocDemo.vue'
import Markdown from './Markdown.vue'
import SwitchNormal from './switch-demo/SwitchNormal.vue'

export default {
  name: 'SwitchDemo',
  components: {Switch, DocDemo,Markdown,SwitchNormal},
  setup() {
    const value2 = ref(false)
    const value3 = ref(false)
    return {value2, value3,SwitchNormal}
  }
}
</script>

<style scoped lang='scss'>
</style>