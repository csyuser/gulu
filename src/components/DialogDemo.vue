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
<!--    <Button level="primary" @click="outerVisible = true">点击显示dialog</Button>-->
<!--    <Dialog v-model:visible="outerVisible" :close-on-click-overlay="false" title="名字自己起" width="50%">-->
<!--      <p>剧情歌：</p>-->
<!--      <p>剧情歌是一类有别于其他歌曲的一种有具体故事和情境的歌曲，<br>剧情歌会有以叙事为主要目的的歌词和根据情境插入的旁白。<br>-->
<!--        营造良好的叙事氛围，是剧情歌的一个重要内容。<br>剧情歌是新兴的一种歌曲，它介于歌曲与小说之间。<br>-->
<!--        一个剧情歌即是一首歌曲又是一个短篇故事，也是受剧情歌爱好者喜欢的原因。</p>-->
<!--      <template #footer>-->
<!--      <span class="pipi-dialog-footer">-->
<!--        <Button level="primary" @click="innerVisible = true">点击一下，可以打开嵌套的弹窗</Button>-->
<!--      </span>-->
<!--      </template>-->
<!--    </Dialog>-->
<!--    <Dialog v-model:visible="innerVisible" :close-on-click-overlay="false" title="名字自己起" append-to-body>-->
<!--      <p>祎</p>-->
<!--      <p>这个字念[yī]，美好的意思 </p>-->
<!--      <template #footer>-->
<!--      <span class="pipi-dialog-footer">-->
<!--        <Button level="primary" @click="innerVisible = false">关闭</Button>-->
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
    const outerVisible = ref(false);
    const innerVisible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const ok = () => {
      console.log('ok');
      visible.value = false;
    };
    return {visible, toggle, ok,outerVisible,innerVisible};
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