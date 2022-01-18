<demo>不同的size</demo>

<template>
  <Button size="big">大号按钮</Button>
  <Button>默认按钮</Button>
  <Button size="medium">中号按钮</Button>
  <Button size="small">小号按钮</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'

export default {
  components: {Button},
}
</script>