<template>
  <button :class="{checked:value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  name: 'Switch',
  props:{
    value:{type:Boolean}
  },
  setup(props,context){
    const toggle = ()=>{
      context.emit('input',!props.value)
    }
    return {toggle}
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
    transition: all 250ms;
  }
  &.checked {
    background: #409eff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>