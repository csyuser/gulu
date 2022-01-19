<demo>嵌套的dialog</demo>

<template>
  <Button level="primary" @click="outerVisible = true">点击显示dialog</Button>
  <Dialog v-model:visible="outerVisible" :close-on-click-overlay="false" title="名字自己起" width="50%">
    <p>剧情歌：</p>
    <p>剧情歌是一类有别于其他歌曲的一种有具体故事和情境的歌曲，<br/>剧情歌会有以叙事为主要目的的歌词和根据情境插入的旁白。<br/>
      营造良好的叙事氛围，是剧情歌的一个重要内容。<br/>剧情歌是新兴的一种歌曲，它介于歌曲与小说之间。<br/>
      一个剧情歌即是一首歌曲又是一个短篇故事，也是受剧情歌爱好者喜欢的原因。</p>
    <template #footer>
      <span class="pipi-dialog-footer">
        <Button level="primary" @click="innerVisible = true">点击一下，可以打开嵌套的弹窗</Button>
      </span>
    </template>
  </Dialog>
  <Dialog v-model:visible="innerVisible" :close-on-click-overlay="false" title="名字自己起" append-to-body>
    <p>Array.prototype.forEach()</p>
    <p>不会改变原数组，除非你在回调函数里面更改原数组</p>
    <p>除了抛出异常，否则没有办法跳出或者终止循环</p>
    <p>不会对未初始化的值进行任何操作（当它不存在）</p>
    <template #footer>
        <span class="pipi-dialog-footer">
          <Button level="primary" @click="innerVisible = false">关闭</Button>
        </span>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Dialog from '../../lib/Dialog.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const outerVisible = ref(false);
    const innerVisible = ref(false);
    return {outerVisible, innerVisible};
  }
};
</script>