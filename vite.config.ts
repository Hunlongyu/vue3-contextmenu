import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({ command ,mode }) => {
  if (command === 'build') {
    if (mode === 'lib') {
      return {
        plugins: [vue()],
        build: {
          outDir: 'dist',
          lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name: 'eprComponents'
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue'
              }
            }
          }
        }
      }
    }
    if (mode === 'doc') {
      return {
        plugins: [vue()],
        base: './',
        build: {
          outDir: 'docs'
        }
      }
    }
  }
  if (command === 'serve') {
    return {
      plugins: [vue()],
      server: {
        open: true
      }
    }
  }
}
