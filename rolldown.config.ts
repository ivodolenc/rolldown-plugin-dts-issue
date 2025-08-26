import { defineConfig } from 'rolldown'
import { dts } from 'rolldown-plugin-dts'

export default defineConfig({
  input: './src/types.ts',
  plugins: [dts({ emitDtsOnly: true })],
  tsconfig: './tsconfig.json',
  output: {
    dir: './dist',
  },
})
