import { defineConfig } from 'rollup'
import typescript1 from '@rollup/plugin-typescript'

export default defineConfig({
    input: "./src/index.ts",
    output: {
        file: "./dist/bundler.js",
        format: "esm"
    },
    plugins: [typescript1()]
})