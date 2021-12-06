<template>
  <Switch :value="value" @input="value = $event"></Switch>
</template>

<script>
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup(){
    const value = ref(false)
    return {value}
  }
}
</script>

<style scoped lang='scss'>

</style>