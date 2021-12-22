<template>
  <section>
    <span>不同的theme：</span>
    <Button>普通按钮</Button>
    <Button>文字按钮</Button>
    <Button>链接</Button>
  </section>
</template>

<script>
import Button from '../lib/Button.vue'

export default {
  name: 'ButtonDemo',
  components: {Button},
}
</script>

<style scoped lang='scss'>

</style>