import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(), // 使用 vue 插件
        vueJsx(), // 使用 vueJsx 插件
        vueDevTools(), // vue devtools 插件使用
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)), // 使用 @ 别名代表 src 目录
        },
    },
});
