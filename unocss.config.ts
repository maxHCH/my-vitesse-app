import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-gray-600 text-white cursor-pointer hover:bg-gray-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none transition duration-200 ease-in-out hover:opacity-100 hover:text-gray-300 dark:hover:text-gray-500 !outline-none'],
  ],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'Noto Sans Traditional Chinese',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
        dot: 'DotGothic16',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
