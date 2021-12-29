<template>
  <section>
    <p>基本用法：</p>
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
  </section>
<!--  <section>-->
<!--    <p>嵌套的dialog：</p>-->
<!--    <Button level="primary" @click="toggle">点击显示dialog</Button>-->
<!--    <Dialog v-model:visible="visible" :close-on-click-overlay="false" title="名字自己起">-->
<!--      <p>祎</p>-->
<!--      <p>这个字念[yī]，美好的意思 </p>-->
<!--      <template #footer>-->
<!--      <span class="pipi-dialog-footer">-->
<!--        <Button @click="visible = false">取消</Button>-->
<!--        <Button level="primary" @click="ok">确定</Button>-->
<!--      </span>-->
<!--      </template>-->
<!--    </Dialog>-->
<!--  </section>-->
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
    const ok = () => {
      console.log('ok');
      visible.value = false;
    };
    return {visible, toggle, ok};
  }
};
</script>

<style scoped lang='scss'>
section {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
</style>