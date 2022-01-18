<demo>不同的theme</demo>

<template>
  <Button @mouseover="mouseover" @click="click" @focus="focus">普通按钮</Button>
  <Button theme="button">普通按钮</Button>
  <Button theme="text">文字按钮</Button>
  <Button theme="link">链接</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'

export default {
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