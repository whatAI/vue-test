//vite.config.js
// @ts-ignore
import { defineConfig } from 'vite';
import { resolve } from 'path';
// @ts-ignore
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// @ts-ignore
import Components from "unplugin-vue-components/vite";
// @ts-ignore
import AutoImport from "unplugin-auto-import/vite";
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [AntDesignVueResolver()],
        }),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: 'less', // 一定要开启这个配置项
                }),
            ],
        }),
    ],
    // ...
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    server: {
        port: 8086,
        host: true,
        open: true,
        proxy: {
            '/bilibili-api': {
                target: 'http://localhost:8086',
                changeOrigin: true,
                rewrite: function (p) { return p.replace(/^\/bilibili-api/, ''); }
            },
        }
    },
    // 开启less支持
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    'primary-color': '#fb7299',
                    'link-color': '#fb7299',
                    'border-radius-base': '2px',
                },
                javascriptEnabled: true,
            }
        }
    }
});
