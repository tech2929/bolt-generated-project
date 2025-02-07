import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno()
  ],
  shortcuts: {
    'gap-4': 'gap-4px',
  },
})
