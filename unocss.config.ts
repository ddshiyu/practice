import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-main': 'border-gray-400 border-1px border-solid',
    'bg-main': 'bg-gray-400',
    'bg-base': 'bg-white dark:bg-hex-1a1a1a',
    'codebox': 'rounded-5px border-1px border-solid border-gray-200 p-10px mb-16px'
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  theme: {
    colors: {
      primary: '#3eaf7c',
    }
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
