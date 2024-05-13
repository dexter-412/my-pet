import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import checkerPlugin from 'vite-plugin-checker'
import eslintPlugin from 'vite-plugin-eslint2'
import stylelintPlugin from 'vite-plugin-stylelint'
import svgLoaderPlugin from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    eslintPlugin({
      fix: true,
      dev: true,
      // build: true,
      cache: false,
      include: ['./**/*.vue', './**/*.ts', './**/*.js'],
    }),

    checkerPlugin({
      typescript: true,
    }),

    stylelintPlugin({
      include: '**/*.{vue,css,scss}',
      emitError: true,
      fix: true,
      cache: false,
    }),

    svgLoaderPlugin({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),

    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      autoImportComponentCase: 'pascal',
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
