<template>
  <section>
    <span>不同的theme：</span>
    <Button @mouseover="mouseover" @click="click" @focus="focus">普通按钮</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="text">文字按钮</Button>
    <Button theme="link">链接</Button>
  </section>
  <section>
    <span>不同的size：</span>
    <Button size="big">大号按钮</Button>
    <Button>默认按钮</Button>
    <Button size="medium">中号按钮</Button>
    <Button size="small">小号按钮</Button>
  </section>
  <section>
    <span>不同的level：</span>
    <Button>普通按钮</Button>
    <Button level="primary">主要按钮</Button>
    <Button level="warn">警告按钮</Button>
    <Button level="danger">危险按钮</Button>
    <Button level="warn" theme="text">警告文字按钮</Button>
    <Button level="danger" theme="link">危险链接按钮</Button>
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
section {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>