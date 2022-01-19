<template>
  <DocDemo :component="TabNormal"/>
</template>

<script>
import DocDemo from './DocDemo.vue'
import TabNormal from './tab-demo/TabNormal.vue'

export default {
  name: 'TabsDemo',
  components:{DocDemo},
  setup(){
    return {TabNormal}
  },
}
</script>