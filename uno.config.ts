import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetExtra } from 'unocss-preset-extra'

export default defineConfig({
  presets: [
    presetUno,
    presetAttributify(),
    presetIcons({
      extraProperties: {
        cursor: 'pointer',
      },
      prefix: 'icon-',
      warn: true,
    }),
    presetExtra(),
    presetWebFonts({
      fonts: {
        mono: 'DM Mono',
        sans: 'DM Sans',
        serif: 'DM Serif Display',
      },
    }),
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'red': 'border-red-500 border-solid border',
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
