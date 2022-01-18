<demo>自定义switch的颜色</demo>

<template>
  <Switch v-model:value="value" active-color="green" inactive-color="red"></Switch>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
import {ref} from 'vue'

export default {
  name: 'SwitchColor',
  components: {Switch},
  setup() {
    const value = ref(true)
    return {value}
  }
}
</script>