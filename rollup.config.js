// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser

import esbuild from 'rollup-plugin-esbuild' //将ts变为js
import vue from 'rollup-plugin-vue'    //将vue变为js
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"  //把js代码js代码变丑的（没有缩进格式）

export default {
  input: 'src/lib/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'pipi',
    file: 'dist/lib/pipi.js',
    format: 'umd',
    plugins: [terser()]
  }, {
    name: 'pipi',
    file: 'dist/lib/pipi.esm.js',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015',
    }),
    vue({
      include: /\.vue$/,
    })
  ],
} 