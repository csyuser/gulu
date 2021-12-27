<template>
  <Button level="primary" @click="toggle">点击显示dialog</Button>
  <Dialog v-model:visible="visible"></Dialog>
</template>

<script lang="ts">
import {ref} from 'vue'
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';

export default {
  name: 'DialogDemo',
  components: {Dialog,Button},
  setup(){
    const visible = ref(false)
    const toggle = ()=>{
      visible.value = !visible.value
    }
    return {visible,toggle}
  }
};
</script>

<style scoped lang='scss'>

</style>