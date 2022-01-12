<template>
  <article>
    <h1>
      开始使用
    </h1>

    <p>请先<a href="#/doc/install">安装</a>本组件库。</p>
    <p>然后在你的代码中写入下面的代码</p>
    <pre><code>import {Button, Tabs, Switch, Dialog} from "king-ui"</code></pre>
    <p>就可以使用我提供的组件了。</p>

    <h2>Vue 单文件组件</h2>
    <p>代码示例：</p>
    <pre><code>
       <template>
      <div>
        <Button>按钮</Button>
      </div>
    </template>
    <script>
    import {Button, Tabs, Switch, Dialog} from 'king-ui'

    export default {
      components: {Button}
    }
    </script>
      </code></pre>
  </article>
</template>

<script>
export default {
  name: 'GetStart'
}
</script>

<style scoped lang='scss'>

</style>