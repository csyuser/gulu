<template>
  <DocDemo :component="SwitchNormal"></DocDemo>
  <DocDemo>
    <template #example>
      <Switch v-model:value="value2" disabled></Switch>
    </template>
  </DocDemo>
  <DocDemo>
    <template #example>
      <Switch v-model:value="value3" active-color="green" inactive-color="red"></Switch>
    </template>
  </DocDemo>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
import DocDemo from './DocDemo.vue'
import Markdown from './Markdown.vue'
import SwitchNormal from './switch-demo/SwitchNormal.vue'


export default {
  name: 'SwitchDemo',
  components: {Switch, DocDemo,Markdown},
  setup() {
    const value2 = ref(false)
    const value3 = ref(false)
    return {value2, value3,SwitchNormal}
  }
}
</script>

<style scoped lang='scss'>
</style>