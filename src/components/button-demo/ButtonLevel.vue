<demo>不同的level</demo>

<template>
  <Button>普通按钮</Button>
  <Button level="primary">主要按钮</Button>
  <Button level="warn">警告按钮</Button>
  <Button level="danger">危险按钮</Button>
  <Button level="warn" theme="text">警告文字按钮</Button>
  <Button level="danger" theme="link">危险链接按钮</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'

export default {
  components: {Button},
}
</script>