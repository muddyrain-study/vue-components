import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";
import terser from "@rollup/plugin-terser";
import { defineConfig } from "rollup";

export default [
  // 打包组件的任务
  defineConfig({
    // 打包组件的任务
    input: "packages/components/index.ts", // 打包入口
    // 打包的输出
    output: {
      dir: "dist/components",
      format: "esm",
    },
    // 外部依赖，这一部分依赖不需要进行打包
    external: ["vue"],
    // 指定要使用的插件，注意插件是有顺序
    plugins: [
      del({ targets: "dist/components" }), // 先把上一次的打包内容删除掉
      vue({
        include: ["**/*.vue"],
      }),
      typescript({
        tsconfig: "tsconfig.app.json",
      }),
      terser(),
      copy({
        targets: [
          { src: "packages/components/package.json", dest: "dist/components" },
        ],
      }),
    ],
  }),
  // 打包样式的任务
  defineConfig({
    input: "packages/theme-chalk/src/index.scss",
    output: {
      file: "dist/theme-chalk/index.css",
      format: "esm",
    },
    plugins: [
      del({ targets: "dist/theme-chalk" }),
      postcss({
        // 把 css 插入到 style 中
        extract: true,
        // 压缩 css
        minimize: true,
        use: ["sass"],
      }),
      copy({
        targets: [
          { src: "packages/theme-chalk/src/fonts/*", dest: "dist/theme-chalk" },
          {
            src: "packages/theme-chalk/package.json",
            dest: "dist/theme-chalk",
          },
        ],
      }),
    ],
  }),
];
