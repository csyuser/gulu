<template>
  <section>
    <span>正常状态：</span>
    <Switch v-model:value="value"></Switch>
  </section>
  <br/>
  <section>
    <span>禁用状态：</span>
    <Switch v-model:value="value2" disabled></Switch>
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
    return {value, value2}
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