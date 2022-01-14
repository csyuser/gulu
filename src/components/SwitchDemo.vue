<template>
  <DocDemo title="正常状态">
    <template #example>
      <Switch v-model:value="value"></Switch>
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

export default {
  name: 'SwitchDemo',
  components: {Switch, DocDemo},
  setup() {
    const value = ref(true)
    const value2 = ref(false)
    const value3 = ref(false)
    return {value, value2, value3}
  }
}
</script>

<style scoped lang='scss'>
</style>