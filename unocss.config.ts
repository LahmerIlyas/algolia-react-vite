import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

interface Theme {
  colors: {
    primary: {
      base: string
      dark: string
      light: string
    }
  }
}

export default defineConfig<Theme>({
  shortcuts: [
    // ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    // ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['text-s1', 'font-sans text-[length:32px] font-semibold leading-normal'],
    ['text-s2', 'font-sans text-[length:26px] font-semibold leading-10'],
    ['text-s3', 'font-sans text-[length:22px] font-semibold leading-8'],
    ['text-s4', 'font-sans text-[length:18px] font-semibold leading-7'],
    ['text-s5', 'font-sans text-[length:15px] font-medium leading-5'],
    ['text-s6', 'font-sans text-[length:12px] font-semibold leading-4'],
    ['text-btn', 'font-sans text-[length:15px] font-bold leading-5'],
    ['text-lead', 'font-sans text-[length:17px] font-normal leading-6'],
    ['text-body', 'font-sans text-[length:14px] font-normal leading-5'],
    ['text-caption', 'font-sans text-[length:12px] font-normal leading-4'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: [
          {
            name: 'Poppins',
            weights: ['400', '500', '600', '700', '800'],
            italic: false,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  theme: {
    colors: {
      primary: {
        base: '#ffb843',
        dark: '#c88804',
        light: '#ffea74',
      },
    },

  },
  rules: [],
})
