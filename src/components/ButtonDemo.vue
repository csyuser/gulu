<template>
  <section>
    <span>不同的theme：</span>
    <Button @mouseover="mouseover" @click="click" @focus="focus">普通按钮</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="text">文字按钮</Button>
    <Button theme="link">链接</Button>
  </section>
</template>

<script>
import Button from '../lib/Button.vue'

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup(){
    const mouseover = ()=>{
      console.log('mouseover')
    }
    const click = ()=>{
      console.log('click')
    }
    const focus = ()=>{
      console.log('focus')
    }
    return {mouseover,click,focus}
  }
}
</script>

<style scoped lang='scss'>

</style>