<template>
  <section>
    <span>正常状态：</span>
    <Switch v-model:value="value"></Switch>
  </section>
  <section>
    <span>禁用状态：</span>
    <Switch v-model:value="value2" disabled></Switch>
  </section>
  <section>
    <span>自定义颜色：</span>
    <Switch v-model:value="value3" active-color="green" inactive-color="red"></Switch>
  </section>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const value = ref(true)
    const value2 = ref(false)
    const value3 = ref(false)
    return {value, value2,value3}
  }
}
</script>

<style scoped lang='scss'>
section {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>