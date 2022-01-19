<demo>一句话打开dialog</demo>

<template>
  <Button level="primary" @click="showDialog">点击显示dialog</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import {h} from 'vue';
import {openDialog} from '../../lib/openDialog';

export default {
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        title: '剧情歌',
        content: h('p', {}, '剧情歌是新兴的一种歌曲，它介于歌曲与小说之间，一个剧情歌即是一首歌曲又是一个短篇故事'),
      });
    };
    return {showDialog};
  }
};
</script>