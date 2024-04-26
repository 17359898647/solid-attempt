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
import presetAnimations from 'unocss-preset-animations'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  presets: [
    presetUno(),
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
    presetAnimations(),
    presetForms({
      strategy: 'base',
    }),
  ],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'red': 'border-red-500 border-solid border',
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        hover: 'hsl(var(--primary-hover))',
        foreground: 'hsl(var(--primary-foreground))',
        100: 'hsl(var(--primary-100))',
        200: 'hsl(var(--primary-200))',
        300: 'hsl(var(--primary-300))',
        500: 'hsl(var(--primary-500))',
        600: 'hsl(var(--primary-600))',
        700: 'hsl(var(--primary-700))',
        900: 'hsl(var(--primary-900))',
      },
      gray: {
        950: 'rgb(3 7 18)',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
        background: {
          DEFAULT: 'hsl(var(--secondary-background))',
          active: 'hsl(var(--secondary-background-active))',
        },
        font: {
          DEFAULT: 'hsl(var(--secondary-font))',
          active: 'hsl(var(--secondary-font-active))',
        },
        teal: {
          100: 'hsl(var(--teal-100))',
          200: 'hsl(var(--teal-200))',
          300: 'hsl(var(--teal-300))',
          400: 'hsl(var(--teal-400))',
          500: 'hsl(var(--teal-500))',
          600: 'hsl(var(--teal-600))',
          700: 'hsl(var(--teal-700))',
          800: 'hsl(var(--teal-800))',
          900: 'hsl(var(--teal-900))',
        },
        green: {
          100: 'hsl(var(--green-100))',
          200: 'hsl(var(--green-200))',
          300: 'hsl(var(--green-300))',
          400: 'hsl(var(--green-400))',
        },
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      info: {
        DEFAULT: 'hsl(var(--info))',
        foreground: 'hsl(var(--info-foreground))',
      },
      success: {
        DEFAULT: 'hsl(var(--success))',
        foreground: 'hsl(var(--success-foreground))',
      },
      warning: {
        DEFAULT: 'hsl(var(--warning))',
        foreground: 'hsl(var(--warning-foreground))',
        500: '#f97316',
      },
      disabled: {
        DEFAULT: 'hsl(var(--disable))',
      },
      error: {
        DEFAULT: 'hsl(var(--error))',
        foreground: 'hsl(var(--error-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
        100: '#EFEFEF',
      },
      accents: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
        100: 'hsl(var(--accent-100))',
        purple: {
          100: 'hsl(var(--purple-100))',
          200: 'hsl(var(--purple-200))',
          300: 'hsl(var(--purple-300))',
        },
        blue: {
          100: 'hsl(var(--blue-100))',
          200: 'hsl(var(--blue-200))',
          300: 'hsl(var(--blue-300))',
          400: 'hsl(var(--blue-400))',
        },
        pink: {
          100: 'hsl(var(--pink-100))',
          200: 'hsl(var(--pink-200))',
          300: 'hsl(var(--pink-300))',
        },
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
      sidebar: {
        user: {
          action: 'hsl(var(--color-sidebar-user-action))',
          setting: 'hsl(var(--color-sidebar-user-setting))',
        },
      },
      brightBlue: '#0891b2',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
    },
    minWidth: {
      24: '6rem',
      40: '10rem',
    },
    minHeight: {
      40: '10rem',
    },
    maxHeight: {
      '1/2-screen': '50vh',
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--kb-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--kb-accordion-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
    boxShadow: {
      checkBox: '0px 4px 20px 0px rgba(218, 225, 232, 0.50)',
    },
    backgroundPosition: {
      'left-center': 'left center',
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
