<template>
  <button :class="{checked}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import {ref} from 'vue'

export default {
  name: 'Switch',
  setup(){
    const checked = ref(false)
    const toggle = ()=>{
      checked.value = !checked.value
    }
    return {checked,toggle}
  }
};
</script>

<style scoped lang='scss'>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h / 2;
  background: #dcdfe6;
  position: relative;
  > span{
    position: absolute;
    display: inline-block;
    height: $h2;
    width: $h2;
    border-radius: $h2 / 2;
    background: #ffffff;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
  }
  &.checked {
    background: #409eff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>