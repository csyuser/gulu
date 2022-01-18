<demo>不可用状态</demo>

<template>
  <Button disabled>普通按钮</Button>
  <Button level="primary" disabled>主要按钮</Button>
  <Button level="warn" disabled>警告按钮</Button>
  <Button theme="text" disabled>文字按钮</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'

export default {
  components: {Button},
}
</script>