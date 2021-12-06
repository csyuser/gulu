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
      context.emit('update:value',!props.value)
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
  cursor: pointer;
  &:active{
    >span{
      width: calc( #{$h2} + 4px);
    }
  }
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
    &:active{
      >span{
        width: calc( #{$h2} + 4px);
        margin-left: -4px;
      }
    }
  }
}
</style>