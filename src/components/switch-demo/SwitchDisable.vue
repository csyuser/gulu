<demo>不可用状态</demo>

<template>
  <Switch v-model:value="value" disabled></Switch>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue'
import {ref} from 'vue'

export default {
  name: 'SwitchDisable',
  components: {Switch},
  setup() {
    const value = ref(true)
    return {value}
  }
}
</script>