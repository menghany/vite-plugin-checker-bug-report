import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import TurboConsole from 'unplugin-turbo-console/vite'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import AutoComponents from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    VueRouter({
      exclude: ['**/_*/**', '**/_*.*'],
    }),
    vue(),
    vueJsx(),
    checker({
      // vueTsc: true,
      eslint: {
        lintCommand: 'eslint .',
        useFlatConfig: true,
      },
    }),
    AutoComponents({
      resolvers: [
        VueUseComponentsResolver(),
      ],
    }),
    AutoImport({
      vueTemplate: true,
      packagePresets: [{ package: 'lodash-es', ignore: ['default'] }],
      eslintrc: {
        enabled: true,
      },
      imports: [
        // presets
        'vue',
        VueRouterAutoImports,
        '@vueuse/core',
      ],
    }),
    TurboConsole(),
  ],
  base: './',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    port: 7001,
    host: '0.0.0.0',
    proxy: {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
