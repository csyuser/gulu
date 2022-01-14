```vue
<template>
      <Switch v-model:value="value"></Switch>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const value = ref(true)
    return {value}
  }
}
</script>

<style scoped lang='scss'>
</style>
```