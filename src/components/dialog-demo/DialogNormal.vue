<demo>基本用法</demo>

<template>
  <Button level="primary" @click="toggle">点击显示dialog</Button>
  <Dialog v-model:visible="visible" :close-on-click-overlay="false" title="名字自己起" width="300px" top="20vh">
    <p>祎</p>
    <p>这个字念[yī]，美好的意思 </p>
    <template #footer>
      <span class="pipi-dialog-footer">
        <Button @click="visible = false">取消</Button>
        <Button level="primary" @click="ok">确定</Button>
      </span>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import Dialog from '../../lib/Dialog.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      visible.value = false;
    };
    return {visible, toggle, ok};
  }
}
</script>