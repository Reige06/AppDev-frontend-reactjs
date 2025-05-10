import { defineConfig } from 'vite'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  base: '/AppDev-frontend-reactjs/',  
  plugins: [ghPages()],
})
