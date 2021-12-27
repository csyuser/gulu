<template>
  <Button level="primary" @click="toggle">点击显示dialog</Button>
  <Dialog v-model:visible="visible" :close-on-click-overlay="false">
    <p>你好</p>
    <p>这是一个dialog</p>
    <template #footer>
      <span class="pipi-dialog-footer">
        <Button @click="visible = false">取消</Button>
        <Button level="primary" @click="ok">确定</Button>
      </span>
    </template>
  </Dialog>
</template>


<script lang="ts">
import {ref} from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';

export default {
  name: 'DialogDemo',
  components: {Dialog, Button},
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = ()=>{
      console.log('ok')
      visible.value = false
    }
    return {visible, toggle,ok};
  }
};
</script>

<style scoped lang='scss'>

</style>