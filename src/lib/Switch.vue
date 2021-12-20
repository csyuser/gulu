<template>
  <button :class="{checked:value,disabled}" :style="style" @click="toggle" :disabled="disabled">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  name: 'Switch',
  props:{
    value:{type:Boolean},  //switch初始值
    disabled:{type:Boolean,default:false},  //switch是否禁用
    activeColor:{type:String,default:'#409eff'},  //switch 打开时的背景色,默认#409eff
    inactiveColor:{type:String,default:'#dcdfe6'},  //switch 关闭时的背景色,默认#dcdfe6
  },
  computed:{
    style(){
      return{
        background:this.value?this.activeColor:this.inactiveColor
      }
    }
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
    //background: #409eff;
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
  &:disabled:hover{
    cursor: not-allowed;
    &:active{
      >span{
        width: $h2;
        margin-left: 0;
      }
    }
  }
}
</style>