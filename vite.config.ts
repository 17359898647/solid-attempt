import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'
import { presetDaisy } from 'unocss-preset-daisy'
import { presetUno } from 'unocss'

export default defineConfig({
  plugins: [solid(), UnoCSS({
    presets: [presetUno(), presetDaisy()],
  })],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
