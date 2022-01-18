<template>
  <section>
    <header>
      <h3>{{ component?.['__sourceCodeTitle'] }}</h3>
      <ul class="tools">
        <li @click="toggleCodeVisible">
          <svg class="icon">
            <use xlink:href="#icon-code"></use>
          </svg>
        </li>
      </ul>
    </header>
    <main>
      <section class="description">
        <slot name="description"></slot>
      </section>
      <section class="example">
        <component :is="component"></component>
      </section>
      <section class="code" v-if="codeVisible">
        <pre class="language-css" v-html="Prism.highlight(component['__sourceCode'], Prism.languages.html, 'html')"/>
      </section>
    </main>
  </section>
</template>

<script lang="ts">
import {ref} from 'vue';
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const Prism = (window as any).Prism;
export default {
  name: 'DocDemo',
  props: {component: {type: Object}},
  setup() {
    const codeVisible = ref(false);
    const toggleCodeVisible = () => {
      codeVisible.value = !codeVisible.value;
    };
    return {codeVisible, toggleCodeVisible, Prism};
  }
};
</script>

<style scoped lang='scss'>
$borderColor: #dcdfe6;

section {
  margin-top: 16px;
  border: 1px solid $borderColor;
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $borderColor;
    padding: 16px;

    > .tools {
      margin-left: auto;

      .icon {
        cursor: pointer;

        &:hover {
          color: lighten(#24292E, 20%)
        }
      }
    }
  }

  > main {
    padding: 0 16px 16px;

    > section {
      margin-top: 16px;
      border: none;
    }
  }
}
</style>