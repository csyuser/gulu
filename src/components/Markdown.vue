<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script>
// import {ref} from 'vue'

export default {
  name: 'Intro',
  props: {content: {type: String, required: true}},
  // setup(props){
  //   const content = ref (null)
  //   import(props.path).then(result => {
  //     content.value = result.default
  //   })
  //   return {
  //     content
  //   }
  // },
}
</script>

<style scoped lang='scss'>

</style>